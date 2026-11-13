"""Generate the site's derived images. The deploy (.github/workflows/hugo.yaml) runs this before every build,
so nothing here is committed; run it locally to preview them.

  python3 assets/render-images.py            # everything
  python3 assets/render-images.py symptoms   # only the cards of posts whose file name contains "symptoms"

Writes:
  static/images/og/<post file name>.jpg   share card per blog post (assets/og/post.html; used by layouts/partials/_funcs/get-page-images.html)
  static/images/og-card.jpg               site-wide share card (assets/og/home.html)
  static/images/resume/resume.webp        still of static/resume.pdf for the résumé page

Needs hugo, Google Chrome, ImageMagick, cwebp, and pdftoppm (Linux) or qlmanage (macOS).
"""
import csv, io, re, shutil, subprocess, sys, tempfile, tomllib
from datetime import date
from pathlib import Path
from urllib.parse import urlencode, urlparse

ROOT = Path(__file__).resolve().parents[1]
OG = ROOT / "assets/og"
OUT = ROOT / "static/images/og"
MAC_CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CHROME = shutil.which("google-chrome") or shutil.which("chromium") or MAC_CHROME
MAGICK = shutil.which("magick") or "convert"  # ImageMagick 7 vs 6 (Ubuntu)


def run(*cmd, **kw):
    return subprocess.run([str(c) for c in cmd], check=True, **kw)


def shoot(page: str, dest: Path, tmp: Path) -> None:
    png = tmp / "shot.png"
    sandbox = [] if CHROME == MAC_CHROME else ["--no-sandbox"]  # CI runners block Chrome's sandbox; pages are our own files
    run(CHROME, "--headless=new", *sandbox, "--hide-scrollbars", "--allow-file-access-from-files",
        "--window-size=1200,630", "--force-device-scale-factor=2", "--virtual-time-budget=8000",
        f"--screenshot={png}", page, capture_output=True)
    run(MAGICK, png, "-quality", "84", dest)
    print("wrote", dest.relative_to(ROOT))


def resume(tmp: Path) -> None:
    pdf, dest = ROOT / "static/resume.pdf", ROOT / "static/images/resume/resume.webp"
    if shutil.which("pdftoppm"):
        run("pdftoppm", "-png", "-singlefile", "-scale-to", "2200", pdf, tmp / "resume")
        png = tmp / "resume.png"
    else:
        run("qlmanage", "-t", "-s", "2200", "-o", tmp, pdf, capture_output=True)
        png = tmp / "resume.pdf.png"
    dest.parent.mkdir(parents=True, exist_ok=True)
    run("cwebp", "-quiet", "-q", "84", png, "-o", dest)
    print("wrote", dest.relative_to(ROOT))


def main(only: str = "") -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        # build once so the reading time matches what the post page shows
        run("hugo", "--quiet", "-d", tmp / "site", cwd=ROOT)
        listing = run("hugo", "list", "all", cwd=ROOT, capture_output=True, text=True).stdout
        urls = {r["path"]: urlparse(r["permalink"]).path for r in csv.DictReader(io.StringIO(listing))}

        for md in sorted((ROOT / "content/blog").glob("*.md")):
            if md.name == "_index.md" or only not in md.stem:
                continue
            _, head, body = md.read_text().split("+++", 2)
            front = tomllib.loads(head)
            if front.get("draft"):
                continue
            built = (tmp / "site" / urls[f"content/blog/{md.name}"].strip("/") / "index.html").read_text()
            minutes = re.search(r"(\d+) min read", built).group(1)
            when = front["date"] if isinstance(front["date"], date) else date.fromisoformat(front["date"][:10])
            # banner: front matter `images`, else the first local image in the post, else the card shows Amar's photo
            first = re.search(r"!\[[^\]]*\]\((/images/[^)\s]+)", body)
            banner = (front.get("images") or [first and first.group(1) or ""])[0]
            query = urlencode({
                "title": front["title"],
                "date": f"{when.day} {when:%b %Y}",
                "read": f"{minutes} min read",
                "img": (ROOT / "static" / banner.lstrip("/")).as_uri() if banner else "",
            })
            shoot(f"{(OG / 'post.html').as_uri()}?{query}", OUT / f"{md.stem}.jpg", tmp)

        if not only:
            shoot((OG / "home.html").as_uri(), ROOT / "static/images/og-card.jpg", tmp)
            resume(tmp)


if __name__ == "__main__":
    main(*sys.argv[1:2])

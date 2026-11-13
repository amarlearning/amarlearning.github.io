"""Render the social share cards with headless Chrome.

  python3 assets/og/render.py            # every blog post + the site card
  python3 assets/og/render.py symptoms   # only posts whose file name contains "symptoms"

Writes static/images/og/<post file name>.jpg (picked up by layouts/partials/_funcs/get-page-images.html)
and static/images/og-card.jpg. Needs Google Chrome, ImageMagick and hugo on PATH.
"""
import csv, io, re, subprocess, sys, tempfile, tomllib
from datetime import date
from pathlib import Path
from urllib.parse import urlencode, urlparse

ROOT = Path(__file__).resolve().parents[2]
HERE = ROOT / "assets/og"
OUT = ROOT / "static/images/og"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def shoot(page: str, dest: Path, tmp: Path) -> None:
    png = tmp / "shot.png"
    subprocess.run([CHROME, "--headless=new", "--hide-scrollbars", "--allow-file-access-from-files",
                    "--window-size=1200,630", "--force-device-scale-factor=2", "--virtual-time-budget=8000",
                    f"--screenshot={png}", page], check=True, capture_output=True)
    subprocess.run(["magick", png, "-quality", "84", dest], check=True)
    print("wrote", dest.relative_to(ROOT))


def main(only: str = "") -> None:
    OUT.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory() as t:
        tmp = Path(t)
        # build once so the reading time matches what the post page shows
        subprocess.run(["hugo", "--quiet", "-d", tmp / "site"], cwd=ROOT, check=True)
        listing = subprocess.run(["hugo", "list", "all"], cwd=ROOT, check=True, capture_output=True, text=True).stdout
        urls = {r["path"]: urlparse(r["permalink"]).path for r in csv.DictReader(io.StringIO(listing))}

        for md in sorted((ROOT / "content/blog").glob("*.md")):
            if md.name == "_index.md" or only not in md.stem:
                continue
            _, head, body = md.read_text().split("+++", 2)
            front = tomllib.loads(head)
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
            shoot(f"{(HERE / 'post.html').as_uri()}?{query}", OUT / f"{md.stem}.jpg", tmp)

        if not only:
            shoot((HERE / "home.html").as_uri(), ROOT / "static/images/og-card.jpg", tmp)


if __name__ == "__main__":
    main(*sys.argv[1:2])

// Footer mascot: a pixel rubber duck cruising on a rainbow.
// Pixel-art rules: everything renders on one shared frame clock (TICK), every coordinate snaps to the
// art-pixel grid, and the world (stars, rainbow) streams past while the duck holds its spot and bobs.
// Cruises when the footer comes into view, follows the pointer, hops on click, then the world slows,
// the duck settles and drawing stops. Paused off-screen; a single still frame under reduced motion.
(function () {
  var button = document.querySelector(".duck-button");
  if (!button) return;
  var canvas = button.querySelector("canvas");
  var img = button.querySelector(".sprite");   // the owner's own sprite, drawn as an <img> so GIFs keep animating
  var ctx = canvas.getContext("2d");
  var reduce = matchMedia("(prefers-reduced-motion: reduce)");

  var P = 4;            // one art pixel, in CSS px
  var SEG = 8;          // rainbow column width
  var TICK = 90;        // ms per animation frame: the shared beat
  var CRUISE = 0.2;     // world speed while flying, px per ms
  var SPRITES = [       // 14 x 12, facing right: Y body, D wing, O beak, K eye
    ["........YYYY..", ".......YYYYYY.", ".......YYKYYOO", ".......YYYYYOO", "........YYYY..", "Y......YYYY...",
     "YY...YYYYYYY..", "YYYYYYDDDYYYY.", "YYYYYDDDDYYYY.", ".YYYYYDDYYYYY.", "..YYYYYYYYYY..", "....YYYYYY...."],
    ["........YYYY..", ".......YYYYYY.", ".......YYKYYOO", ".......YYYYYOO", "...DD...YYYY..", "Y..DDD.YYYY...",
     "YY..DDYYYYYY..", "YYYYYYYDYYYYY.", "YYYYYYYYYYYYY.", ".YYYYYYYYYYYY.", "..YYYYYYYYYY..", "....YYYYYY...."]
  ];
  var BOB = [0, 0, -1, -1, -1, 0];   // duck's vertical bob per frame, in art pixels
  var SPARKLE = [                     // six star frames, cells around the centre
    [[0, 0]],
    [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]],
    [[0, 0], [1, 0], [2, 0], [-1, 0], [-2, 0], [0, 1], [0, 2], [0, -1], [0, -2]],
    [[2, 0], [3, 0], [-2, 0], [-3, 0], [0, 2], [0, 3], [0, -2], [0, -3]],
    [[1, 1], [-1, 1], [1, -1], [-1, -1]],
    [[0, 0]]
  ];

  var probe = document.createElement("span");
  probe.hidden = true;
  button.appendChild(probe);
  function resolve(token) { probe.style.color = "var(" + token + ")"; return getComputedStyle(probe).color; }

  var colors, sprites;
  function readColors() {
    colors = {
      Y: resolve("--duck-body"), D: resolve("--duck-wing"), O: resolve("--duck-beak"), K: resolve("--duck-eye"),
      star: resolve("--color-muted"),
      bands: [1, 2, 3, 4, 5, 6].map(function (i) { return resolve("--rainbow-" + i); })
    };
    sprites = SPRITES.map(function (rows) {
      var c = document.createElement("canvas");
      c.width = 14; c.height = 12;
      var g = c.getContext("2d");
      rows.forEach(function (row, y) {
        for (var x = 0; x < row.length; x++) if (row[x] !== ".") { g.fillStyle = colors[row[x]]; g.fillRect(x, y, 1, 1); }
      });
      return c;
    });
  }

  var W = 0, H = 0, dpr = 1;
  var duck = { x: -40, y: 60, vx: 0, vy: 0 };
  var home = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  var trail = [], sparks = [], stars = [];
  var world = 0, pointer = null, awakeUntil = 0, t0 = 0;
  var last = 0, lastTick = -1, frozenTick = 3;
  var running = false, visible = false, flown = false;

  function tailOffset() { return img && img.naturalWidth ? img.offsetWidth * 0.38 : 18; }
  function snap(v) { return Math.round(v / P) * P; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function resize() {
    var r = canvas.getBoundingClientRect();
    if (!r.width) return;
    dpr = window.devicePixelRatio || 1;
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    home.x = Math.min(W - 48, Math.max(W * 0.62, 180)); home.y = H * 0.5;
    stars = [];
    var count = Math.max(4, Math.round(W / 70));
    for (var i = 0; i < count; i++) stars.push({ x: (i + Math.random() * 0.6) * (W / count), y: 10 + Math.random() * (H - 20), o: i * 2 % 6 });
    if (!running) { if (!flown) still(); draw(frozenTick); }
  }

  // the resting picture: the duck at home with a straight rainbow behind it
  function still() {
    duck.x = home.x; duck.y = home.y; duck.vx = duck.vy = 0; world = 0;
    trail = [];
    for (var x = duck.x - tailOffset(); x > -SEG; x -= 4) trail.push({ x: x, y: duck.y + 4 });
  }

  function step(dt, now) {
    var f = dt / 16.67, awake = now < awakeUntil || pointer;

    // world speed eases toward cruise while awake, toward a stop when not
    world += ((awake ? CRUISE : 0) - world) * (1 - Math.pow(0.94, f));
    if (!awake && world < 0.004) world = 0;

    if (pointer) { target.x = pointer.x; target.y = pointer.y; }
    else if (awake) {
      var t = (now - t0) / 1000;
      target.x = home.x + Math.sin(t * 0.6) * 40;
      target.y = home.y + Math.sin(t * 1.25) * H * 0.32;
    } else { target.x = home.x; target.y = home.y; }

    var pull = pointer ? 0.03 : 0.018, drag = Math.pow(0.85, f);
    duck.vx = (duck.vx + (target.x - duck.x) * pull * f) * drag;
    duck.vy = (duck.vy + (target.y - duck.y) * pull * f) * drag;
    duck.x += duck.vx * f;
    duck.y = clamp(duck.y + duck.vy * f, 24, H - 24);

    // the rainbow is laid down at the tail and carried off by the world
    var shift = world * dt;
    trail.forEach(function (p) { p.x -= shift; });
    while (trail.length && trail[trail.length - 1].x < -SEG) trail.pop();
    var tail = { x: duck.x - tailOffset(), y: duck.y + 4 }, head = trail[0];
    if (!head || Math.abs(tail.x - head.x) >= 2 || Math.abs(tail.y - head.y) >= 2) trail.unshift(tail);
    // keep the rainbow continuous from the tail to the left edge
    for (var i = 1; i < trail.length; i++) if (trail[i - 1].x - trail[i].x > SEG) trail.splice(i, 0, { x: trail[i - 1].x - SEG / 2, y: trail[i - 1].y });

    stars.forEach(function (s) {
      s.x -= shift * 1.6;
      if (s.x < -12) { s.x = W + 12; s.y = 10 + Math.random() * (H - 20); }
    });
    sparks = sparks.filter(function (s) {
      s.vy += 0.2 * f; s.x += s.vx * f - shift; s.y += s.vy * f; s.life -= dt;
      return s.life > 0;
    });
  }

  function draw(tick) {
    if (!W || !colors) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = colors.star;
    ctx.globalAlpha = 0.75;
    stars.forEach(function (s) {
      var cx = Math.round(s.x / 3) * 3, cy = Math.round(s.y / 3) * 3;
      SPARKLE[(tick + s.o) % 6].forEach(function (c) { ctx.fillRect(cx + c[0] * 3, cy + c[1] * 3, 3, 3); });
    });
    ctx.globalAlpha = 1;

    // rainbow columns: one per SEG, alternate columns sit a pixel lower, flipping every 3 frames
    var flip = Math.floor(tick / 3), lastCol = null;
    for (var i = 0; i < trail.length; i++) {
      var col = Math.floor(trail[i].x / SEG);
      if (col === lastCol) continue;
      lastCol = col;
      var y0 = snap(trail[i].y) - 12 + ((col + flip) % 2 ? P : 0);
      for (var b = 0; b < 6; b++) { ctx.fillStyle = colors.bands[b]; ctx.fillRect(col * SEG, y0 + b * P, SEG, P); }
    }

    sparks.forEach(function (s) {
      ctx.globalAlpha = clamp(s.life / 300, 0, 1);
      ctx.fillStyle = colors.bands[s.c];
      ctx.fillRect(snap(s.x), snap(s.y), P, P);
    });
    ctx.globalAlpha = 1;

    var flying = world > 0.02 || Math.hypot(duck.vx, duck.vy) > 0.4;
    var bob = flying ? BOB[tick % 6] * P : 0;
    var tilt = Math.round(clamp(duck.vy * 0.05, -0.3, 0.3) / 0.15) * 0.15;
    if (img && img.naturalWidth) {
      img.style.visibility = "visible";
      img.style.transform = "translate(" + (snap(duck.x) - img.offsetWidth / 2) + "px," + (snap(duck.y) + bob - img.offsetHeight / 2) + "px) rotate(" + tilt + "rad)";
      return;
    }
    ctx.save();
    ctx.translate(snap(duck.x), snap(duck.y) + bob);
    ctx.rotate(tilt);
    ctx.drawImage(sprites[flying ? Math.floor(tick / 2) % 2 : 0], -28, -24, 56, 48);
    ctx.restore();
  }

  function settled(now) {
    return now > awakeUntil && !pointer && !sparks.length && world === 0 &&
      Math.hypot(duck.vx, duck.vy) < 0.04 && Math.hypot(target.x - duck.x, target.y - duck.y) < 0.8;
  }

  function frame(now) {
    if (!running) return;
    var dt = Math.min(48, now - (last || now));
    last = now;
    step(dt, now);
    var tick = Math.floor(now / TICK);
    if (tick !== lastTick) { lastTick = tick; draw(tick); }
    if (settled(now) || !visible || document.hidden) {
      running = false;
      frozenTick = lastTick;
      draw(frozenTick);
      return;
    }
    requestAnimationFrame(frame);
  }

  function start() {
    if (running || reduce.matches || !visible || document.hidden) return;
    running = true; last = 0;
    requestAnimationFrame(frame);
  }

  function wake(ms) {
    awakeUntil = Math.max(awakeUntil, performance.now() + ms);
    start();
  }

  button.addEventListener("pointermove", function (e) {
    if (reduce.matches) return;
    var r = canvas.getBoundingClientRect();
    pointer = { x: clamp(e.clientX - r.left, 60, W - 40), y: clamp(e.clientY - r.top, 24, H - 24) };
    wake(1800);
  });
  button.addEventListener("pointerleave", function () { pointer = null; wake(1800); });
  button.addEventListener("click", function () {
    if (reduce.matches) return;
    duck.vy -= 6;
    for (var i = 0; i < 16; i++) {
      var a = Math.random() * Math.PI * 2, v = 1.5 + Math.random() * 3;
      sparks.push({ x: duck.x, y: duck.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 2, life: 450 + Math.random() * 300, c: i % 6 });
    }
    wake(4500);
  });

  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    if (!visible) return;
    if (!flown && !reduce.matches) {
      flown = true;
      duck.x = -40; duck.y = home.y; duck.vx = 6; trail = [];
      world = CRUISE;
      t0 = performance.now();
      wake(7000);
    } else start();
  }, { threshold: 0.4 }).observe(canvas);

  document.addEventListener("visibilitychange", function () { if (!document.hidden) start(); });
  function recolor() { readColors(); if (!running) draw(frozenTick); }
  new MutationObserver(recolor).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", recolor);
  new ResizeObserver(resize).observe(canvas);

  if (img) img.addEventListener("load", function () { if (!running) { if (!flown) still(); draw(frozenTick); } });
  readColors();
  resize();
})();

// 各錯視のデータ。art はそのまま .stage / .thumb に挿入される純CSSマークアップ。
window.ILLUSIONS = [
  {
    id: "cafe-wall",
    title: "カフェウォール錯視",
    sub: "Café Wall Illusion",
    explain:
      "白黒のタイルを半マスずつずらし、間に灰色の細い線を引くと、完全に水平な線が斜めに傾いて見えます。明暗の境界の位置を脳が誤って統合することで生じます。定規を当てると、線はどれも平行です。",
    art: buildCafeWall,
  },
  {
    id: "hermann-grid",
    title: "ヘルマン格子",
    sub: "Hermann Grid",
    explain:
      "黒地に白い線の格子を見ると、線が交差する点に「灰色の点」がちらついて見えます。視野の中心で注視している交点には現れにくいのが特徴。網膜の側抑制（隣り合う細胞が互いの反応を抑える働き）で説明されます。",
    art: buildHermann,
  },
  {
    id: "scintillating-grid",
    title: "きらめき格子錯視",
    sub: "Scintillating Grid",
    explain:
      "交点に白い円を置いた格子。視線を動かすと、見ていない円が黒く点滅して見えます。ヘルマン格子の強化版で、注視している円は白いままなのに、周辺視野の円が次々と黒く見える「きらめき」が生じます。",
    art: buildScintillating,
  },
  {
    id: "ebbinghaus",
    title: "エビングハウス錯視",
    sub: "Ebbinghaus Illusion",
    explain:
      "中央のオレンジの円は左右どちらも同じ大きさです。大きな円に囲まれると小さく、小さな円に囲まれると大きく見えます。周囲との相対的な大きさで判断してしまう、文脈依存の錯視です。",
    art: buildEbbinghaus,
  },
  {
    id: "muller-lyer",
    title: "ミュラー・リヤー錯視",
    sub: "Müller-Lyer Illusion",
    explain:
      "2本の横線は同じ長さです。両端の矢羽が外向き（>—<）だと短く、内向き（<—>）だと長く見えます。奥行きの手がかりとして矢羽を解釈してしまうため、と説明されることが多い古典的な錯視です。",
    art: buildMuller,
  },
  {
    id: "kanizsa",
    title: "カニッツァの三角形",
    sub: "Kanizsa Triangle",
    explain:
      "実際には描かれていない白い三角形が、はっきりと浮かび上がって見えます。さらに背景より明るく感じられます。脳が断片的な手がかりから「最も単純な形」を補完する、主観的輪郭の代表例です。",
    art: buildKanizsa,
  },
  {
    id: "simultaneous-contrast",
    title: "同時対比",
    sub: "Simultaneous Contrast",
    explain:
      "中央の2つの四角は同じ灰色です。明るい背景の上では暗く、暗い背景の上では明るく見えます。色や明るさは絶対値ではなく、周囲との関係で知覚されることを示します。",
    art: buildContrast,
  },
  {
    id: "afterimage",
    title: "色の残像",
    sub: "Negative Afterimage",
    explain:
      "中央の十字を20〜30秒見つめ続けてから、下の白い面の十字に視線を移してください。先ほどの色の補色（ここでは赤っぽい色）が残像として浮かびます。視細胞の一部が疲労し、反対色が強調されるためです。",
    art: buildAfterimage,
  },
];

function buildCafeWall() {
  const cols = 14;
  let html = '<div class="cafe-wall">';
  for (let r = 0; r < 8; r++) {
    const shift = r % 2 === 1 ? " shift" : "";
    html += `<div class="row${shift}">`;
    for (let c = 0; c < cols; c++) {
      html += `<div class="cell ${c % 2 === 0 ? "b" : "w"}"></div>`;
    }
    html += "</div>";
  }
  return html + "</div>";
}

function buildHermann() {
  let html = '<div class="hermann">';
  for (let i = 0; i < 36; i++) html += "<div></div>";
  return html + "</div>";
}

function buildScintillating() {
  // 6x6 のセル → 交点は 5x5 = 25 個
  const cell = 40, gap = 16, pad = 16;
  let dots = "";
  for (let r = 1; r < 6; r++) {
    for (let c = 1; c < 6; c++) {
      const x = pad + c * cell + (c - 0.5) * gap;
      const y = pad + r * cell + (r - 0.5) * gap;
      dots += `<span class="dot" style="left:${x}px;top:${y}px"></span>`;
    }
  }
  let cells = "";
  for (let i = 0; i < 36; i++) cells += "<div></div>";
  return `<div class="scint">${cells}${dots}</div>`;
}

function buildEbbinghaus() {
  const ring = (n, radius) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = 80 + Math.cos(a) * radius;
      const y = 80 + Math.sin(a) * radius;
      s += `<div class="sat" style="left:${x}px;top:${y}px;transform:translate(-50%,-50%)"></div>`;
    }
    return s;
  };
  return `
    <div class="ebbinghaus">
      <div class="group big">${ring(6, 62)}<div class="center"></div></div>
      <div class="group small">${ring(8, 44)}<div class="center"></div></div>
    </div>`;
}

function buildMuller() {
  // SVG で正確に矢羽を描く。out = >——< (短く見える) / in = <——> (長く見える)
  const W = 340, x1 = 40, x2 = 300, y = 30, d = 30, A = (35 * Math.PI) / 180;
  const dx = d * Math.cos(A), dy = d * Math.sin(A);
  const seg = (a, b, c, e) =>
    `<line x1="${a}" y1="${b}" x2="${c}" y2="${e}" stroke="#222" stroke-width="4" stroke-linecap="round"/>`;
  const figure = (mode) => {
    const s = mode === "out" ? 1 : -1; // out: 左フィンは左へ, in: 右へ
    let p = seg(x1, y, x2, y); // 本体
    // 左端
    p += seg(x1, y, x1 - s * dx, y - dy) + seg(x1, y, x1 - s * dx, y + dy);
    // 右端
    p += seg(x2, y, x2 + s * dx, y - dy) + seg(x2, y, x2 + s * dx, y + dy);
    return `<svg width="${W}" height="60" viewBox="0 0 ${W} 60">${p}</svg>`;
  };
  return `<div class="muller">${figure("out")}${figure("in")}</div>`;
}

function buildKanizsa() {
  return `
    <div class="kanizsa">
      <div class="pac p1"></div>
      <div class="pac p2"></div>
      <div class="pac p3"></div>
    </div>`;
}

function buildContrast() {
  return `
    <div class="contrast">
      <div class="half light"><div class="chip"></div></div>
      <div class="half dark"><div class="chip"></div></div>
    </div>`;
}

function buildAfterimage() {
  return `
    <div class="afterimage">
      <div class="target"></div>
      <div class="blank"></div>
    </div>`;
}

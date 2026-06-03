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
  {
    id: "ponzo",
    title: "ポンゾ錯視",
    sub: "Ponzo Illusion",
    explain:
      "2本の赤い横線は同じ長さです。線路のように奥へ収束する2本のレールの間に置くと、上（奥）の線のほうが長く見えます。遠くにあるのに同じ大きさに映るものは「実際は大きい」と脳が補正するためと考えられています。",
    art: buildPonzo,
  },
  {
    id: "zollner",
    title: "ツェルナー錯視",
    sub: "Zöllner Illusion",
    explain:
      "長い横線はすべて平行です。短い斜めの線を交互に向きを変えて重ねると、平行な線が傾いて、互いに近づいたり離れたりして見えます。短い線の角度に引きずられて全体の向きを誤って判断してしまいます。",
    art: buildZollner,
  },
  {
    id: "hering",
    title: "ヘリング錯視",
    sub: "Hering Illusion",
    explain:
      "2本の赤い縦線はどちらもまっすぐです。中心から放射状に広がる線の上に置くと、外側へ弓なりにふくらんで見えます。放射状の線を奥行きの手がかりと解釈してしまうために生じます。",
    art: buildHering,
  },
  {
    id: "poggendorff",
    title: "ポッゲンドルフ錯視",
    sub: "Poggendorff Illusion",
    explain:
      "帯の左右に出ている斜めの線は、実は1本の直線です。帯で隠れると、上下にずれて別々の線のように見えます。鋭角・鈍角の見え方の偏りが原因とされる、位置ずれの錯視です。",
    art: buildPoggendorff,
  },
  {
    id: "delboeuf",
    title: "デルブーフ錯視",
    sub: "Delboeuf Illusion",
    explain:
      "中央の2つの黒い円は同じ大きさです。すぐ外側に細い円を描くと大きく、離れた大きな円で囲むと小さく見えます。エビングハウス錯視と近い、囲み方によるサイズの錯視です。",
    art: buildDelboeuf,
  },
  {
    id: "jastrow",
    title: "ジャストロー錯視",
    sub: "Jastrow Illusion",
    explain:
      "2つの扇形はまったく同じ形・大きさです。短い内側の弧と長い外側の弧を隣り合わせに並べると、下の図形のほうが大きく見えます。隣り合う辺の長さを比べてしまうために起こります。",
    art: buildJastrow,
  },
  {
    id: "white",
    title: "ホワイト錯視",
    sub: "White's Illusion",
    explain:
      "2つの灰色の長方形はまったく同じ色です。白い縞に挟まれた灰色は暗く、黒い縞に挟まれた灰色は明るく見えます。単純な明暗対比とは逆向きで、縞模様への「所属」が効いているとされます。",
    art: buildWhite,
  },
  {
    id: "mach-bands",
    title: "マッハバンド",
    sub: "Mach Bands",
    explain:
      "明るさの異なる帯を段階的に並べると、それぞれの境目で暗い側はより暗く、明るい側はより明るい筋が見えます。各帯の内部は均一な色なのに、輪郭が強調されます。網膜の側抑制によるものです。",
    art: buildMach,
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

// ---- SVG ヘルパー ----
function svgLine(a, b, c, d, color, w) {
  return `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
}

function buildPonzo() {
  const W = 300, H = 300;
  let p = "";
  // 収束するレール
  p += svgLine(55, H - 10, 130, 25, "#333", 4);
  p += svgLine(W - 55, H - 10, W - 130, 25, "#333", 4);
  // 同じ長さの2本の横線
  p += svgLine(95, 80, 205, 80, "#e53935", 8);
  p += svgLine(95, 250, 205, 250, "#e53935", 8);
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildZollner() {
  const W = 320, H = 240;
  let p = "";
  const rows = [40, 80, 120, 160, 200];
  rows.forEach((y, i) => {
    p += svgLine(20, y, 300, y, "#222", 3); // 平行な長い線
    const ang = (i % 2 === 0 ? 55 : -55) * (Math.PI / 180);
    const tl = 11, dx = tl * Math.cos(ang), dy = tl * Math.sin(ang);
    for (let x = 32; x < 300; x += 24) {
      p += svgLine(x - dx, y - dy, x + dx, y + dy, "#222", 2);
    }
  });
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildHering() {
  const W = 320, H = 240, cx = 160, cy = 120;
  let p = "";
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    p += svgLine(cx, cy, cx + Math.cos(a) * 300, cy + Math.sin(a) * 300, "#9aa0aa", 1);
  }
  // まっすぐな2本の縦線
  p += svgLine(105, 12, 105, 228, "#e53935", 4);
  p += svgLine(215, 12, 215, 228, "#e53935", 4);
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildPoggendorff() {
  const W = 320, H = 240, m = 0.55, x0 = 40, y0 = 60;
  const barL = 140, barR = 200;
  const yAt = (x) => y0 + m * (x - x0);
  let p = `<rect x="${barL}" y="10" width="${barR - barL}" height="${H - 20}" fill="#cfd3da"/>`;
  p += svgLine(x0, y0, barL, yAt(barL), "#e53935", 4); // 左の線分
  p += svgLine(barR, yAt(barR), 280, yAt(280), "#e53935", 4); // 右の線分（同一直線）
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildDelboeuf() {
  return `
    <div class="delboeuf">
      <div class="grp"><div class="ring near"></div><div class="dot"></div></div>
      <div class="grp"><div class="ring far"></div><div class="dot"></div></div>
    </div>`;
}

function buildJastrow() {
  // 同一の扇形（環状セクター）を2つ、隣接させて配置
  const cx = 160, r1 = 70, r2 = 120, a1 = 200, a2 = 340;
  const pol = (r, deg) => {
    const a = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(a), r * Math.sin(a)];
  };
  const sector = (cy, fill) => {
    const o1 = pol(r2, a1), o2 = pol(r2, a2), i2 = pol(r1, a2), i1 = pol(r1, a1);
    const d = `M ${o1[0]} ${o1[1] + cy} A ${r2} ${r2} 0 0 1 ${o2[0]} ${o2[1] + cy}` +
      ` L ${i2[0]} ${i2[1] + cy} A ${r1} ${r1} 0 0 0 ${i1[0]} ${i1[1] + cy} Z`;
    return `<path d="${d}" fill="${fill}"/>`;
  };
  // 上の図形と、その下に少しずらして同じ図形
  const top = sector(70, "#4f7bd6");
  const bot = sector(118, "#ff7043");
  return `<svg width="320" height="210" viewBox="0 0 320 210">${top}${bot}</svg>`;
}

function buildWhite() {
  // 縦縞の上に同じ灰色の2つの長方形
  let stripes = "";
  for (let i = 0; i < 8; i++) {
    stripes += `<div class="col ${i % 2 === 0 ? "k" : "w"}"></div>`;
  }
  return `
    <div class="white-ill">
      <div class="stripes">${stripes}</div>
      <div class="patch on-black"></div>
      <div class="patch on-white"></div>
    </div>`;
}

function buildMach() {
  const grays = [40, 70, 100, 130, 160, 190, 220];
  const bands = grays
    .map((g) => `<div style="background:rgb(${g},${g},${g})"></div>`)
    .join("");
  return `<div class="mach">${bands}</div>`;
}

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
  {
    id: "necker-cube",
    title: "ネッカーの立方体",
    sub: "Necker Cube",
    explain:
      "線だけで描かれた立方体です。どの面が手前かが決まっておらず、見つめていると前後の向きがパッと反転します。同じ図形に対して脳が2通りの奥行き解釈を切り替えるために起こります。",
    art: buildNecker,
  },
  {
    id: "vertical-horizontal",
    title: "垂直水平錯視",
    sub: "Vertical–Horizontal Illusion",
    explain:
      "縦の線と横の線はまったく同じ長さです。それでも縦の線のほうが長く見えます。人は垂直方向の長さを過大に、水平方向を過小に見積もる傾向があるためと考えられています。",
    art: buildVertHoriz,
  },
  {
    id: "ehrenstein",
    title: "エーレンシュタイン錯視",
    sub: "Ehrenstein Illusion",
    explain:
      "放射状にならんだ短い線が、中心の手前で途切れています。すると何も描かれていない中心に、周囲より明るい円盤がぼんやりと浮かんで見えます。途切れた線端を脳が円として補完するためです。",
    art: buildEhrenstein,
  },
  {
    id: "orbison",
    title: "オービソン錯視",
    sub: "Orbison Illusion",
    explain:
      "赤い四角はゆがみのない正方形です。同心円の上に重ねると、辺が内側へへこみ、全体がふくらんで見えます。背景の曲線を奥行きの手がかりと解釈し、図形がそれに引きずられます。",
    art: buildOrbison,
  },
  {
    id: "shepard-tables",
    title: "シェパードのテーブル",
    sub: "Shepard's Tables",
    explain:
      "2つの天板（平行四辺形）はまったく同じ形・大きさです。向きを変えただけで、片方は細長く、もう片方は幅広に見えます。平面の図形を立体のテーブルとして奥行き解釈してしまうために生じます。",
    art: buildShepard,
  },
  {
    id: "helmholtz-squares",
    title: "ヘルムホルツの正方形",
    sub: "Helmholtz's Squares",
    explain:
      "2つの正方形は同じ大きさです。横縞の正方形は縦長（背が高く）に、縦縞の正方形は横長に見えます。「横縞は太って見える」という通説とは逆の、ヘルムホルツが示した古典的な結果です。",
    art: buildHelmholtz,
  },
  {
    id: "checker-shadow",
    title: "チェッカーシャドウ",
    sub: "Adelson's Checker Shadow",
    explain:
      "マスAとマスBは、まったく同じ灰色です。円柱の影がかかったB（本来は明るいマス）と、影の外にあるA（本来は暗いマス）が、同じ明るさになるよう作られています。脳が「影だから本当はもっと明るいはず」と補正するため、別の色に見えます。指で2マスをつなぐと同じ色だとわかります。",
    art: buildCheckerShadow,
  },
  {
    id: "cornsweet",
    title: "コーンスウィート錯視",
    sub: "Cornsweet Illusion",
    explain:
      "左半分と右半分の大部分は、まったく同じ灰色です。中央の境目だけ、左がわずかに明るく・右がわずかに暗くなるグラデーションが付いています。この境目の差を脳が全体に押し広げ、左半分が明るく、右半分が暗く見えます。中央を指で隠すと、左右が同じ色だとわかります。",
    art: buildCornsweet,
  },
  {
    id: "wundt",
    title: "ヴント錯視",
    sub: "Wundt Illusion",
    explain:
      "2本の赤い縦線はどちらもまっすぐです。中央へ収束する放射線の上に置くと、内側へ弓なりにへこんで見えます。ヘリング錯視とは逆向きの、線の傾きにつられて生じる歪みの錯視です。",
    art: buildWundt,
  },
  {
    id: "sander",
    title: "サンダーの平行四辺形",
    sub: "Sander's Parallelogram",
    explain:
      "2本の赤い対角線は、まったく同じ長さです。大きな平行四辺形の対角線（左）は、小さいほうの対角線（右）よりずっと長く見えます。図形全体の大きさに引きずられて、長さの判断が狂います。",
    art: buildSander,
  },
  {
    id: "bezold",
    title: "ベツォルト効果",
    sub: "Bezold Effect",
    explain:
      "左右の赤は、まったく同じ色です。黒い線を重ねた赤は暗く沈み、白い線を重ねた赤は明るく華やいで見えます。隣り合う色によって、同じ色がまるで違う色に見える現象で、配色やデザインで利用されます。",
    art: buildBezold,
  },
  {
    id: "lilac-chaser",
    title: "ライラックチェイサー",
    sub: "Lilac Chaser",
    explain:
      "中央の十字を見つめ続けてください。まず、消えていく隙間を緑色の点が追いかけて回って見えます。さらに見続けると、紫の点が消え、緑の点だけがぐるぐる回って見えます。残像（補色）と、動かないものが消えるトロクスラー効果が組み合わさった錯視です。",
    art: buildLilac,
  },
  {
    id: "troxler",
    title: "トロクスラー効果",
    sub: "Troxler's Fading",
    explain:
      "中央の黒い点をじっと見つめ続けてください。視線を動かさずにいると、周辺のぼんやりした色の斑点が、数秒で消えて背景に溶け込みます。網膜が動かない刺激に慣れてしまうために起こる、消失の錯視です。",
    art: buildTroxler,
  },
  {
    id: "fraser-spiral",
    title: "フレーザー錯視",
    sub: "Fraser Spiral",
    explain:
      "渦巻きに見えますが、実際は中心が同じ複数の「円」です。傾いた縞の短い線分（より糸）を円に沿って並べると、円が渦巻きに見えます。指で1本の円をなぞると、ちゃんと閉じた円だとわかります。",
    art: buildFraser,
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
  // 上の図形と、その下に少しずらして同じ図形（弧の頂点が切れないよう中心を下げる）
  const top = sector(135, "#1f4fb8");
  const bot = sector(183, "#ff7043");
  return `<svg width="320" height="200" viewBox="0 0 320 200">${top}${bot}</svg>`;
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

function buildNecker() {
  const ink = "#141414", w = 3;
  const f = [[60, 100], [170, 100], [170, 210], [60, 210]]; // 手前の正方形
  const b = [[110, 55], [220, 55], [220, 165], [110, 165]]; // 奥の正方形
  let p = "";
  const poly = (pts) => {
    for (let i = 0; i < 4; i++) {
      const a = pts[i], c = pts[(i + 1) % 4];
      p += svgLine(a[0], a[1], c[0], c[1], ink, w);
    }
  };
  poly(f);
  poly(b);
  for (let i = 0; i < 4; i++) p += svgLine(f[i][0], f[i][1], b[i][0], b[i][1], ink, w);
  return `<svg width="290" height="270" viewBox="0 0 290 270">${p}</svg>`;
}

function buildVertHoriz() {
  const ink = "#141414";
  let p = svgLine(50, 200, 230, 200, ink, 4); // 水平（長さ180）
  p += svgLine(140, 200, 140, 20, ink, 4);    // 垂直（長さ180）
  return `<svg width="280" height="220" viewBox="0 0 280 220">${p}</svg>`;
}

function buildEhrenstein() {
  const cx = 150, cy = 130, ri = 44, ro = 112, N = 16;
  let p = "";
  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2;
    p += svgLine(
      cx + Math.cos(a) * ri, cy + Math.sin(a) * ri,
      cx + Math.cos(a) * ro, cy + Math.sin(a) * ro, "#141414", 4
    );
  }
  return `<svg width="300" height="260" viewBox="0 0 300 260">${p}</svg>`;
}

function buildOrbison() {
  const cx = 150, cy = 150;
  let p = "";
  for (let r = 18; r <= 150; r += 15) {
    p += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#9aa0aa" stroke-width="1.5"/>`;
  }
  p += `<rect x="80" y="80" width="140" height="140" fill="none" stroke="#df3b26" stroke-width="3"/>`;
  return `<svg width="300" height="300" viewBox="0 0 300 300">${p}</svg>`;
}

function buildShepard() {
  // 同一の平行四辺形（天板）を、向きだけ変えて2つ
  const top = "M0 0 L150 -28 L196 44 L46 72 Z";
  const t = (tf) =>
    `<path d="${top}" transform="${tf}" fill="#d2cab6" stroke="#141414" stroke-width="3"/>`;
  return `<svg width="430" height="240" viewBox="0 0 430 240">
    ${t("translate(40,90)")}
    ${t("translate(392,12) rotate(90)")}
  </svg>`;
}

function buildHelmholtz() {
  return `
    <div class="helmholtz">
      <div class="sq horiz"></div>
      <div class="sq vert"></div>
    </div>`;
}

function buildCheckerShadow() {
  const cell = 32, cols = 8, rows = 7, ox = 12, oy = 12;
  const light = "#b4b4b4", dark = "#5a5a5a";
  const W = ox * 2 + cols * cell; // 280
  const H = oy * 2 + rows * cell; // 248
  let sq = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const fill = (r + c) % 2 === 0 ? light : dark;
      sq += `<rect x="${ox + c * cell}" y="${oy + r * cell}" width="${cell}" height="${cell}" fill="${fill}"/>`;
    }
  }
  // 影：右側に斜めに落ちる半透明の黒（明るいマスを暗いマスと同じ明度まで落とす）
  const shadow = `<polygon points="${ox + 5 * cell},${oy} ${W},${oy} ${W},${H} ${ox + 3 * cell},${H}" fill="rgba(0,0,0,0.5)"/>`;
  // 円柱（影の落とし主）
  const cyl =
    `<rect x="206" y="40" width="40" height="74" fill="#7c8a5f"/>` +
    `<ellipse cx="226" cy="114" rx="20" ry="8" fill="#5f6b48"/>` +
    `<ellipse cx="226" cy="40" rx="20" ry="8" fill="#9aa97a"/>`;
  const aC = [ox + 2 * cell + cell / 2, oy + 3 * cell + cell / 2]; // 明るい領域の暗いマス
  const bC = [ox + 6 * cell + cell / 2, oy + 4 * cell + cell / 2]; // 影の中の明るいマス
  const label = (p, t) =>
    `<text x="${p[0]}" y="${p[1] + 7}" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="22" font-weight="700" fill="#fff">${t}</text>`;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${sq}${shadow}${cyl}${label(aC, "A")}${label(bC, "B")}</svg>`;
}

function buildCornsweet() {
  return `<div class="cornsweet"></div>`;
}

function buildWundt() {
  const W = 320, H = 240, cy = 120;
  let p = "";
  // 左右の焦点へ収束する放射線（中央が凹んで見える）
  const foci = [-30, 350];
  foci.forEach((fx) => {
    for (let i = 0; i < 22; i++) {
      const a = (i / 21 - 0.5) * 1.5; // 扇状に広がる角度
      const dir = fx < 0 ? 1 : -1;
      p += svgLine(fx, cy, fx + dir * 420, cy + Math.tan(a) * 420, "#9aa0aa", 1);
    }
  });
  // まっすぐな2本の縦線
  p += svgLine(110, 18, 110, 222, "#e53935", 4);
  p += svgLine(210, 18, 210, 222, "#e53935", 4);
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildSander() {
  const W = 390, H = 240;
  const A = [20, 200], B = [90, 70], C = [370, 70], D = [300, 200];
  const M = [160, 200], N = [230, 70]; // 仕切り（辺と平行）
  const ink = "#141414";
  let p = "";
  // 外周
  p += svgLine(A[0], A[1], B[0], B[1], ink, 3);
  p += svgLine(B[0], B[1], C[0], C[1], ink, 3);
  p += svgLine(C[0], C[1], D[0], D[1], ink, 3);
  p += svgLine(D[0], D[1], A[0], A[1], ink, 3);
  // 仕切り
  p += svgLine(M[0], M[1], N[0], N[1], ink, 3);
  // 2本の対角線（A→N と M→C、長さは等しい）
  p += svgLine(A[0], A[1], N[0], N[1], "#e53935", 4);
  p += svgLine(M[0], M[1], C[0], C[1], "#e53935", 4);
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildBezold() {
  return `
    <div class="bezold">
      <div class="pane black"></div>
      <div class="pane white"></div>
    </div>`;
}

function buildLilac() {
  const n = 12, R = 120, dur = 1.2;
  let dots = "";
  for (let i = 0; i < n; i++) {
    const a = (i * 360) / n;
    const delay = ((i * dur) / n).toFixed(3);
    dots += `<span class="d" style="transform:rotate(${a}deg) translate(0,-${R}px);animation-delay:${delay}s"></span>`;
  }
  return `<div class="lilac"><div class="cross"></div>${dots}</div>`;
}

function buildTroxler() {
  const cx = 160, cy = 160, R = 110, n = 7;
  const cols = ["#caa6d6", "#a6c6d6", "#d6c2a6", "#a6d6b4", "#d6a6b4", "#b4a6d6", "#c6d6a6"];
  let blobs = "";
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
    blobs += `<span class="blob" style="left:${x}px;top:${y}px;background:${cols[i]}"></span>`;
  }
  return `<div class="troxler">${blobs}<span class="fix"></span></div>`;
}

function buildFraser() {
  const cx = 160, cy = 160, W = 320, H = 320, cs = 20;
  let bg = "";
  for (let y = 0; y < H; y += cs) {
    for (let x = 0; x < W; x += cs) {
      const on = ((x / cs) + (y / cs)) % 2 === 0;
      bg += `<rect x="${x}" y="${y}" width="${cs}" height="${cs}" fill="${on ? "#777" : "#8b8b8b"}"/>`;
    }
  }
  let rings = "";
  for (let Rr = 34; Rr <= 150; Rr += 23) {
    const seg = Math.max(16, Math.round(Rr * 0.5));
    for (let i = 0; i < seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      const x = cx + Math.cos(a) * Rr, y = cy + Math.sin(a) * Rr;
      const tilt = (a * 180) / Math.PI + 90 + 35; // 接線から35°ひねる＝より糸
      const col = i % 2 === 0 ? "#141414" : "#f4f4f4";
      rings += `<rect x="${x - 9}" y="${y - 3}" width="18" height="6" rx="2" fill="${col}" transform="rotate(${tilt} ${x} ${y})"/>`;
    }
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${rings}</svg>`;
}

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
      "左の暗い面と右の明るい面を、なめらかなグラデーションでつないだだけの図です。それなのに、グラデーションの始まり（暗い側の折れ目）にはひときわ暗い帯が、終わり（明るい側の折れ目）にはひときわ明るい帯が見えます。明るさの変化の折れ目を、網膜の側抑制が強調するためです。",
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
  {
    id: "penrose-triangle",
    title: "ペンローズの三角形",
    sub: "Penrose Triangle",
    explain:
      "3本の角材が三角形に組まれていますが、現実には作れない「不可能図形」です。それぞれの角の接続は正しく見えるのに、全体としてはあり得ない立体になっています。脳が各部分を局所的に立体として解釈し、全体の矛盾には気づきにくいために成立します。",
    art: buildPenrose,
  },
  {
    id: "ouchi",
    title: "大内錯視",
    sub: "Ouchi Illusion",
    explain:
      "縞の向きが違うだけの、止まっている模様です。中央の円板だけ縞の向きが90度ずれているため、視線を動かすと円板が背景から浮き上がり、ゆらゆらと別々に動いて見えます。向きの異なる領域を脳が別の面として分離するために生じます。",
    art: buildOuchi,
  },
  {
    id: "rotating-snakes",
    title: "蛇の回転",
    sub: "Rotating Snakes",
    explain:
      "完全に静止した画像ですが、見ていない周辺の輪が、ゆっくり回転して見えます。黒・濃い色・白・明るい色という非対称な明暗の並びが、視線を動かすたびに脳に「動いた」と誤らせます。中心の1点をじっと見つめると、回転は止まります。",
    art: buildRotatingSnakes,
  },
  {
    id: "munker",
    title: "ムンカー錯視",
    sub: "Munker Illusion",
    explain:
      "3列の丸は、すべてまったく同じオレンジ色です。手前を横切る縞の色が違うだけで、左の丸はピンクがかって、右の丸は黄緑がかって見えます。色が隣り合う色に近づいて見える「同化」によって、同じ色が違う色に見えます。",
    art: buildMunker,
  },
  {
    id: "neon-spreading",
    title: "ネオンカラー拡散",
    sub: "Neon Color Spreading",
    explain:
      "格子の中央付近だけ線が水色になっています。すると、線のない部分にまで水色がにじみ出し、ぼんやりとした水色の円板が浮かんで見えます。ネオン管のような発光に見えることから名付けられた、主観的な色の錯視です。",
    art: buildNeon,
  },
  {
    id: "benham-disc",
    title: "ベンハムのコマ",
    sub: "Benham's Disc",
    explain:
      "白黒だけの模様が回転すると、うっすらと色の帯（赤・緑・青など）が見えてきます。視細胞が色ごとに反応の速さが違うため、点滅する白黒から幻の色が生まれます。回転の向きや速さを変えると、見える色も変わります。",
    art: buildBenham,
  },
  {
    id: "vasarely",
    title: "ヴァザルリ錯視",
    sub: "Vasarely Illusion",
    explain:
      "暗い色から明るい色へ、入れ子になった正方形を重ねています。すると、四隅から中心へ向かって、描かれていないはずの明るい（または暗い）対角線の筋がうっすらと見えます。各正方形の角で明暗差が強調されるために生じます。",
    art: buildVasarely,
  },
  {
    id: "motion-blindness",
    title: "運動誘発盲",
    sub: "Motion-Induced Blindness",
    explain:
      "中央の白い点をじっと見つめ続けてください。青い格子がゆっくり回り続けると、はっきり見えていた黄色い点が、ときどき消えてしまいます。動く背景に脳が注意を奪われ、止まっているものを見落とす現象です。視線を外すと黄色い点はすぐ戻ります。",
    art: buildMotionBlindness,
  },
  {
    id: "impossible-trident",
    title: "悪魔のフォーク",
    sub: "Impossible Trident",
    explain:
      "右側を見ると丸い棒が3本、左側を見ると四角い棒が2本あります。左右を別々に見るとどちらも自然なのに、全体は現実には作れない「不可能図形」です。手前の輪郭線がどこにもつながらず、脳が3本と2本をうまく統合できないために生じます。",
    art: buildImpossibleTrident,
  },
  {
    id: "schroeder",
    title: "シュレーダーの階段",
    sub: "Schröder Staircase",
    explain:
      "階段が見えますが、上り階段にも、ひっくり返った天井裏の張り出しにも見えます。どちらが手前かを決める手がかりがないため、見つめていると2つの解釈がパッと入れ替わります。ネッカーの立方体と同じ、多義図形の一種です。",
    art: buildSchroeder,
  },
  {
    id: "kanizsa-square",
    title: "カニッツァの四角形",
    sub: "Kanizsa Square",
    explain:
      "実際には描かれていない白い四角形が、くっきりと浮かび上がって見えます。背景より少し明るくも感じられます。4つの欠けた円（パックマン）の切り口を、脳が「四角形に隠されている」と補完するために生じる、主観的輪郭の代表例です。",
    art: buildKanizsaSquare,
  },
  {
    id: "chubb",
    title: "チャブ錯視",
    sub: "Chubb Illusion",
    explain:
      "左右の円の中身は、まったく同じ薄いまだら模様です。無地の灰色の上に置くと、はっきりした濃淡に見えますが、強いコントラストの背景の上に置くと、ぼやけて淡く見えます。周囲のコントラストが、模様の濃淡の見え方を変えてしまいます。",
    art: buildChubb,
  },
  {
    id: "pinna",
    title: "ピンナ＝ブレルスタッフ錯視",
    sub: "Pinna–Brelstaff Illusion",
    explain:
      "止まっている図形です。中央の点を見つめたまま、顔を画面に近づけたり遠ざけたりしてください。内側と外側の輪が、互いに逆向きに回転して見えます。傾いた小さな四角の明暗の手がかりを、脳が動きとして誤って処理するために生じます。",
    art: buildPinna,
  },
  {
    id: "chromostereopsis",
    title: "色立体視",
    sub: "Chromostereopsis",
    explain:
      "黒地に赤と青の帯を並べただけですが、赤が手前に、青が奥に（人によっては逆に）浮き出て、立体的に見えます。赤い光と青い光が目の中で屈折する角度が違い、わずかに違う奥行きにピントが合うために生じます。",
    art: buildChromostereopsis,
  },
  {
    id: "afterimage-flag",
    title: "国旗の残像",
    sub: "Afterimage Flag",
    explain:
      "上の旗の中心にある白い点を20〜30秒見つめ続けてから、下の白い面の＋に視線を移してください。シアン・黒・オレンジの旗が、補色である赤・白・青の星条旗になって残像で浮かびます。疲れた視細胞が反対の色を強く感じるためです。",
    art: buildAfterimageFlag,
  },
  {
    id: "motion-aftereffect",
    title: "運動残効（滝の錯視）",
    sub: "Motion Aftereffect",
    explain:
      "回転する渦巻きの中心を、20秒ほどじっと見つめてください。そのあと止まっているもの（自分の手や下の文章）に視線を移すと、それが逆向きに動いて見えます。一方向の動きに慣れた脳が、静止を「逆向きの動き」と感じるために生じます。",
    art: buildMotionAftereffect,
  },
  {
    id: "oppel-kundt",
    title: "オッペル・クント錯視",
    sub: "Oppel-Kundt Illusion",
    explain:
      "左右の区間は同じ長さです。細かい目盛りで埋められた区間（右）は、何もない区間（左）より長く見えます。空間が分割されていると、距離を過大に見積もる傾向があるためです。",
    art: buildOppelKundt,
  },
  {
    id: "judd",
    title: "ジャッド錯視",
    sub: "Judd Illusion",
    explain:
      "赤い点はどちらも線分のちょうど真ん中にあります。両端の矢羽が同じ向きにそろうと、中点が矢羽の開いた側へずれて見えます。ミュラー・リヤー錯視の親戚で、長さではなく「位置」がずれて見える錯視です。",
    art: buildJudd,
  },
  {
    id: "brentano",
    title: "ブレンターノ錯視",
    sub: "Brentano Illusion",
    explain:
      "中央の矢羽から左右の矢羽までの距離は同じです。内向きの矢羽に挟まれた左半分は短く、外向きの矢羽に挟まれた右半分は長く見えます。ミュラー・リヤー錯視の2つの図形を1本につなげた形です。",
    art: buildBrentano,
  },
  {
    id: "baldwin",
    title: "ボールドウィン錯視",
    sub: "Baldwin Illusion",
    explain:
      "上下2本の線は同じ長さです。大きな正方形に挟まれた線は短く、小さな正方形に挟まれた線は長く見えます。両端の図形の大きさが、あいだの距離の見えを変えてしまいます。",
    art: buildBaldwin,
  },
  {
    id: "corridor",
    title: "回廊錯視",
    sub: "Corridor Illusion",
    explain:
      "2本の黄色い柱はまったく同じ大きさです。廊下の奥に置かれた柱のほうが、ずっと大きく見えます。遠くにあるのに網膜上で同じ大きさなら「実物はもっと大きいはず」と脳が補正するためです。",
    art: buildCorridor,
  },
  {
    id: "leaning-tower",
    title: "斜塔錯視",
    sub: "Leaning Tower Illusion",
    explain:
      "2つの塔はまったく同じ図形（同じ傾き）です。並べると、右の塔のほうがより倒れかかって見えます。2枚を別々の絵ではなく1つの場面として見るため、平行に立つはずの塔が「奥で交わらない＝傾きが違う」と解釈されてしまいます。",
    art: buildLeaningTower,
  },
  {
    id: "irradiation",
    title: "光滲錯視",
    sub: "Irradiation Illusion",
    explain:
      "黒地の白い正方形と、白地の黒い正方形は同じ大きさです。白い正方形のほうがひとまわり大きく見えます。明るい領域は網膜上でにじんで広がるように処理されるため、と考えられています。ヘルムホルツが詳しく調べた古典です。",
    art: buildIrradiation,
  },
  {
    id: "munsterberg",
    title: "ミュンスターバーグ錯視",
    sub: "Münsterberg Illusion",
    explain:
      "段ごとに半マスずつずらした市松模様の間に黒い線を引くと、水平な線が斜めに傾いて見えます。カフェウォール錯視の原型として知られる図形で、こちらは仕切り線が黒でも起こります。",
    art: buildMunsterberg,
  },
  {
    id: "tilt-contrast",
    title: "傾きの対比",
    sub: "Tilt Contrast",
    explain:
      "中央の円の中の縞は、左右どちらも完全に垂直です。傾いた縞に囲まれると、囲みと反対の方向へわずかに傾いて見えます。周囲の傾きとの「対比」で向きの知覚がずれる錯視です。",
    art: buildTiltContrast,
  },
  {
    id: "twisted-cord",
    title: "より糸錯視",
    sub: "Twisted Cord Illusion",
    explain:
      "黒白をねじり合わせた「より糸」はすべて水平です。市松模様の背景に重ねると、糸が交互に傾いて見えます。糸の細かいねじれの向きに、全体の向きの知覚が引きずられるためで、フレーザー錯視と同じ仕組みです。",
    art: buildTwistedCord,
  },
  {
    id: "text-tilt",
    title: "文字列傾斜錯視",
    sub: "Tilted Letter Rows",
    explain:
      "文字の行はすべて水平です。それでも行ごとに右上がり・右下がりに傾いて見えます。文字の中の斜めの線の向きがそろうと、行全体が傾いて見える、日本語でよく知られた錯視です。",
    art: buildTextTilt,
  },
  {
    id: "bourdon",
    title: "ブルドン錯視",
    sub: "Bourdon Illusion",
    explain:
      "2つの黒い三角形の左の縁は、1本のまっすぐな直線上に並んでいます。それでも、つなぎ目で「く」の字に折れ曲がって見えます。図形の重心や軸の向きに、輪郭の向きの知覚が引きずられるためです。",
    art: buildBourdon,
  },
  {
    id: "bulge",
    title: "膨らみ錯視",
    sub: "Bulge Illusion",
    explain:
      "市松模様のマス目はすべて水平・垂直の直線です。中央付近のマスの角に小さな点を置くと、中央がレンズのように膨らんで見えます。小さな点が作るわずかな傾きの手がかりが集まって、面全体の歪みとして知覚されます。",
    art: buildBulge,
  },
  {
    id: "curvature-blindness",
    title: "曲線が折れ線に見える錯視",
    sub: "Curvature Blindness",
    explain:
      "すべての線は同じなめらかな波線（サインカーブ）です。灰色の背景の上では、山と谷で色が切り替わる波線だけが、カクカクの折れ線（ジグザグ）に見えます。2017年に高橋康介氏が報告した新しい錯視です。",
    art: buildCurvatureBlindness,
  },
  {
    id: "curvature-contrast",
    title: "曲率の対比",
    sub: "Curvature Contrast",
    explain:
      "中央の2本の赤い弧は、まったく同じ曲がり具合です。強く曲がった弧に囲まれると平らに、まっすぐに近い弧に囲まれると強く曲がって見えます。周囲との対比で「曲がり具合」の知覚がずれます。",
    art: buildCurvatureContrast,
  },
  {
    id: "koffka-ring",
    title: "コフカのリング",
    sub: "Koffka Ring",
    explain:
      "左の図のリングは均一な灰色で、ほぼ一様に見えます。右の図のように半分に割って上下にずらすと、暗い背景側の半リングは明るく、明るい背景側の半リングは暗く、はっきり違って見えます。ひとつながりに見えるかどうかで、明るさの知覚が変わります。",
    art: buildKoffkaRing,
  },
  {
    id: "benary-cross",
    title: "ベナリーの十字",
    sub: "Benary Cross",
    explain:
      "2つの灰色の三角形は同じ明るさです。黒い十字の内側に置かれた三角形のほうが、外側の三角形より明るく見えます。単純な周囲との対比ではなく、図形がどこに「所属」して見えるかが明るさを決めることを示します。",
    art: buildBenary,
  },
  {
    id: "dungeon",
    title: "ダンジョン錯視",
    sub: "Dungeon Illusion",
    explain:
      "中央の格子状の小さな正方形は、左右とも同じ灰色です。白い格子に囲まれた側は明るく、黒い格子に囲まれた側は暗く（または逆に）見えます。周囲の格子の色に「同化」して見える錯視です。",
    art: buildDungeon,
  },
  {
    id: "transparency",
    title: "透明視",
    sub: "Perceptual Transparency",
    explain:
      "中央に「半透明の灰色の板」が乗っているように見えますが、描かれているのは不透明な4色の長方形だけです。境界での明るさの組み合わせが半透明のときの法則に合っていると、脳は「透けた板が手前にある」という解釈を作り出します。",
    art: buildTransparency,
  },
  {
    id: "chevreul",
    title: "シェブルール錯視",
    sub: "Chevreul Illusion",
    explain:
      "それぞれの帯の中は完全に均一な明るさです。並べると、各帯の暗い隣との境目は明るく、明るい隣との境目は暗く見え、帯の内部に勾配があるように感じられます。網膜の側抑制が境目の差を強調するためです。",
    art: buildChevreul,
  },
  {
    id: "gradient-contrast",
    title: "グラデーション対比",
    sub: "Gradient Contrast",
    explain:
      "中央の横棒は端から端まで完全に均一な灰色です。背景が左から右へ暗→明と変化すると、棒は逆に左が明るく右が暗い、グラデーションがかかったように見えます。場所ごとの背景との対比が棒の中に勾配を作り出します。",
    art: buildGradientContrast,
  },
  {
    id: "glare",
    title: "グレア錯視",
    sub: "Glare Illusion",
    explain:
      "左右の中央の白い領域は、画面上ではまったく同じ白です。周囲から中心へ向かって明るくなるグラデーションで囲むと（左）、中心がまぶしく発光しているように見えます。実際に瞳孔が縮むことも報告されている錯視です。",
    art: buildGlare,
  },
  {
    id: "liebmann",
    title: "リープマン効果",
    sub: "Liebmann Effect",
    explain:
      "上下の図形は色だけが違います。背景と図形の明るさ（輝度）がほぼ同じになると（上）、色ははっきり違うのに輪郭がゆらゆらと不安定になり、形が読み取りにくくなります。形の知覚が色の違いではなく明るさの違いに頼っていることを示します。",
    art: buildLiebmann,
  },
  {
    id: "color-contrast",
    title: "色の同時対比",
    sub: "Chromatic Simultaneous Contrast",
    explain:
      "中央の2つの小さな四角は、まったく同じくすんだ灰緑色です。赤紫の背景の上では緑がかって、緑の背景の上では赤紫がかって見えます。周囲の色の反対方向へ、色の見えがずれる現象です。",
    art: buildColorContrast,
  },
  {
    id: "watercolor",
    title: "水彩錯視",
    sub: "Watercolor Illusion",
    explain:
      "図形の内側は純粋な白です。濃い紫の輪郭線の内側に細いオレンジの縁取りを添えるだけで、囲まれた領域全体がうっすらオレンジ色に塗られているように見えます。縁の色が面に広がって見える、ピンナらが報告した錯視です。",
    art: buildWatercolor,
  },
  {
    id: "color-constancy",
    title: "色の恒常性",
    sub: "Color Constancy",
    explain:
      "このイチゴの実の部分には、赤い画素は1つもありません。すべて灰色〜青緑色です。画面全体に青緑の光がかかっていると脳が解釈し、「照明の色を差し引いた本来の色」として赤を復元するため、赤く見えます。",
    art: buildColorConstancy,
  },
  {
    id: "varin",
    title: "ヴァリン図形",
    sub: "Varin Figure",
    explain:
      "4つの円の切り欠きだけが水色なのに、中央に半透明の水色の正方形が浮かんで見えます。カニッツァの四角形と同じ主観的輪郭に、色の拡散が加わったもので、ガラス板を通したような透明感まで知覚されます。",
    art: buildVarin,
  },
  {
    id: "abutting",
    title: "アバッティング格子",
    sub: "Abutting Grating",
    explain:
      "上下の縦縞は、半周期だけ横にずらして突き合わせてあります。すると、何も描かれていないつなぎ目に、はっきりした横線（輪郭）が見えます。線の端点の並びを、脳が「手前にある輪郭」として補完するためです。",
    art: buildAbutting,
  },
  {
    id: "amodal",
    title: "アモーダル補完",
    sub: "Amodal Completion",
    explain:
      "左の図は「四角の後ろに丸が隠れている」ように見えます。しかし実際に描かれているのは、右に示したパックマン形だけかもしれません。隠れた部分を脳が自動的に補って「完全な丸」として知覚する働きを、アモーダル補完と呼びます。",
    art: buildAmodal,
  },
  {
    id: "blind-spot",
    title: "盲点の充填",
    sub: "Blind Spot Filling-in",
    explain:
      "右目を閉じて、左目で右の＋を見つめてください。そのまま顔を画面にゆっくり近づけたり離したりすると、ある距離で左の黒い点が消え、背景の模様で埋められます。視神経の出口（盲点）には視細胞がなく、脳が周囲の模様で穴埋めしていることがわかります。",
    art: buildBlindSpot,
  },
  {
    id: "shape-from-shading",
    title: "凹凸の反転",
    sub: "Shape from Shading",
    explain:
      "上が明るい円は出っぱって、下が明るい円はへこんで見えます。グラデーションの向きが違うだけで、すべて同じ平面の円です。脳が「光は上から当たる」と仮定して陰影から立体を復元するためで、画面を上下逆にすると凹凸も反転します。",
    art: buildShapeFromShading,
  },
  {
    id: "wallpaper-stereogram",
    title: "壁紙ステレオグラム",
    sub: "Wallpaper Stereogram",
    explain:
      "目の力を抜いて、画面の奥を見るように左右の目の視線をずらしてください（平行法）。隣どうしの模様が重なると、間隔の狭い真ん中の段だけが手前に浮き上がって見えます。左右の目に入る像のずれから、脳が奥行きを作り出します。",
    art: buildWallpaperStereogram,
  },
  {
    id: "impossible-cube",
    title: "不可能の立方体",
    sub: "Impossible Cube",
    explain:
      "一見ふつうの立方体の枠ですが、奥にあるはずの縦の柱が、手前の梁の前を横切っています。エッシャーの版画『物見の塔』にも登場する不可能図形で、局所的にはどの接合も自然に見えるのに、全体としては成立しません。",
    art: buildImpossibleCube,
  },
  {
    id: "machs-book",
    title: "マッハの本",
    sub: "Mach's Book",
    explain:
      "開いた本（または折り立てたカード）の線画です。背表紙がこちらへ突き出して見えたり、奥へへこんで見えたり、2通りの解釈が切り替わります。ネッカーの立方体と同じ、奥行きの手がかりが足りない多義図形です。",
    art: buildMachsBook,
  },
  {
    id: "stereokinetic",
    title: "ステレオキネティック効果",
    sub: "Stereokinetic Effect",
    explain:
      "中心をずらして入れ子にした、ただの平らな円が回っているだけです。見つめていると、奥へ深く沈み込むトンネル（または突き出た円すい）の立体に見えてきます。回転による各円のずれ方を、脳が奥行きとして解釈するためです。",
    art: buildStereokinetic,
  },
  {
    id: "ames-window",
    title: "エイムズの窓",
    sub: "Ames Window",
    explain:
      "台形の窓がぐるぐると一方向に回転し続けています。しかし見ていると、回転ではなく、左右に往復して揺れているように見える瞬間があります。台形を「遠近法で見た長方形の窓」と解釈してしまうため、向きの反転を見落とすのです。",
    art: buildAmesWindow,
  },
  {
    id: "stepping-feet",
    title: "ステッピングフィート錯視",
    sub: "Stepping Feet Illusion",
    explain:
      "黄色と青の棒は、ぴったり同じ速さで滑らかに動いています。縞模様の上では、2本が交互に止まったり進んだり、足踏みするように見えます。背景との明暗差が大きい瞬間ほど速く見えるためで、棒の輪郭がぼやけると錯視は消えます。",
    art: buildSteppingFeet,
  },
  {
    id: "phi",
    title: "仮現運動",
    sub: "Apparent Motion (Phi)",
    explain:
      "2つの円が交互に点滅しているだけで、何も移動していません。それでも、1つの円が左右に行き来しているように見えます。映画やアニメーション、駅の電光掲示板が動いて見えるのも、この仮現運動のおかげです。",
    art: buildPhi,
  },
  {
    id: "wagon-wheel",
    title: "ワゴンホイール効果",
    sub: "Wagon-Wheel Effect",
    explain:
      "車輪は一定の向きにコマ送りで回転しています。しかし、1コマの回転角がスポークの間隔に近いため、逆向きにゆっくり回って見えます。映画の馬車の車輪が逆回転して見える現象と同じ仕組みです。",
    art: buildWagonWheel,
  },
  {
    id: "barber-pole",
    title: "バーバーポール錯視",
    sub: "Barberpole Illusion",
    explain:
      "縞模様は、どちらの窓の中でも真横に動いています。それなのに、縦長の窓では縞が上へ、横長の窓では横へ動いて見えます。窓の長い方向に沿った動きとして解釈されるためで、理髪店の回る看板が上へ昇って見えるのと同じ現象です。",
    art: buildBarberPole,
  },
  {
    id: "enigma",
    title: "エニグマ錯視",
    sub: "Enigma Illusion",
    explain:
      "完全に静止した図形です。中心を見つめていると、紫色のリングの中を、微粒子の流れがぐるぐると高速で走り抜けるように見えます。レヴィアンによる作品『エニグマ』で知られ、細かな目の動きが関与すると考えられています。",
    art: buildEnigma,
  },
  {
    id: "fraser-wilcox",
    title: "フレーザー・ウィルコックス錯視",
    sub: "Fraser-Wilcox Illusion",
    explain:
      "静止画ですが、円盤がゆっくり回転して見えます（見えない人もいます）。暗→明の繰り返しでできた扇形の並びが、周辺視野で一方向の動きの信号を生むためです。「蛇の回転」錯視の原型となった古典的な錯視です。",
    art: buildFraserWilcox,
  },
  {
    id: "flash-lag",
    title: "フラッシュラグ効果",
    sub: "Flash-Lag Effect",
    explain:
      "白い点は、回転する棒の延長線上ぴったりの位置で点滅しています。それでも、点が光った瞬間、棒はすでに少し先へ進んでいるように見えます。動くものの位置を脳が先読みして処理しているため、と考えられています。",
    art: buildFlashLag,
  },
  {
    id: "sfm-cylinder",
    title: "曖昧な回転円筒",
    sub: "Structure from Motion",
    explain:
      "点が左右に往復しているだけの平面的な動きですが、見つめていると透明な円筒が回転しているように見えます。さらに、回転の向きは右回りにも左回りにも見え、ときどき反転します。動きから立体を復元する脳の働き（運動からの構造）を示します。",
    art: buildSfmCylinder,
  },
  {
    id: "starburst",
    title: "きらめくスターバースト",
    sub: "Scintillating Starburst",
    explain:
      "描かれているのは、淡い灰色の星形の輪だけです。中心のまわりに、明るい光線が放射状に走ってきらめいて見えます。星形の頂点の並びを、脳が「光線」としてつなぎ合わせるために生じる、2021年発表の新しい錯視です。",
    art: buildStarburst,
  },
  {
    id: "ninio",
    title: "ニニオの消失錯視",
    sub: "Ninio's Extinction Illusion",
    explain:
      "この図には黒い点が12個ありますが、一度に全部を見ることはできません。視線を向けた点ははっきり見えるのに、周辺の点は格子に飲み込まれて消えてしまいます。ヘルマン格子と同じ仕組みが、より劇的に現れた錯視です。",
    art: buildNinio,
  },
  {
    id: "honeycomb",
    title: "ハニカム錯視",
    sub: "Honeycomb Illusion",
    explain:
      "すべての六角形の角には、小さなヒゲ（とげ）が付いています。しかし、ヒゲが見えるのは視線の周りだけで、少し離れた場所のヒゲは存在しないかのように消えます。視野の周辺では細部が大胆に省略されていることを実感できる錯視です。",
    art: buildHoneycomb,
  },
  {
    id: "tilt-aftereffect",
    title: "傾き残効",
    sub: "Tilt Aftereffect",
    explain:
      "まず左の傾いた縞の中心を30秒ほど見つめ、そのあと右の縞に視線を移してください。完全に垂直な右の縞が、逆方向に傾いて見えます。傾きに反応する神経細胞が疲れて、バランスが崩れるためです。",
    art: buildTiltAftereffect,
  },
  {
    id: "stroop",
    title: "ストループ効果",
    sub: "Stroop Effect",
    explain:
      "文字の「意味」ではなく「インクの色」を、左上から順にできるだけ速く声に出してみてください。色名と文字の色が食い違っていると、読みが急に遅くなり、つっかえます。文字を読む処理が自動的に働いて、色の判断と衝突するためです。",
    art: buildStroop,
  },
  {
    id: "thatcher",
    title: "サッチャー錯視",
    sub: "Thatcher Effect",
    explain:
      "逆さまの2つの顔は、どちらも普通の表情に見えます。しかし右の顔は、目と口だけが上下反転しています。画面を逆さにして確かめてください（恐ろしい顔になっています）。顔のパーツの向きの異常は、顔が逆さだと検出しにくいのです。",
    art: buildThatcher,
  },
  {
    id: "glass-pattern",
    title: "ガラス・パターン",
    sub: "Glass Pattern",
    explain:
      "ランダムにまいた点と、それ全体を少しだけ回転させたコピーを重ねただけの図です。それなのに、渦を巻くような同心円状の流れがはっきり見えます。点のペアの向きを、脳が大域的な構造へと統合するためです。",
    art: buildGlassPattern,
  },
  {
    id: "giovanelli",
    title: "ジョバネッリ錯視",
    sub: "Giovanelli Illusion",
    explain:
      "黒い点は、完全に一直線上に等間隔で並んでいます。点を囲む円がジグザグにずれていると、点まで上下にうねって並んでいるように見えます。点の位置が、囲んでいる円の枠組みに引きずられて知覚されるためです。",
    art: buildGiovanelli,
  },
  {
    id: "numerosity",
    title: "個数の錯視",
    sub: "Numerosity Illusion",
    explain:
      "左右の点はどちらもぴったり60個です。規則的に並んだ側（右）のほうが、かたまって散らばった側（左）より多く見えます。個数の見積もりが、点の密集のしかたに影響されることを示します。",
    art: buildNumerosity,
  },
  {
    id: "missing-square",
    title: "消える正方形",
    sub: "Missing Square Paradox",
    explain:
      "同じ4つのピースを並べ替えただけなのに、下の三角形には1マスの穴が空いています。実は、どちらの「斜辺」もまっすぐではなく、ごくわずかに折れ曲がっています。その差がちょうど1マス分の面積になるのですが、目はその折れを検出できません。",
    art: buildMissingSquare,
  },
  {
    id: "bullseye",
    title: "的の錯視",
    sub: "Bullseye Illusion",
    explain:
      "中央の2つの円（的）は、まったく同じ灰色です。暗いリングに囲まれた的は明るく、明るいリングに囲まれた的は暗く見えます。すぐ外側のリングだけでなく、何重ものリング全体が明るさの判断に影響します。",
    art: buildBullseye,
  },
  {
    id: "checkerboard-contrast",
    title: "市松コントラスト錯視",
    sub: "Checkerboard Contrast",
    explain:
      "中段に並ぶ小さな灰色の四角は、すべてまったく同じ色です。黒いマスの上の四角は明るく、白いマスの上の四角は暗く見えます。デヴァロアらが示した、市松模様の上での明るさ対比です。",
    art: buildCheckerboardContrast,
  },
  {
    id: "helmholtz-kohlrausch",
    title: "ヘルムホルツ・コールラウシュ効果",
    sub: "Helmholtz–Kohlrausch Effect",
    explain:
      "下の段の彩度の高い色は、上の段の灰色とほぼ同じ明るさ（輝度）です。それでも、鮮やかな色のほうが明るく見えます。色の「鮮やかさ」が、明るさの感じ方を押し上げるためです。",
    art: buildHelmholtzKohlrausch,
  },
  {
    id: "healing-grid",
    title: "癒しの格子",
    sub: "Healing Grid",
    explain:
      "中央は規則正しい格子、周辺は位置がバラバラの格子です。中央の1点を10秒ほど見つめ続けてください。すると周辺の乱れた格子まで、だんだん規則正しく「整って」見えてきます。脳が規則性を周辺へ押し広げるために起こる、北岡明佳氏の錯視です。",
    art: buildHealingGrid,
  },
  {
    id: "moon-illusion",
    title: "月の錯視",
    sub: "Moon Illusion",
    explain:
      "2つの月はまったく同じ大きさ（同じピクセル数）です。地平線近く、木や建物といった比較対象のそばにある月のほうが、空高くにある月より大きく見えます。実際の満月が地平線近くで大きく見えるのと同じ現象です。",
    art: buildMoonIllusion,
  },
  {
    id: "induced-motion",
    title: "誘導運動",
    sub: "Induced Motion",
    explain:
      "中央の黄色い点は止まっています。動いているのは外側の四角い枠だけです。それなのに、枠が右へ動くと点は左へ、というように、点が枠と反対向きに動いて見えます。雲が流れると月が動いて見えるのと同じ現象です。",
    art: buildInducedMotion,
  },
  {
    id: "motion-silencing",
    title: "運動による変化の見落とし",
    sub: "Motion Silencing",
    explain:
      "リングが止まっているときは、一つひとつの点が激しく色を変えているのがはっきり見えます。リングが回り始めると、色の変化がほとんど止まったように感じられます。動きが、色や明るさの変化への気づきを「消して」しまう現象です。",
    art: buildMotionSilencing,
  },
  {
    id: "furrow",
    title: "溝の錯視",
    sub: "Furrow Illusion",
    explain:
      "ぼやけた点は、まっすぐ真下へ動いているだけです。しかし斜めの縞（溝）の上では、縞に沿って斜めに動いているように見えます。輪郭がぼやけた点の動きを、脳が背景の縞の向きに引きつけて解釈するためです。アンスティスが報告しました。",
    art: buildFurrow,
  },
  {
    id: "duck-rabbit",
    title: "ウサギとアヒル",
    sub: "Duck–Rabbit",
    explain:
      "左を向いたアヒル（左の突起がくちばし）にも、右を向いたウサギ（同じ突起が耳）にも見える、有名な多義図形です。同じ絵が2通りの動物に見え、一度どちらかに見えると、もう一方へ切り替えるのに少し努力が要ります。",
    art: buildDuckRabbit,
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
  // 収束するレール（左: x = 55 + (290-y)/265*75 相当）
  const lx = (y) => 55 + ((H - 10 - y) / 265) * 75;
  const rx = (y) => W - lx(y);
  p += svgLine(55, H - 10, 130, 25, "#333", 4);
  p += svgLine(W - 55, H - 10, W - 130, 25, "#333", 4);
  // 枕木（奥行きの手がかり）
  [275, 232, 192, 156, 124, 96, 50].forEach((y) => p += svgLine(lx(y), y, rx(y), y, "#9aa0aa", 2));
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
  // 平坦 → 直線的グラデーション → 平坦。折れ目に明るい/暗い帯が見える
  return `<svg width="360" height="170" viewBox="0 0 360 170">
    <defs><linearGradient id="machG" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="rgb(50,50,50)"/><stop offset="1" stop-color="rgb(220,220,220)"/>
    </linearGradient></defs>
    <rect x="0" width="100" height="170" fill="rgb(50,50,50)"/>
    <rect x="100" width="160" height="170" fill="url(#machG)"/>
    <rect x="260" width="100" height="170" fill="rgb(220,220,220)"/>
  </svg>`;
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

function buildPenrose() {
  const s = 27, n = 5, t = 1.4; // 角材の長さ n・太さ t
  const U = [Math.cos(Math.PI / 6), Math.sin(Math.PI / 6)]; // x軸 → 右下
  const V = [-Math.cos(Math.PI / 6), Math.sin(Math.PI / 6)]; // y軸 → 左下
  const Wv = [0, -1]; // z軸 → 上
  const raw = (x, y, z) => [
    (x * U[0] + y * V[0] + z * Wv[0]) * s,
    (x * U[1] + y * V[1] + z * Wv[1]) * s,
  ];
  // 3本の角材を三角形の各辺に沿って配置（投影上で端が始点に重なり、閉じて見える）
  const boxes = [
    [0, n, 0, t, 0, t],         // 右下へ伸びる材
    [n - t, n, 0, n, 0, t],     // 左下へ伸びる材
    [n - t, n, n - t, n, 0, n], // 上へ伸びる材
  ];
  // 自動センタリング用に全頂点の範囲を求める
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  boxes.forEach(([x0, x1, y0, y1, z0, z1]) => {
    [[x0, y0, z0], [x1, y1, z1], [x1, y0, z0], [x0, y1, z1], [x1, y1, z0], [x0, y0, z1]].forEach((p) => {
      const q = raw(p[0], p[1], p[2]);
      minX = Math.min(minX, q[0]); maxX = Math.max(maxX, q[0]);
      minY = Math.min(minY, q[1]); maxY = Math.max(maxY, q[1]);
    });
  });
  const ox = 150 - (minX + maxX) / 2, oy = 150 - (minY + maxY) / 2;
  const P = (x, y, z) => {
    const q = raw(x, y, z);
    return (q[0] + ox).toFixed(1) + " " + (q[1] + oy).toFixed(1);
  };
  const face = (pts, fill) => {
    const d = pts.map((p, i) => (i ? "L" : "M") + P(p[0], p[1], p[2])).join(" ") + " Z";
    return `<path d="${d}" fill="${fill}" stroke="#1a1a1a" stroke-width="2" stroke-linejoin="round"/>`;
  };
  // 直方体の見える3面（上＝明 / +x＝中 / +y＝暗）
  const box = ([x0, x1, y0, y1, z0, z1]) =>
    face([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], "#dcdcdc") +
    face([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], "#a9a9a9") +
    face([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], "#7e7e7e");
  // 描画順：縦材 → 右上材 → 下材。各角材が次の角材の手前に出て、循環した
  // 前後関係（＝不可能接合）になるようにする
  const order = [boxes[2], boxes[0], boxes[1]];
  return `<svg width="300" height="300" viewBox="0 0 300 300">${order.map(box).join("")}</svg>`;
}

function buildOuchi() {
  return `<svg width="300" height="300" viewBox="0 0 300 300">
    <defs>
      <pattern id="ouchiOut" width="32" height="16" patternUnits="userSpaceOnUse">
        <rect width="32" height="16" fill="#fff"/>
        <rect x="0" y="0" width="16" height="8" fill="#161616"/>
        <rect x="16" y="8" width="16" height="8" fill="#161616"/>
      </pattern>
      <pattern id="ouchiIn" width="16" height="32" patternUnits="userSpaceOnUse">
        <rect width="16" height="32" fill="#fff"/>
        <rect x="0" y="0" width="8" height="16" fill="#161616"/>
        <rect x="8" y="16" width="8" height="16" fill="#161616"/>
      </pattern>
      <clipPath id="ouchiClip"><circle cx="150" cy="150" r="74"/></clipPath>
    </defs>
    <rect width="300" height="300" fill="url(#ouchiOut)"/>
    <rect width="300" height="300" fill="url(#ouchiIn)" clip-path="url(#ouchiClip)"/>
  </svg>`;
}

function buildRotatingSnakes() {
  const cx = 160, cy = 160, W = 320, H = 320;
  // 黒→青→白→黄 の非対称な明暗列が周辺ドリフトを生む
  const seq = ["#0b0b0b", "#13379c", "#f7f7f7", "#f4c20a"];
  let t = "", ringIdx = 0;
  for (let R = 40; R <= 150; R += 24) {
    const n = Math.round(R * 0.28);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      const rot = (a * 180) / Math.PI + 90;
      const col = seq[(i + ringIdx) % 4];
      t += `<rect x="${(x - 13).toFixed(1)}" y="${(y - 7).toFixed(1)}" width="26" height="14" rx="3" fill="${col}" transform="rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }
    ringIdx++;
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#8c8c8c"/>${t}</svg>`;
}

function buildMunker() {
  const W = 330, H = 210, base = "#d99a3a";
  let c = "";
  const cols = [60, 165, 270], ys = [55, 105, 155];
  cols.forEach((cx) => ys.forEach((cy) => {
    c += `<circle cx="${cx}" cy="${cy}" r="26" fill="${base}"/>`;
  }));
  let s = "";
  for (let x = 0; x < 110; x += 12) s += `<rect x="${x}" y="0" width="6" height="${H}" fill="#d11fd1"/>`;
  for (let x = 220; x < W; x += 12) s += `<rect x="${x}" y="0" width="6" height="${H}" fill="#1fc24a"/>`;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#fff"/>${c}${s}</svg>`;
}

function buildNeon() {
  const W = 300, H = 300, cx = 150, cy = 150, r = 66;
  const grid = (color) => {
    let g = "";
    for (let x = 18; x <= W - 18; x += 22) g += svgLine(x, 18, x, H - 18, color, 2);
    for (let y = 18; y <= H - 18; y += 22) g += svgLine(18, y, W - 18, y, color, 2);
    return g;
  };
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs><clipPath id="neonClip"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
    <rect width="${W}" height="${H}" fill="#fff"/>
    ${grid("#141414")}
    <g clip-path="url(#neonClip)">${grid("#22b6e6")}</g>
  </svg>`;
}

function buildBenham() {
  const cx = 120, cy = 120, Rd = 110;
  let p = `<circle cx="${cx}" cy="${cy}" r="${Rd}" fill="#fff" stroke="#111" stroke-width="2"/>`;
  // 左半分を黒で塗る
  p += `<path d="M ${cx} ${cy - Rd} A ${Rd} ${Rd} 0 0 0 ${cx} ${cy + Rd} Z" fill="#111"/>`;
  // 白い右半分に、半径の異なる弧を4組
  const bands = [[0.30, -72, -32], [0.50, -22, 18], [0.70, 28, 68], [0.88, 78, 86]];
  bands.forEach(([rf, a0, a1]) => {
    const R = Rd * rf;
    for (let k = 0; k < 3; k++) {
      const rr = R - k * 5;
      const A0 = (a0 * Math.PI) / 180, A1 = (a1 * Math.PI) / 180;
      const x0 = cx + Math.cos(A0) * rr, y0 = cy + Math.sin(A0) * rr;
      const x1 = cx + Math.cos(A1) * rr, y1 = cy + Math.sin(A1) * rr;
      p += `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${rr.toFixed(1)} ${rr.toFixed(1)} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="#111" stroke-width="3"/>`;
    }
  });
  return `<div class="benham"><svg width="240" height="240" viewBox="0 0 240 240">${p}</svg></div>`;
}

function buildVasarely() {
  const C = 150, n = 16, max = 140;
  let r = "";
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const g = Math.round(18 + t * 216);
    const h = max * (1 - i / n);
    r += `<rect x="${(C - h).toFixed(1)}" y="${(C - h).toFixed(1)}" width="${(2 * h).toFixed(1)}" height="${(2 * h).toFixed(1)}" fill="rgb(${g},${g},${g})"/>`;
  }
  return `<svg width="300" height="300" viewBox="0 0 300 300">${r}</svg>`;
}

function buildMotionBlindness() {
  const W = 300, H = 300;
  let plus = "";
  for (let gx = 30; gx <= 270; gx += 40) {
    for (let gy = 30; gy <= 270; gy += 40) {
      plus += `<path d="M ${gx - 6} ${gy} H ${gx + 6} M ${gx} ${gy - 6} V ${gy + 6}" stroke="#3b6fe0" stroke-width="2"/>`;
    }
  }
  const dots =
    `<circle cx="100" cy="100" r="7" fill="#f5d20a"/>` +
    `<circle cx="200" cy="100" r="7" fill="#f5d20a"/>` +
    `<circle cx="150" cy="205" r="7" fill="#f5d20a"/>`;
  const fix = `<rect x="147" y="147" width="6" height="6" fill="#fff"/>`;
  return `<div class="mib"><svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#101626"/><g class="mib-spin">${plus}</g>${dots}${fix}</svg></div>`;
}

function buildImpossibleTrident() {
  const col = "#141414", w = 3;
  const L = (a, b, c, d) => svgLine(a, b, c, d, col, w);
  const arc = (x0, y0, x1, y1, r, sweep) =>
    `<path d="M ${x0} ${y0} A ${r} ${r} 0 0 ${sweep} ${x1} ${y1}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  let p = "";
  // 外枠
  p += L(40, 45, 300, 45) + L(40, 155, 300, 155) + L(40, 45, 40, 155);
  // 右端の丸いキャップ（3本の棒）
  p += arc(300, 45, 300, 79, 17, 1) + arc(300, 83, 300, 117, 17, 1) + arc(300, 121, 300, 155, 17, 1);
  // 内側の線：A・D は途中で消え、B・C は左まで延びて溝になる
  p += L(160, 79, 300, 79) + L(160, 121, 300, 121);
  p += L(70, 83, 300, 83) + L(70, 117, 300, 117);
  p += arc(70, 117, 70, 83, 17, 0); // 溝の左端の丸い閉じ
  return `<svg width="340" height="200" viewBox="0 0 340 200">${p}</svg>`;
}

function buildSchroeder() {
  const n = 5, x0 = 48, y0 = 55, hw = 42, vh = 32, dy = 54;
  const top = [];
  let x = x0, y = y0;
  top.push([x, y]);
  for (let i = 0; i < n; i++) { x += hw; top.push([x, y]); y += vh; top.push([x, y]); }
  const bot = top.map(([px, py]) => [px, py + dy]);
  const str = (a) => a.map((p) => p.join(",")).join(" ");
  const band = `<polygon points="${str(top)} ${str(bot.slice().reverse())}" fill="#fff"/>`;
  const tline = `<polyline points="${str(top)}" fill="none" stroke="#141414" stroke-width="3"/>`;
  const bline = `<polyline points="${str(bot)}" fill="none" stroke="#141414" stroke-width="3"/>`;
  const cap1 = svgLine(top[0][0], top[0][1], bot[0][0], bot[0][1], "#141414", 3);
  const e = top.length - 1;
  const cap2 = svgLine(top[e][0], top[e][1], bot[e][0], bot[e][1], "#141414", 3);
  return `<svg width="320" height="300" viewBox="0 0 320 300">${band}${tline}${bline}${cap1}${cap2}</svg>`;
}

function buildKanizsaSquare() {
  const cx = 150, cy = 150, off = 72, r = 36;
  const centers = [
    [cx - off, cy - off, 45], [cx + off, cy - off, 135],
    [cx + off, cy + off, 225], [cx - off, cy + off, 315],
  ];
  const pac = (x, y, phi) => {
    const a0 = ((phi - 45) * Math.PI) / 180, a1 = ((phi + 45) * Math.PI) / 180;
    const x0 = (x + r * Math.cos(a0)).toFixed(1), y0 = (y + r * Math.sin(a0)).toFixed(1);
    const x1 = (x + r * Math.cos(a1)).toFixed(1), y1 = (y + r * Math.sin(a1)).toFixed(1);
    return `<path d="M ${x} ${y} L ${x0} ${y0} A ${r} ${r} 0 1 1 ${x1} ${y1} Z" fill="#141414"/>`;
  };
  return `<svg width="300" height="300" viewBox="0 0 300 300">${centers.map((c) => pac(c[0], c[1], c[2])).join("")}</svg>`;
}

function buildChubb() {
  return `<svg width="320" height="220" viewBox="0 0 320 220">
    <defs>
      <pattern id="chubbLow" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="#8f8f8f"/>
        <rect width="8" height="8" fill="#717171"/>
        <rect x="8" y="8" width="8" height="8" fill="#717171"/>
      </pattern>
      <pattern id="chubbHi" width="16" height="16" patternUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="#e6e6e6"/>
        <rect width="8" height="8" fill="#1a1a1a"/>
        <rect x="8" y="8" width="8" height="8" fill="#1a1a1a"/>
      </pattern>
      <clipPath id="chubbC1"><circle cx="85" cy="110" r="62"/></clipPath>
      <clipPath id="chubbC2"><circle cx="235" cy="110" r="62"/></clipPath>
    </defs>
    <rect x="0" y="0" width="160" height="220" fill="#808080"/>
    <rect x="160" y="0" width="160" height="220" fill="url(#chubbHi)"/>
    <rect width="320" height="220" fill="url(#chubbLow)" clip-path="url(#chubbC1)"/>
    <rect width="320" height="220" fill="url(#chubbLow)" clip-path="url(#chubbC2)"/>
  </svg>`;
}

function buildPinna() {
  const cx = 160, cy = 160, W = 320, H = 320;
  let g = "";
  [[74, 1], [120, -1]].forEach(([R, tilt]) => {
    const n = Math.round(R * 0.2);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
      const rot = (a * 180) / Math.PI + 90 + tilt * 28; // 接線からひねる
      const h = 8;
      g += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot.toFixed(1)})">` +
        `<path d="M ${-h} ${h} L ${-h} ${-h} L ${h} ${-h}" fill="none" stroke="#111" stroke-width="3"/>` +
        `<path d="M ${h} ${-h} L ${h} ${h} L ${-h} ${h}" fill="none" stroke="#fff" stroke-width="3"/>` +
        `</g>`;
    }
  });
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#8a8a8a"/><circle cx="${cx}" cy="${cy}" r="4" fill="#111"/>${g}</svg>`;
}

function buildChromostereopsis() {
  const W = 320, H = 220;
  let s = "", i = 0;
  for (let x = 12; x < W - 12; x += 34) {
    const c = i % 2 === 0 ? "#ff1f1f" : "#1f3cff";
    s += `<rect x="${x}" y="22" width="22" height="${H - 44}" rx="3" fill="${c}"/>`;
    i++;
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#000"/>${s}</svg>`;
}

function buildAfterimageFlag() {
  const fw = 200, fh = 130, sx = 60, sy = 16;
  const stripeH = fh / 13;
  let stripes = "";
  for (let i = 0; i < 13; i++) {
    const c = i % 2 === 0 ? "#23c7c7" : "#111";
    stripes += `<rect x="${sx}" y="${(sy + i * stripeH).toFixed(2)}" width="${fw}" height="${stripeH.toFixed(2)}" fill="${c}"/>`;
  }
  const cantonW = fw * 0.42, cantonH = stripeH * 7;
  let stars = "";
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) {
    stars += `<circle cx="${(sx + 11 + c * 15).toFixed(1)}" cy="${(sy + 11 + r * 15).toFixed(1)}" r="2.4" fill="#111"/>`;
  }
  const canton = `<rect x="${sx}" y="${sy}" width="${cantonW}" height="${cantonH}" fill="#ff8c1a"/>${stars}`;
  const dot = `<circle cx="${sx + fw / 2}" cy="${sy + fh / 2}" r="3.5" fill="#fff"/>`;
  const by = sy + fh + 26;
  const blank = `<rect x="${sx}" y="${by}" width="${fw}" height="${fh}" fill="#fff" stroke="#ccc"/>` +
    `<text x="${sx + fw / 2}" y="${by + fh / 2 + 8}" text-anchor="middle" font-size="24" fill="#aaa">+</text>`;
  const H = by + fh + sy;
  return `<svg width="320" height="${H}" viewBox="0 0 320 ${H}">${stripes}${canton}${dot}${blank}</svg>`;
}

function buildMotionAftereffect() {
  const cx = 150, cy = 150, turns = 5, steps = 420, k = 4.3;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const th = (i / steps) * turns * 2 * Math.PI;
    const r = k * th;
    pts.push((cx + r * Math.cos(th)).toFixed(1) + "," + (cy + r * Math.sin(th)).toFixed(1));
  }
  const path = `<polyline points="${pts.join(" ")}" fill="none" stroke="#141414" stroke-width="11" stroke-linecap="round"/>`;
  return `<div class="spiral-ame"><svg width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="142" fill="#fff" stroke="#141414" stroke-width="2"/>${path}</svg></div>`;
}

function buildOppelKundt() {
  const y = 100, h = 26;
  let p = svgLine(20, y, 300, y, "#bbb", 1);
  [20, 160].forEach((x) => (p += svgLine(x, y - h, x, y + h, "#141414", 4)));
  for (let x = 160; x <= 300; x += 14) p += svgLine(x, y - h, x, y + h, "#141414", 4);
  return `<svg width="320" height="200" viewBox="0 0 320 200">${p}</svg>`;
}

function buildMlFigure(x1, x2, y, lDir, rDir, dotX) {
  // lDir/rDir: 1=外向きフィン, -1=内向きフィン
  const d = 26, A = (32 * Math.PI) / 180, dx = d * Math.cos(A), dy = d * Math.sin(A);
  let p = svgLine(x1, y, x2, y, "#141414", 3.5);
  p += svgLine(x1, y, x1 - lDir * dx, y - dy, "#141414", 3.5) + svgLine(x1, y, x1 - lDir * dx, y + dy, "#141414", 3.5);
  p += svgLine(x2, y, x2 + rDir * dx, y - dy, "#141414", 3.5) + svgLine(x2, y, x2 + rDir * dx, y + dy, "#141414", 3.5);
  if (dotX != null) p += `<circle cx="${dotX}" cy="${y}" r="5" fill="#df3b26"/>`;
  return p;
}

function buildJudd() {
  // 両端の矢羽が同じ向き → 中点（赤）がずれて見える
  let p = buildMlFigure(50, 290, 55, 1, -1, 170);
  p += buildMlFigure(50, 290, 145, -1, 1, 170);
  return `<svg width="340" height="200" viewBox="0 0 340 200">${p}</svg>`;
}

function buildBrentano() {
  // <——>——< ：左半分は内向き同士、右半分は外向き同士（中点は170）
  const y = 90, d = 26, A = (32 * Math.PI) / 180, dx = d * Math.cos(A), dy = d * Math.sin(A);
  let p = svgLine(40, y, 300, y, "#141414", 3.5);
  const fin = (x, dir) =>
    svgLine(x, y, x + dir * dx, y - dy, "#141414", 3.5) + svgLine(x, y, x + dir * dx, y + dy, "#141414", 3.5);
  // 左半分＝内向き同士（短く見える）、右半分＝外向き同士（長く見える）。中央のフィンは共有
  p += fin(40, 1) + fin(170, -1) + fin(300, 1);
  [40, 170, 300].forEach((x) => (p += `<circle cx="${x}" cy="${y + 38}" r="3" fill="#df3b26"/>`));
  return `<svg width="340" height="180" viewBox="0 0 340 180">${p}</svg>`;
}

function buildBaldwin() {
  const sq = (x, y, s) => `<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}" fill="#141414"/>`;
  let p = sq(70, 60, 76) + sq(270, 60, 76) + svgLine(108, 60, 232, 60, "#df3b26", 4);
  p += sq(110, 170, 22) + sq(230, 170, 22) + svgLine(121, 170, 219, 170, "#df3b26", 4);
  return `<svg width="340" height="240" viewBox="0 0 340 240">${p}</svg>`;
}

function buildCorridor() {
  const W = 320, H = 280, vx = 160, vy = 110;
  let p = `<rect width="${W}" height="${H}" fill="#efe9dc"/>`;
  // 床・天井・壁の遠近線
  const corner = [[0, 0], [W, 0], [0, H], [W, H], [0, H * 0.4], [W, H * 0.4], [0, H * 0.75], [W, H * 0.75]];
  corner.forEach(([x, y]) => (p += svgLine(x, y, vx, vy, "#9aa0aa", 2)));
  // 奥の壁
  p += `<rect x="${vx - 34}" y="${vy - 26}" width="68" height="52" fill="#d8d2c4" stroke="#9aa0aa" stroke-width="2"/>`;
  // 床の横線（奥行きの目盛り）
  [262, 238, 210, 186, 168, 152, 140].forEach((y) => {
    const t = (y - vy) / (H - vy);
    p += svgLine(vx - 160 * t, y, vx + 160 * t, y, "#9aa0aa", 1.5);
  });
  // 同じ大きさの2本の柱
  const bar = (x, yb) => `<rect x="${x - 11}" y="${yb - 64}" width="22" height="64" fill="#f3c10a" stroke="#141414" stroke-width="2.5"/>`;
  p += bar(70, 262) + bar(196, 156);
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildLeaningTower() {
  const tower = (tx) => {
    let t = `<g transform="translate(${tx},230) rotate(-8)">`;
    t += `<rect x="-26" y="-190" width="52" height="190" fill="#d2cab6" stroke="#141414" stroke-width="2.5"/>`;
    for (let f = 0; f < 6; f++) {
      t += svgLine(-26, -28 - f * 30, 26, -28 - f * 30, "#141414", 1.5);
      for (let w = 0; w < 3; w++) t += `<rect x="${-19 + w * 15}" y="${-50 - f * 30}" width="8" height="14" fill="#6b6256"/>`;
    }
    t += `<rect x="-20" y="-208" width="40" height="18" fill="#df3b26" stroke="#141414" stroke-width="2"/>`;
    return t + "</g>";
  };
  return `<svg width="340" height="250" viewBox="0 0 340 250">${tower(120)}${tower(250)}</svg>`;
}

function buildIrradiation() {
  return `<svg width="340" height="190" viewBox="0 0 340 190">
    <rect x="10" y="15" width="160" height="160" fill="#0c0c0c"/>
    <rect x="55" y="60" width="70" height="70" fill="#fff"/>
    <rect x="170" y="15" width="160" height="160" fill="#fff"/>
    <rect x="215" y="60" width="70" height="70" fill="#0c0c0c"/>
  </svg>`;
}

function buildMunsterberg() {
  const t = 24, cols = 13, W = cols * t, rows = 7;
  let p = `<rect width="${W}" height="${rows * t}" fill="#fff"/>`;
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * (t / 2);
    for (let x = -t + off; x < W; x += t * 2) {
      p += `<rect x="${x}" y="${r * t}" width="${t}" height="${t}" fill="#0c0c0c"/>`;
    }
  }
  for (let r = 1; r < rows; r++) p += svgLine(0, r * t, W, r * t, "#0c0c0c", 2);
  return `<svg width="${W}" height="${rows * t}" viewBox="0 0 ${W} ${rows * t}">${p}</svg>`;
}

function buildTiltContrast() {
  const grating = (id, ang) => `
    <pattern id="${id}" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(${ang})">
      <rect width="14" height="14" fill="#fff"/><rect width="7" height="14" fill="#3a3a3a"/>
    </pattern>`;
  const unit = (cx, surroundAng) => `
    <circle cx="${cx}" cy="120" r="92" fill="url(#tc${surroundAng})"/>
    <circle cx="${cx}" cy="120" r="44" fill="url(#tc0)" stroke="#efe9dc" stroke-width="4"/>`;
  return `<svg width="400" height="240" viewBox="0 0 400 240">
    <defs>${grating("tc0", 0)}${grating("tc15", 15)}${grating("tc-15", -15)}</defs>
    ${unit(105, 15)}${unit(295, -15)}
  </svg>`;
}

function buildTwistedCord() {
  const W = 340, H = 260, seg = 16;
  let p = `<rect width="${W}" height="${H}" fill="#8c8c8c"/>`;
  // 市松の背景
  for (let y = 0; y < H; y += 20) for (let x = (y / 20) % 2 ? 20 : 0; x < W; x += 40)
    p += `<rect x="${x}" y="${y}" width="20" height="20" fill="#a2a2a2"/>`;
  // 水平なより糸（ねじれの向きを行ごとに交互へ）
  [50, 105, 160, 215].forEach((y, row) => {
    const tilt = row % 2 ? -28 : 28;
    for (let x = 20, i = 0; x < W - 20; x += seg, i++) {
      const col = i % 2 ? "#0c0c0c" : "#fff";
      p += `<rect x="${x - 2}" y="${y - 5}" width="${seg + 4}" height="10" fill="${col}" transform="rotate(${tilt} ${x + seg / 2} ${y})"/>`;
    }
  });
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildTextTilt() {
  const rows = ["ベスペスベスペスベスペス", "ペスベスペスベスペスベス"];
  let t = "";
  for (let r = 0; r < 6; r++) {
    t += `<text x="170" y="${44 + r * 38}" text-anchor="middle" font-family="'Noto Sans JP',sans-serif" font-weight="900" font-size="26" letter-spacing="2" fill="#141414">${rows[r % 2]}</text>`;
  }
  return `<svg width="340" height="260" viewBox="0 0 340 260">${t}</svg>`;
}

function buildBourdon() {
  // 2つの細長い三角形：左の縁は1本の直線 (x = 150 - 0.36*(y-130)) 上
  const edge = (y) => 150 - 0.36 * (y - 130);
  // 上下2つの細長い三角形。共有する左の縁は1本の直線
  const up = `<polygon points="${edge(20)},20 ${edge(130)},130 ${edge(20) + 150},20" fill="#141414"/>`;
  const dn = `<polygon points="${edge(130)},130 ${edge(240)},240 ${edge(240) + 150},240" fill="#141414"/>`;
  return `<svg width="360" height="260" viewBox="0 0 360 260">${up}${dn}
    <circle cx="${edge(20)}" cy="20" r="3" fill="#df3b26"/>
    <circle cx="${edge(130)}" cy="130" r="3" fill="#df3b26"/>
    <circle cx="${edge(240)}" cy="240" r="3" fill="#df3b26"/></svg>`;
}

function buildBulge() {
  const t = 22, n = 14, W = n * t;
  let p = `<rect width="${W}" height="${W}" fill="#fff"/>`;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
    if ((r + c) % 2 === 0) p += `<rect x="${c * t}" y="${r * t}" width="${t}" height="${t}" fill="#0c0c0c"/>`;
  // 中央領域のマス角に小さな点（白マスには黒点、黒マスには白点）を4隅対称に
  const dot = (x, y, fill) => `<rect x="${x - 2.5}" y="${y - 2.5}" width="5" height="5" fill="${fill}"/>`;
  const cx = W / 2, cy = W / 2, R = t * 4.2;
  for (let r = 1; r < n; r++) for (let c = 1; c < n; c++) {
    const x = c * t, y = r * t;
    const d = Math.hypot(x - cx, y - cy);
    if (d < R && d > t * 0.8) {
      const dark = (r + c) % 2 === 0;
      const sx = x - cx > 0 ? -1 : 1, sy = y - cy > 0 ? -1 : 1;
      p += dot(x + sx * 5, y + sy * 5, dark ? "#fff" : "#0c0c0c");
    }
  }
  return `<svg width="${W}" height="${W}" viewBox="0 0 ${W} ${W}">${p}</svg>`;
}

function buildCurvatureBlindness() {
  const W = 360, H = 290, amp = 11, period = 64;
  let bg = `<rect width="${W}" height="${H / 3}" fill="#fff"/>` +
    `<rect y="${H / 3}" width="${W}" height="${H / 3 + 1}" fill="#8c8c8c"/>` +
    `<rect y="${(2 * H) / 3}" width="${W}" height="${H / 3}" fill="#0c0c0c"/>`;
  let p = "";
  for (let row = 0; row < 7; row++) {
    const y0 = 24 + row * 40, phase = (row % 2) * (period / 2);
    // 山谷で色が変わる線（錯視あり）と、山谷の途中で変わる線（対照）を交互に
    const splitAtPeak = row % 2 === 0;
    for (let x = 0; x < W; x += 4) {
      const y = y0 + amp * Math.sin(((x + phase) / period) * 2 * Math.PI);
      const ph = (((x + phase) / period) % 1 + 1) % 1;
      const seg = splitAtPeak ? (ph < 0.25 || ph >= 0.75 ? 0 : 1) : (ph < 0.5 ? 0 : 1);
      const col = seg === 0 ? "#e8e8e8" : "#3c3c3c";
      p += `<rect x="${x}" y="${(y - 1.6).toFixed(1)}" width="4.4" height="3.2" fill="${col}"/>`;
    }
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${bg}${p}</svg>`;
}

function buildCurvatureContrast() {
  const arc = (cx, cy, r, a0, a1, col, w) => {
    const P = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    const [x0, y0] = P(a0), [x1, y1] = P(a1);
    return `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`;
  };
  const a = -Math.PI / 2;
  let p = "";
  // 左：強く曲がった弧に囲まれたターゲット
  [-0.62, 0.62].forEach((dy) => (p += arc(95, 190 + dy * 130, 60, a - 0.95, a + 0.95, "#141414", 3.5)));
  p += arc(95, 250, 120, a - 0.55, a + 0.55, "#df3b26", 5);
  // 右：ほぼ平らな弧に囲まれたターゲット
  [-0.62, 0.62].forEach((dy) => (p += arc(245, 460 + dy * 470, 340, a - 0.21, a + 0.21, "#141414", 3.5)));
  p += arc(245, 250, 120, a - 0.55, a + 0.55, "#df3b26", 5);
  return `<svg width="340" height="260" viewBox="0 0 340 260">${p}</svg>`;
}

function buildKoffkaRing() {
  const panel = (x, split) => {
    let s = `<g transform="translate(${x},0)">` +
      `<rect width="150" height="220" fill="#3c3c3c"/><rect x="75" width="75" height="220" fill="#c8c8c8"/>`;
    const ring = `fill="none" stroke="#8a8a8a" stroke-width="26"`;
    if (!split) {
      s += `<circle cx="75" cy="110" r="48" ${ring}/>`;
    } else {
      s += `<path d="M 75 ${110 - 48 - 9} A 57 57 0 0 0 75 ${110 + 48 + 9}" fill="none" stroke="#8a8a8a" stroke-width="26" transform="translate(-1,-12)" />`;
      s += `<path d="M 75 ${110 - 48 - 9} A 57 57 0 0 1 75 ${110 + 48 + 9}" fill="none" stroke="#8a8a8a" stroke-width="26" transform="translate(1,12)" />`;
    }
    return s + "</g>";
  };
  return `<svg width="340" height="220" viewBox="0 0 340 220">${panel(10, false)}${panel(180, true)}</svg>`;
}

function buildBenary() {
  const g = "#9a9a9a";
  let p = `<rect width="340" height="230" fill="#fff"/>`;
  // 黒い十字
  p += `<rect x="120" y="20" width="80" height="190" fill="#0c0c0c"/>`;
  p += `<rect x="30" y="85" width="280" height="80" fill="#0c0c0c"/>`;
  // 十字の凹みに収まる三角形（十字に所属して見える）
  p += `<polygon points="120,85 160,85 120,125" fill="${g}"/>`;
  // 十字の外、白地の角に接する三角形
  p += `<polygon points="310,85 270,85 310,45" fill="${g}"/>`;
  return `<svg width="340" height="230" viewBox="0 0 340 230">${p}</svg>`;
}

function buildDungeon() {
  const cell = 13, n = 9, target = "#8a8a8a";
  const panel = (ox, bg, grid) => {
    let s = `<rect x="${ox}" y="20" width="${n * cell * 1.55}" height="${n * cell * 1.55}" fill="${bg}"/>`;
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      if (r % 2 === 0 && c % 2 === 0) {
        const isT = r >= 2 && r <= 6 && c >= 2 && c <= 6 && r % 4 === 2 && c % 4 === 2;
        s += `<rect x="${ox + 10 + c * cell * 1.5}" y="${30 + r * cell * 1.5}" width="${cell}" height="${cell}" fill="${isT ? target : grid}"/>`;
      }
    }
    return s;
  };
  return `<svg width="400" height="220" viewBox="0 0 400 220">${panel(10, "#0c0c0c", "#fff")}${panel(210, "#fff", "#0c0c0c")}</svg>`;
}

function buildTransparency() {
  // 4分割の明るさが「乗算的」な関係 → 半透明の板に見える
  return `<svg width="320" height="230" viewBox="0 0 320 230">
    <rect x="30" y="15" width="130" height="200" fill="#e6e6e6"/>
    <rect x="160" y="15" width="130" height="200" fill="#5a5a5a"/>
    <rect x="80" y="65" width="80" height="100" fill="#9b9b9b"/>
    <rect x="160" y="65" width="80" height="100" fill="#3d3d3d"/>
  </svg>`;
}

function buildChevreul() {
  const grays = [60, 92, 124, 156, 188, 220];
  let p = "";
  grays.forEach((g, i) => {
    p += `<rect x="${i * 56}" width="56" height="180" fill="rgb(${g},${g},${g})"/>`;
  });
  return `<svg width="336" height="180" viewBox="0 0 336 180">${p}</svg>`;
}

function buildGradientContrast() {
  return `<svg width="340" height="210" viewBox="0 0 340 210">
    <defs><linearGradient id="gcBg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1c1c1c"/><stop offset="1" stop-color="#e8e8e8"/>
    </linearGradient></defs>
    <rect width="340" height="210" fill="url(#gcBg)"/>
    <rect x="30" y="89" width="280" height="32" fill="#8a8a8a"/>
  </svg>`;
}

function buildGlare() {
  const panel = (ox, glow) => {
    const id = glow ? "glareG" : "none";
    let s = "";
    const c = 90; // 中央白領域の一辺
    if (glow) {
      s += `<defs>
        <linearGradient id="gl-t" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a9a9a"/><stop offset="1" stop-color="#fff"/></linearGradient>
        <linearGradient id="gl-b" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#9a9a9a"/><stop offset="1" stop-color="#fff"/></linearGradient>
        <linearGradient id="gl-l" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9a9a9a"/><stop offset="1" stop-color="#fff"/></linearGradient>
        <linearGradient id="gl-r" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#9a9a9a"/><stop offset="1" stop-color="#fff"/></linearGradient>
      </defs>`;
    }
    const f = (dir) => (glow ? `url(#gl-${dir})` : "#9a9a9a");
    const cx = ox + 75, edge = 30;
    s += `<rect x="${ox}" y="30" width="150" height="150" fill="#fff"/>`;
    s += `<rect x="${ox}" y="30" width="150" height="${edge + 30}" fill="${f("t")}"/>`;
    s += `<rect x="${ox}" y="${180 - edge - 30}" width="150" height="${edge + 30}" fill="${f("b")}"/>`;
    s += `<rect x="${ox}" y="30" width="${edge + 30}" height="150" fill="${f("l")}"/>`;
    s += `<rect x="${ox + 150 - edge - 30}" y="30" width="${edge + 30}" height="150" fill="${f("r")}"/>`;
    s += `<rect x="${cx - c / 2 + 15}" y="${105 - c / 2 + 15}" width="${c - 30}" height="${c - 30}" fill="#fff"/>`;
    return s;
  };
  return `<svg width="360" height="210" viewBox="0 0 360 210">${panel(15, true)}${panel(195, false)}</svg>`;
}

function buildLiebmann() {
  // 上：背景と図形がほぼ等輝度 → 輪郭が不安定／下：輝度差あり → くっきり
  const star = (cy, fill) =>
    `<polygon points="170,${cy - 38} 182,${cy - 12} 210,${cy - 10} 189,${cy + 8} 195,${cy + 36} 170,${cy + 21} 145,${cy + 36} 151,${cy + 8} 130,${cy - 10} 158,${cy - 12}" fill="${fill}"/>`;
  return `<svg width="340" height="240" viewBox="0 0 340 240">
    <rect width="340" height="120" fill="rgb(214,60,60)"/>
    ${star(60, "rgb(70,138,70)")}
    <rect y="120" width="340" height="120" fill="rgb(214,60,60)"/>
    ${star(180, "rgb(28,56,28)")}
  </svg>`;
}

function buildColorContrast() {
  const chip = "rgb(150,150,110)";
  return `<svg width="340" height="190" viewBox="0 0 340 190">
    <rect width="170" height="190" fill="rgb(196,80,170)"/>
    <rect x="170" width="170" height="190" fill="rgb(96,170,80)"/>
    <rect x="55" y="65" width="60" height="60" fill="${chip}"/>
    <rect x="225" y="65" width="60" height="60" fill="${chip}"/>
  </svg>`;
}

function buildWatercolor() {
  // うねった閉曲線：外側＝濃い紫、内側＝オレンジの縁取り。内部は純白
  const wave = (r0) => {
    const cx = 170, cy = 130, n = 120;
    let d = "";
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2;
      const r = r0 + 14 * Math.sin(a * 6);
      d += (i ? "L" : "M") + (cx + r * Math.cos(a)).toFixed(1) + " " + (cy + r * 0.72 * Math.sin(a)).toFixed(1) + " ";
    }
    return d + "Z";
  };
  return `<svg width="340" height="260" viewBox="0 0 340 260">
    <rect width="340" height="260" fill="#fff"/>
    <path d="${wave(104)}" fill="none" stroke="#5a2a8c" stroke-width="4.5"/>
    <path d="${wave(97)}" fill="none" stroke="#ff9a3c" stroke-width="4.5"/>
  </svg>`;
}

function buildColorConstancy() {
  // 全体をシアンの「照明」で覆い、実の画素は無彩色〜青緑のみにする
  const berry = (x, y, s) => `
    <g transform="translate(${x},${y}) scale(${s})">
      <path d="M0 -20 C 22 -20 26 2 18 18 C 10 32 -10 32 -18 18 C -26 2 -22 -20 0 -20 Z" fill="rgb(126,126,126)"/>
      <circle cx="-7" cy="-2" r="1.8" fill="rgb(96,96,96)"/><circle cx="6" cy="4" r="1.8" fill="rgb(96,96,96)"/>
      <circle cx="0" cy="12" r="1.8" fill="rgb(96,96,96)"/><circle cx="9" cy="-8" r="1.8" fill="rgb(96,96,96)"/>
      <path d="M-12 -18 L0 -26 L12 -18 L6 -14 L-6 -14 Z" fill="rgb(40,150,130)"/>
    </g>`;
  return `<svg width="340" height="240" viewBox="0 0 340 240">
    <rect width="340" height="240" fill="rgb(70,180,190)"/>
    <rect x="20" y="150" width="300" height="70" rx="8" fill="rgb(90,200,205)"/>
    ${berry(100, 90, 1.5)}${berry(200, 70, 1.2)}${berry(255, 120, 1.35)}${berry(150, 175, 1.3)}${berry(240, 185, 1.1)}
  </svg>`;
}

function buildVarin() {
  const r = 36, off = 70, cx = 150, cy = 130;
  const pac = (x, y, phi) => {
    const a0 = ((phi - 45) * Math.PI) / 180, a1 = ((phi + 45) * Math.PI) / 180;
    const pt = (a) => `${(x + r * Math.cos(a)).toFixed(1)} ${(y + r * Math.sin(a)).toFixed(1)}`;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#141414"/>` +
      `<path d="M ${x} ${y} L ${pt(a0)} A ${r} ${r} 0 0 1 ${pt(a1)} Z" fill="#3bb3e6"/>`;
  };
  return `<svg width="300" height="260" viewBox="0 0 300 260">
    ${pac(cx - off, cy - off, 45)}${pac(cx + off, cy - off, 135)}
    ${pac(cx + off, cy + off, 225)}${pac(cx - off, cy + off, 315)}
  </svg>`;
}

function buildAbutting() {
  const W = 340, H = 240, pw = 16;
  let p = `<rect width="${W}" height="${H}" fill="#fff"/>`;
  for (let x = 8; x < W - 8; x += pw) {
    p += svgLine(x, 20, x, H / 2, "#141414", 3);
    p += svgLine(x + pw / 2, H / 2, x + pw / 2, H - 20, "#141414", 3);
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildAmodal() {
  // 左：四角の後ろに「丸」が見える／右：実際に描かれているのは左図の見えている部分（半円）だけ
  return `<svg width="360" height="220" viewBox="0 0 360 220">
    <circle cx="95" cy="110" r="55" fill="#df3b26"/>
    <rect x="95" y="40" width="90" height="140" fill="#1f4fb8"/>
    <path d="M 285 55 A 55 55 0 0 0 285 165 Z" fill="#df3b26"/>
  </svg>`;
}

function buildBlindSpot() {
  let dots = "";
  for (let i = 0; i < 90; i++) {
    const x = (i * 37) % 340, y = ((i * 61) % 200) + 10;
    dots += `<circle cx="${x + 10}" cy="${y}" r="2.2" fill="#b9b2a4"/>`;
  }
  return `<svg width="360" height="220" viewBox="0 0 360 220">
    <rect width="360" height="220" fill="#efe9dc"/>${dots}
    <circle cx="80" cy="110" r="13" fill="#141414"/>
    <path d="M 270 98 v 24 M 258 110 h 24" stroke="#df3b26" stroke-width="5"/>
  </svg>`;
}

function buildShapeFromShading() {
  let p = `<defs>
    <radialGradient id="sfsUp" cx="0.5" cy="0.3" r="0.75"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#4a4a4a"/></radialGradient>
    <radialGradient id="sfsDn" cx="0.5" cy="0.7" r="0.75"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#4a4a4a"/></radialGradient>
  </defs><rect width="320" height="320" fill="#8a8a8a"/>`;
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
    const dent = r === 2 ? (c % 2 === 0) : false; // 真ん中の行に「へこみ」を混ぜる
    p += `<circle cx="${40 + c * 60}" cy="${40 + r * 60}" r="22" fill="url(#${dent ? "sfsDn" : "sfsUp"})"/>`;
  }
  return `<svg width="320" height="320" viewBox="0 0 320 320">${p}</svg>`;
}

function buildWallpaperStereogram() {
  const W = 360, H = 280;
  let p = `<rect width="${W}" height="${H}" fill="#141a2c"/>`;
  const shapes = ["#f3c10a", "#3bb3e6", "#df6a3b", "#7fd63b"];
  for (let row = 0; row < 6; row++) {
    const period = row === 2 || row === 3 ? 50 : 56; // 中央2段だけ周期を狭く＝手前に浮く
    const y = 30 + row * 42;
    for (let x = 14; x < W - 10; x += period) {
      const col = shapes[row % 4];
      p += row % 2 === 0
        ? `<circle cx="${x}" cy="${y}" r="11" fill="${col}"/>`
        : `<rect x="${x - 9}" y="${y - 9}" width="18" height="18" rx="3" fill="${col}" transform="rotate(45 ${x} ${y})"/>`;
    }
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildImpossibleCube() {
  // 立方体の枠（梁）。奥の縦柱が手前の横梁の前を1か所だけ横切る
  const t = 14, F = [70, 100, 230, 260], B = [130, 45, 290, 205]; // [x0,y0,x1,y1] 前面/背面の枠外周
  const bar = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#d2cab6" stroke="#141414" stroke-width="2.5"/>`;
  const frame = (q) =>
    bar(q[0], q[1], q[2] - q[0], t) + bar(q[0], q[3] - t, q[2] - q[0], t) +
    bar(q[0], q[1], t, q[3] - q[1]) + bar(q[2] - t, q[1], t, q[3] - q[1]);
  const beam = (x0, y0, x1, y1) => {
    const a = Math.atan2(y1 - y0, x1 - x0), L = Math.hypot(x1 - x0, y1 - y0);
    return `<g transform="translate(${x0},${y0}) rotate(${(a * 180) / Math.PI})"><rect x="0" y="${-t / 2}" width="${L}" height="${t}" fill="#d2cab6" stroke="#141414" stroke-width="2.5"/></g>`;
  };
  let p = frame(B); // 背面の枠
  // 前後をつなぐ4本の斜め梁
  p += beam(F[0] + t / 2, F[1] + t / 2, B[0] + t / 2, B[1] + t / 2);
  p += beam(F[2] - t / 2, F[1] + t / 2, B[2] - t / 2, B[1] + t / 2);
  p += beam(F[0] + t / 2, F[3] - t / 2, B[0] + t / 2, B[3] - t / 2);
  p += beam(F[2] - t / 2, F[3] - t / 2, B[2] - t / 2, B[3] - t / 2);
  p += frame(F); // 前面の枠
  // 不可能ポイント：背面の右の縦柱を、前面の上の横梁の上から描き直す
  p += bar(B[2] - t, B[1], t, B[3] - B[1]);
  return `<svg width="340" height="300" viewBox="0 0 340 300">${p}</svg>`;
}

function buildMachsBook() {
  const ink = "#141414", w = 3;
  let p = "";
  // 開いた本：背の折り目が手前にも奥にも見える
  const spineT = [170, 40], spineB = [170, 190];
  const lT = [70, 75], lB = [70, 225], rT = [270, 75], rB = [270, 225];
  [[lT, lB], [rT, rB], [spineT, spineB], [lT, spineT], [rT, spineT], [lB, spineB], [rB, spineB]].forEach(
    ([a, b]) => (p += svgLine(a[0], a[1], b[0], b[1], ink, w))
  );
  return `<svg width="340" height="260" viewBox="0 0 340 260">${p}</svg>`;
}

function buildStereokinetic() {
  let c = "";
  const N = 7;
  for (let i = 0; i < N; i++) {
    const r = 120 - i * 16, off = i * 9;
    c += `<circle cx="${150 + off * 0.5}" cy="${150 - off * 0.4}" r="${r}" fill="${i % 2 ? "#1f2a44" : "#e8e2d4"}"/>`;
  }
  return `<div class="stereokin"><svg width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="146" fill="#1f2a44"/>${c}</svg></div>`;
}

function buildAmesWindow() {
  // 台形の「窓」を3D回転させ続ける（CSS rotateY）
  return `
    <div class="ames">
      <div class="ames-spin">
        <svg width="220" height="240" viewBox="0 0 220 240">
          <polygon points="20,40 200,10 200,230 20,200" fill="#d2cab6" stroke="#141414" stroke-width="3"/>
          <polygon points="48,62 96,55 96,188 48,180" fill="#fff" stroke="#141414" stroke-width="2.5"/>
          <polygon points="124,51 172,44 172,196 124,190" fill="#fff" stroke="#141414" stroke-width="2.5"/>
        </svg>
      </div>
    </div>`;
}

function buildSteppingFeet() {
  let stripes = "";
  for (let i = 0; i < 22; i++) stripes += `<div class="${i % 2 ? "w" : "k"}"></div>`;
  return `
    <div class="stepfeet">
      <div class="bg">${stripes}</div>
      <div class="bar yellow"></div>
      <div class="bar blue"></div>
    </div>`;
}

function buildPhi() {
  return `
    <div class="phi">
      <span class="a"></span>
      <span class="b"></span>
    </div>`;
}

function buildWagonWheel() {
  let sp = "";
  for (let i = 0; i < 12; i++) sp += `<line x1="110" y1="110" x2="110" y2="14" stroke="#141414" stroke-width="7" transform="rotate(${i * 30} 110 110)"/>`;
  return `
    <div class="wagon">
      <svg width="220" height="220" viewBox="0 0 220 220">
        <circle cx="110" cy="110" r="100" fill="#fff" stroke="#141414" stroke-width="8"/>
        ${sp}
        <circle cx="110" cy="110" r="16" fill="#141414"/>
      </svg>
    </div>`;
}

function buildBarberPole() {
  const stripes = `<div class="stripes"></div>`;
  return `
    <div class="barber">
      <div class="win v">${stripes}</div>
      <div class="win h">${stripes}</div>
    </div>`;
}

function buildEnigma() {
  const cx = 150, cy = 150;
  let p = `<circle cx="${cx}" cy="${cy}" r="146" fill="#fff"/>`;
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * 360;
    p += `<rect x="${cx - 1.6}" y="${cy - 146}" width="3.2" height="140" fill="#141414" transform="rotate(${a} ${cx} ${cy})"/>`;
  }
  [52, 84, 116].forEach((r) => {
    p += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#b9a6e0" stroke-width="15"/>`;
  });
  p += `<circle cx="${cx}" cy="${cy}" r="6" fill="#141414"/>`;
  return `<svg width="300" height="300" viewBox="0 0 300 300">${p}</svg>`;
}

function buildFraserWilcox() {
  const cx = 160, cy = 160, shades = ["#0c0c0c", "#5a5a5a", "#ababab", "#f4f4f4"];
  let p = `<circle cx="${cx}" cy="${cy}" r="150" fill="#8a8a8a"/>`;
  const N = 16;
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < 4; k++) {
      const a0 = ((i + k / 4) / N) * 2 * Math.PI, a1 = ((i + (k + 1) / 4) / N) * 2 * Math.PI;
      const pt = (a, r) => `${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
      p += `<path d="M ${pt(a0, 40)} L ${pt(a0, 145)} A 145 145 0 0 1 ${pt(a1, 145)} L ${pt(a1, 40)} A 40 40 0 0 0 ${pt(a0, 40)} Z" fill="${shades[k]}"/>`;
    }
  }
  p += `<circle cx="${cx}" cy="${cy}" r="40" fill="#8a8a8a"/>`;
  return `<svg width="320" height="320" viewBox="0 0 320 320">${p}</svg>`;
}

function buildFlashLag() {
  return `
    <div class="flashlag">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="146" fill="#101626"/>
        <g class="fl-bar">
          <rect x="42" y="146" width="216" height="8" rx="4" fill="#3bb3e6"/>
        </g>
        <circle class="fl-dot" cx="282" cy="150" r="7" fill="#fff"/>
        <circle cx="150" cy="150" r="5" fill="#fff"/>
      </svg>
    </div>`;
}

function buildSfmCylinder() {
  let dots = "";
  for (let i = 0; i < 28; i++) {
    const top = 8 + ((i * 53) % 200);
    const dur = 2.6, delay = -(((i * 0.83) % dur)).toFixed(2);
    dots += `<span style="top:${top}px;animation-delay:${delay}s"></span>`;
  }
  return `<div class="sfm">${dots}</div>`;
}

function buildStarburst() {
  const cx = 160, cy = 160;
  const ring = (R, rot, col, w) => {
    const n = 7;
    let d = "";
    for (let i = 0; i <= n * 2; i++) {
      const a = ((i / (n * 2)) * 2 * Math.PI) + rot;
      const r = i % 2 === 0 ? R : R * 0.82;
      d += (i ? "L" : "M") + (cx + r * Math.cos(a)).toFixed(1) + " " + (cy + r * Math.sin(a)).toFixed(1) + " ";
    }
    return `<path d="${d}Z" fill="none" stroke="${col}" stroke-width="${w}" stroke-linejoin="round"/>`;
  };
  let p = `<rect width="320" height="320" fill="#fff"/>`;
  [58, 96, 134].forEach((R) => {
    p += ring(R, 0, "#bfbfbf", 7);
    p += ring(R, 0, "#7a7a7a", 2.5);
  });
  return `<svg width="320" height="320" viewBox="0 0 320 320">${p}</svg>`;
}

function buildNinio() {
  const W = 340, step = 28;
  let p = `<rect width="${W}" height="${W}" fill="#fff"/>`;
  // 45度傾けた灰色の格子
  for (let k = -W; k < W * 2; k += step) {
    p += svgLine(k, 0, k + W, W, "#9a9a9a", 2.2);
    p += svgLine(k, W, k + W, 0, "#9a9a9a", 2.2);
  }
  // 交点のうち12か所に白いハロー＋黒点
  const spots = [[2, 2], [6, 2], [10, 2], [4, 4], [8, 4], [2, 6], [6, 6], [10, 6], [4, 8], [8, 8], [2, 10], [10, 10]];
  spots.forEach(([gx, gy]) => {
    const x = (gx * step) / 2 + step / 2, y = (gy * step) / 2 + step / 2;
    p += `<circle cx="${x}" cy="${y}" r="9" fill="#fff"/><circle cx="${x}" cy="${y}" r="4.6" fill="#0c0c0c"/>`;
  });
  return `<svg width="${W}" height="${W}" viewBox="0 0 ${W} ${W}">${p}</svg>`;
}

function buildHoneycomb() {
  const W = 360, H = 320, s = 30;
  let lines = "", barbs = "";
  const h = s * Math.sin(Math.PI / 3);
  const seen = new Set(); // 共有頂点にヒゲを重複して描かない
  for (let row = -1; row < H / h + 1; row++) {
    for (let col = -1; col < W / (s * 1.5) + 1; col++) {
      const cx = col * s * 1.5, cy = row * 2 * h + (col % 2 ? h : 0);
      let pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        pts.push([cx + s * Math.cos(a), cy + s * Math.sin(a)]);
      }
      for (let i = 0; i < 6; i++) {
        const a = pts[i], b = pts[(i + 1) % 6];
        lines += svgLine(a[0].toFixed(1), a[1].toFixed(1), b[0].toFixed(1), b[1].toFixed(1), "#0c0c0c", 2);
      }
      // 各頂点に小さなヒゲを1組だけ（辺と重ならない向きに2本）
      pts.forEach(([vx, vy]) => {
        if (vx < -5 || vx > W + 5 || vy < -5 || vy > H + 5) return;
        const key = Math.round(vx) + "," + Math.round(vy);
        if (seen.has(key)) return;
        seen.add(key);
        const a = Math.atan2(vy - cy, vx - cx);
        [-0.55, 0.55].forEach((da) => {
          barbs += svgLine(vx.toFixed(1), vy.toFixed(1),
            (vx + 6 * Math.cos(a + da)).toFixed(1), (vy + 6 * Math.sin(a + da)).toFixed(1), "#0c0c0c", 1.8);
        });
      });
    }
  }
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><rect width="${W}" height="${H}" fill="#fff"/>${lines}${barbs}</svg>`;
}

function buildTiltAftereffect() {
  const grating = (id, ang) => `
    <pattern id="${id}" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(${ang})">
      <rect width="16" height="16" fill="#fff"/><rect width="8" height="16" fill="#2a2a2a"/>
    </pattern>`;
  return `<svg width="380" height="220" viewBox="0 0 380 220">
    <defs>${grating("taeL", -15)}${grating("taeR", 0)}</defs>
    <circle cx="100" cy="110" r="86" fill="url(#taeL)"/>
    <circle cx="290" cy="110" r="86" fill="url(#taeR)"/>
    <circle cx="100" cy="110" r="4.5" fill="#df3b26"/>
    <circle cx="290" cy="110" r="4.5" fill="#df3b26"/>
  </svg>`;
}

function buildStroop() {
  const words = [
    ["赤", "#1f4fb8"], ["青", "#f3c10a"], ["黄", "#2e9e4f"], ["緑", "#df3b26"],
    ["青", "#df3b26"], ["緑", "#1f4fb8"], ["赤", "#2e9e4f"], ["黄", "#df3b26"],
    ["緑", "#f3c10a"], ["赤", "#1f4fb8"], ["黄", "#2e9e4f"], ["青", "#f3c10a"],
  ];
  let t = "";
  words.forEach(([w, c], i) => {
    const x = 70 + (i % 4) * 70, y = 70 + Math.floor(i / 4) * 72;
    t += `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Noto Sans JP',sans-serif" font-weight="900" font-size="44" fill="${c}">${w}</text>`;
  });
  return `<svg width="350" height="250" viewBox="0 0 350 250">${t}</svg>`;
}

function buildThatcher() {
  // 顔は原点中心・正立で定義し、全体を180度回転して表示する
  const face = (x, thatcherized) => {
    const eye = (ex) => {
      const e = `<ellipse cx="${ex}" cy="-22" rx="14" ry="9" fill="#fff" stroke="#141414" stroke-width="2.5"/>
        <circle cx="${ex}" cy="-19" r="4.5" fill="#141414"/>
        <path d="M ${ex - 15} -38 Q ${ex} -48 ${ex + 15} -38" fill="none" stroke="#141414" stroke-width="3"/>`;
      return thatcherized ? `<g transform="rotate(180 ${ex} -26)">${e}</g>` : e;
    };
    const mouthShape = `<path d="M -30 24 Q 0 56 30 24 Q 0 38 -30 24 Z" fill="#b03030" stroke="#141414" stroke-width="2.5"/>`;
    const mouth = thatcherized ? `<g transform="rotate(180 0 33)">${mouthShape}</g>` : mouthShape;
    return `
      <g transform="translate(${x},122) rotate(180)">
        <circle cx="0" cy="0" r="80" fill="#f3d9a4" stroke="#141414" stroke-width="3"/>
        ${eye(-30)}${eye(30)}
        <path d="M -2 -8 Q 6 4 -2 10" fill="none" stroke="#c9a86a" stroke-width="3"/>
        ${mouth}
      </g>`;
  };
  return `<svg width="380" height="245" viewBox="0 0 380 245">${face(100, false)}${face(280, true)}</svg>`;
}

function buildGlassPattern() {
  // 乱数（決定的）で点を打ち、全体を8度回転させたコピーを重ねる
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = 160, cy = 160, rot = (8 * Math.PI) / 180;
  let p = `<rect width="320" height="320" fill="#fff"/>`;
  for (let i = 0; i < 420; i++) {
    const x = rnd() * 300 + 10, y = rnd() * 300 + 10;
    const dx = x - cx, dy = y - cy;
    if (Math.hypot(dx, dy) > 150) continue;
    const x2 = cx + dx * Math.cos(rot) - dy * Math.sin(rot);
    const y2 = cy + dx * Math.sin(rot) + dy * Math.cos(rot);
    p += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#141414"/>`;
    p += `<circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="2" fill="#141414"/>`;
  }
  return `<svg width="320" height="320" viewBox="0 0 320 320">${p}</svg>`;
}

function buildGiovanelli() {
  let p = `<rect width="360" height="200" fill="#fff"/>`;
  for (let i = 0; i < 7; i++) {
    const x = 40 + i * 47, dy = (i % 2 ? -1 : 1) * 16;
    p += `<circle cx="${x}" cy="${100 + dy}" r="22" fill="none" stroke="#141414" stroke-width="2.5"/>`;
    p += `<circle cx="${x}" cy="100" r="6" fill="#0c0c0c"/>`;
  }
  return `<svg width="360" height="200" viewBox="0 0 360 200">${p}</svg>`;
}

function buildNumerosity() {
  let seed = 3;
  const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
  let p = `<rect width="380" height="220" viewBox="0 0 380 220" fill="#fff"/>`;
  p += `<rect x="0" y="0" width="180" height="220" fill="#f4efe4"/><rect x="200" y="0" width="180" height="220" fill="#f4efe4"/>`;
  // 左：かたまりがちなランダム配置 60個
  const pts = [];
  while (pts.length < 60) {
    const x = 14 + rnd() * 152, y = 14 + rnd() * 192;
    if (pts.every(([px, py]) => Math.hypot(px - x, py - y) > 9)) pts.push([x, y]);
  }
  pts.forEach(([x, y]) => (p += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="#141414"/>`));
  // 右：規則的な配置 60個（10列×6行）
  for (let r = 0; r < 6; r++) for (let c = 0; c < 10; c++)
    p += `<circle cx="${216 + c * 16.5}" cy="${28 + r * 33}" r="4" fill="#141414"/>`;
  return `<svg width="380" height="220" viewBox="0 0 380 220">${p}</svg>`;
}

function buildMissingSquare() {
  const u = 22, ox = 30, H = 290;
  // 13×5 の直角三角形を作る4ピース（古典的な配置）
  const pieces = (oy, swap) => {
    const Y = (gy) => oy - gy * u, X = (gx) => ox + gx * u;
    const poly = (pts, fill) =>
      `<polygon points="${pts.map(([gx, gy]) => `${X(gx)},${Y(gy)}`).join(" ")}" fill="${fill}" stroke="#141414" stroke-width="1.5"/>`;
    let s = "";
    if (!swap) {
      s += poly([[0, 0], [8, 0], [8, 3], [0, 0]], "#1f4fb8");            // 8×3 三角形
      s += poly([[8, 3], [13, 3], [13, 5], [8, 3]], "#df3b26");          // 5×2 三角形
      s += poly([[8, 0], [13, 0], [13, 3], [10, 3], [10, 1], [8, 1], [8, 0]], "#f3c10a"); // L字
      s += poly([[8, 1], [10, 1], [10, 3], [13, 3], [13, 3], [8, 3], [8, 1]], "#2e9e4f"); // L字
    } else {
      s += poly([[0, 0], [5, 0], [5, 2], [0, 0]], "#df3b26");            // 5×2 三角形（左下へ）
      s += poly([[5, 2], [13, 2], [13, 5], [5, 2]], "#1f4fb8");          // 8×3 三角形
      s += poly([[5, 0], [10, 0], [10, 1], [7, 1], [7, 2], [5, 2], [5, 0]], "#2e9e4f");
      s += poly([[7, 1], [10, 1], [10, 0], [13, 0], [13, 2], [7, 2], [7, 1]], "#f3c10a");
      s += `<rect x="${X(5)}" y="${Y(1)}" width="${u}" height="${u}" fill="#fff" stroke="#141414" stroke-width="1.5" stroke-dasharray="4 3"/>`;
    }
    return s;
  };
  return `<svg width="350" height="${H}" viewBox="0 0 350 ${H}">${pieces(125, false)}${pieces(270, true)}</svg>`;
}

function buildBullseye() {
  const target = "#8f8f8f";
  const panel = (cx, darkFirst) => {
    let s = "";
    for (let i = 9; i >= 1; i--) {
      const dark = (i % 2 === 1) === darkFirst;
      s += `<circle cx="${cx}" cy="120" r="${10 + i * 11}" fill="${dark ? "#161616" : "#ededed"}"/>`;
    }
    return s + `<circle cx="${cx}" cy="120" r="21" fill="${target}"/>`;
  };
  return `<svg width="340" height="240" viewBox="0 0 340 240"><rect width="340" height="240" fill="#7d7d7d"/>${panel(90, true)}${panel(250, false)}</svg>`;
}

function buildCheckerboardContrast() {
  const t = 36, n = 8, g = "#8a8a8a";
  let p = `<rect width="${t * n}" height="${t * n}" fill="#fff"/>`;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++)
    if ((r + c) % 2 === 0) p += `<rect x="${c * t}" y="${r * t}" width="${t}" height="${t}" fill="#111"/>`;
  const row = 3;
  for (let c = 0; c < n; c++) p += `<rect x="${c * t + 8}" y="${row * t + 8}" width="${t - 16}" height="${t - 16}" fill="${g}"/>`;
  return `<svg width="${t * n}" height="${t * n}" viewBox="0 0 ${t * n} ${t * n}">${p}</svg>`;
}

function buildHelmholtzKohlrausch() {
  const bg = "#7c7c7c";
  let p = `<rect width="340" height="220" fill="${bg}"/>`;
  // 上＝灰色 / 下＝ほぼ同輝度の鮮やかな色
  const pairs = [["#8c8c8c", "#c23bd2"], ["#8c8c8c", "#2f73e6"], ["#8c8c8c", "#d83b3b"]];
  pairs.forEach(([gray, col], i) => {
    const x = 38 + i * 100;
    p += `<rect x="${x}" y="34" width="72" height="64" fill="${gray}"/>`;
    p += `<rect x="${x}" y="122" width="72" height="64" fill="${col}"/>`;
  });
  return `<svg width="340" height="220" viewBox="0 0 340 220">${p}</svg>`;
}

function buildHealingGrid() {
  const W = 340, H = 300, step = 32, cx = W / 2, cy = H / 2, coreR = 74;
  let seed = 9;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  let p = `<rect width="${W}" height="${H}" fill="#efe9dc"/>`;
  for (let y = step / 2; y < H; y += step) {
    for (let x = step / 2; x < W; x += step) {
      const core = Math.hypot(x - cx, y - cy) < coreR;
      const jx = core ? 0 : (rnd() - 0.5) * 22, jy = core ? 0 : (rnd() - 0.5) * 22;
      const rot = core ? 0 : (rnd() - 0.5) * 50;
      p += `<g transform="translate(${(x + jx).toFixed(1)} ${(y + jy).toFixed(1)}) rotate(${rot.toFixed(1)})">` +
        `<rect x="-8" y="-2" width="16" height="4" fill="#3a3a3a"/><rect x="-2" y="-8" width="4" height="16" fill="#3a3a3a"/></g>`;
    }
  }
  p += `<circle cx="${cx}" cy="${cy}" r="3" fill="#df3b26"/>`;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildMoonIllusion() {
  const W = 340, H = 300;
  let p = `<defs><linearGradient id="moonSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0b1030"/><stop offset="0.7" stop-color="#3a3266"/><stop offset="1" stop-color="#9a6a5a"/></linearGradient></defs>`;
  p += `<rect width="${W}" height="${H}" fill="url(#moonSky)"/>`;
  // 上空の月（小さく見える）
  p += `<circle cx="262" cy="64" r="30" fill="#f4efcf"/>`;
  // 地面
  p += `<rect y="236" width="${W}" height="64" fill="#16210f"/>`;
  // 木や建物（比較対象）
  const tree = (x, h) => `<polygon points="${x - 13},238 ${x},${238 - h} ${x + 13},238" fill="#0c160a"/><rect x="${x - 2.5}" y="234" width="5" height="10" fill="#0c160a"/>`;
  p += tree(34, 56) + tree(64, 40) + tree(300, 50) + tree(322, 36);
  p += `<rect x="112" y="200" width="20" height="38" fill="#0c160a"/><rect x="138" y="184" width="16" height="54" fill="#0c160a"/><rect x="206" y="206" width="24" height="32" fill="#0c160a"/>`;
  // 地平線近くの月（大きく見える） — 上空の月と同じ半径
  p += `<circle cx="170" cy="228" r="30" fill="#f4efcf"/>`;
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${p}</svg>`;
}

function buildInducedMotion() {
  return `<div class="induced"><div class="frame"></div><div class="dot"></div></div>`;
}

function buildMotionSilencing() {
  let dots = "";
  const n = 44, R = 112;
  for (let i = 0; i < n; i++) {
    const a = (i * 360) / n;
    dots += `<span style="transform:rotate(${a}deg) translate(0,-${R}px);animation-delay:${(i * 0.04).toFixed(2)}s"></span>`;
  }
  return `<div class="silence"><div class="sring">${dots}</div><span class="sfix"></span></div>`;
}

function buildFurrow() {
  return `<div class="furrow"><div class="spot"></div></div>`;
}

function buildDuckRabbit() {
  // 左にくちばし／耳（2本の突起）、右がふくらんだ頭。目はどちらの向きでも成立する位置に
  const body =
    "M 96 132 " +
    "C 64 122 46 124 34 130 C 58 136 72 138 92 144 " +
    "C 60 150 46 154 40 162 C 70 166 86 162 104 166 " +
    "C 118 206 178 222 236 200 C 286 181 298 150 282 126 " +
    "C 266 104 224 92 172 98 C 138 102 110 114 96 132 Z";
  return `<svg width="340" height="260" viewBox="0 0 340 260">
    <rect width="340" height="260" fill="#fff"/>
    <path d="${body}" fill="#141414"/>
    <circle cx="150" cy="124" r="11" fill="#fff"/>
    <circle cx="150" cy="124" r="5" fill="#141414"/>
    <path d="M 250 168 q 16 6 30 2" fill="none" stroke="#fff" stroke-width="3"/>
  </svg>`;
}


# 錯視ギャラリー

1ページに1つの錯視を表示する、純粋な HTML/CSS 製の錯視コレクション。画像を一切使わず、すべて CSS で描画しています。

## 収録している錯視

- カフェウォール錯視
- ヘルマン格子
- きらめき格子錯視
- エビングハウス錯視
- ミュラー・リヤー錯視
- カニッツァの三角形
- 同時対比
- 色の残像

## ローカルで見る

```sh
cd illusion-site
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

## GitHub Pages で公開する

1. このフォルダを GitHub のリポジトリに push する。
   ```sh
   git add .
   git commit -m "錯視ギャラリーを追加"
   git branch -M main
   git remote add origin https://github.com/<ユーザー名>/<リポジトリ名>.git
   git push -u origin main
   ```
2. リポジトリの **Settings → Pages** を開く。
3. **Source** を `Deploy from a branch`、Branch を `main` / `/ (root)` に設定して保存。
4. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

## 錯視を追加する

`assets/illusions.js` の `ILLUSIONS` 配列に項目を1つ追加し、必要なら `assets/style.css`
に対応するスタイルを足すだけです。ギャラリー・個別ページ・前後ナビは自動更新されます。

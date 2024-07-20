
# 問題 5

## コメント欄の文字数を表示する ex05.js の作成

### 説明
`ex05.html` に読み込む `ex05.js` を作成してください。
- コメント欄に記入された文字数を表示します。
- 「現在の文字数は、？文字です。」を文字が入力されるたびに更新します（？は数字）。

### ソリューションアプローチ
1. HTML ファイルにコメント欄と表示エリアを作成します。
2. JavaScript ファイルでコメント欄の入力イベントを監視し、入力されるたびに文字数をカウントして表示エリアを更新します。

### HTML コード (ex05.html)
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>コメント投稿</title>
  <script src="ex05.js" defer></script>
</head>
<body>
  <div>
    <label for="comment">コメント投稿</label>
    <textarea id="comment" rows="4" cols="50" placeholder="ここにコメントを書いてください"></textarea>
  </div>
  <div>
    <p id="charCount">現在の文字数は、0文字です。</p>
  </div>
</body>
</html>
```

### JavaScript コード (ex05.js)
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const comment = document.getElementById("comment");
  const charCount = document.getElementById("charCount");

  comment.addEventListener("input", () => {
    const length = comment.value.length;
    charCount.textContent = `現在の文字数は、${length}文字です。`;
  });
});
```

### コードの詳細な解説
1. `ex05.html` にコメント欄（`<textarea>`）と文字数を表示するための `<p>` 要素を作成します。
2. `ex05.js` で、HTML ドキュメントが読み込まれた後に実行するためのイベントリスナーを設定します。
3. コメント欄の `input` イベントを監視し、入力されるたびにコメント欄の文字数を取得して、表示エリアの内容を更新します。

### 入出力例
- 入力: コメント欄に「こんにちは」
- 出力: `現在の文字数は、5文字です。`

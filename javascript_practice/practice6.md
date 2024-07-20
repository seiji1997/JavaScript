
# 問題 6

## 外部 API からデータを読み込んで表示する ex06.js の作成

### 説明
`ex06.html` に読み込む `ex06.js` を作成してください。以下の内容に沿って、外部 API からデータを読み込んで画面に表示するコードを記述してください。

- URL form の action 属性から取得します
- URL の末尾にプルダウンで選択された数値を加えます
- Fetch API で外部サイトから記事データを読み込みます
- 読み込んだらコンソールに出力します
- 読み込んだデータの `title` と `body` プロパティの値を、それぞれの id がついた要素に書き込みます
- 別の記事を選択して再読み込みしたときに、タイトルと本文が切り替わるようにしてください

### ソリューションアプローチ
1. HTML ファイルにプルダウンメニューと表示エリアを作成します。
2. JavaScript ファイルでプルダウンメニューの選択イベントを監視し、選択された値を URL に追加して Fetch API でデータを取得します。
3. 取得したデータを表示エリアに書き込みます。

### HTML コード (ex06.html)
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>記事</title>
  <script src="ex06.js" defer></script>
</head>
<body>
  <div>
    <label for="article">記事選択:</label>
    <select id="article">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button id="load">再読み込み</button>
  </div>
  <div>
    <h1 id="title"></h1>
    <p id="body"></p>
  </div>
</body>
</html>
```

### JavaScript コード (ex06.js)
```javascript
document.addEventListener("DOMContentLoaded", () => {
  const articleSelect = document.getElementById("article");
  const loadButton = document.getElementById("load");
  const titleElement = document.getElementById("title");
  const bodyElement = document.getElementById("body");

  const loadArticle = async () => {
    const articleId = articleSelect.value;
    const url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    titleElement.textContent = data.title;
    bodyElement.textContent = data.body;
  };

  loadButton.addEventListener("click", loadArticle);
  loadArticle();
});
```

### コードの詳細な解説
1. `ex06.html` にプルダウンメニューと表示エリア（`<h1>` と `<p>`）を作成します。
2. `ex06.js` で、HTML ドキュメントが読み込まれた後に実行するためのイベントリスナーを設定します。
3. プルダウンメニューの選択された値を URL に追加し、Fetch API を使用してデータを取得します。
4. 取得したデータの `title` と `body` を表示エリアに書き込みます。
5. `load` ボタンのクリックイベントを監視し、再読み込み時にデータを更新します。

### 入出力例
- 入力: プルダウンメニューで記事 ID `1` を選択し、「再読み込み」ボタンをクリック
- 出力: 
  - タイトル: `sunt aut facere repellat provident occaecati excepturi optio reprehenderit`
  - 本文: `quia et suscipit
suscipit...`


# 問題 2

## 2-1 運賃（`fare`）をプロパティに持つチケット（`ticket`）オブジェクトの初期化

### 説明
運賃 `fare` をプロパティに持つ `ticket` オブジェクトを初期化します。運賃の数値は `2050` とします。コンソールに `ticket` を出力してください。

### ソリューションアプローチ
1. `fare` プロパティを持つ `ticket` オブジェクトを作成します。
2. `ticket` オブジェクトをコンソールに出力します。

### コード
```javascript
const ticket = {
  fare: 2050
};

console.log(ticket);
```

### コードの詳細な解説
1. `fare` プロパティに `2050` を設定した `ticket` オブジェクトを初期化します。
2. `console.log` 関数を使用して `ticket` オブジェクトを出力します。

### 入出力例
- 入力: なし
- 出力:
  ```
  { fare: 2050 }
  ```

---

## 2-2 特急料金（`express`）の追加

### 説明
特急に乗るために特急料金を追加します。まず、特急（`express`）プロパティを `ticket` に追加し、値に空オブジェクトを代入します。次に、数値 `3440` を持つ運賃（`fare`）プロパティを `ticket` の `express` に追加します。コンソールに `ticket` を出力してください。

### ソリューションアプローチ
1. `express` プロパティを `ticket` オブジェクトに追加し、値を空オブジェクトに設定します。
2. `fare` プロパティを `express` オブジェクトに追加し、値を `3440` に設定します。
3. `ticket` オブジェクトをコンソールに出力します。

### コード
```javascript
ticket.express = {};
ticket.express.fare = 3440;

console.log(ticket);
```

### コードの詳細な解説
1. `ticket` オブジェクトに `express` プロパティを追加し、空オブジェクト `{}` を代入します。
2. `ticket.express` オブジェクトに `fare` プロパティを追加し、値を `3440` に設定します。
3. `console.log` 関数を使用して `ticket` オブジェクトを出力します。

### 入出力例
- 入力: なし
- 出力:
  ```
  { fare: 2050, express: { fare: 3440 } }
  ```

---

## 2-3 合計料金を計算するメソッドの追加

### 説明
`ticket` オブジェクトに `calcTotal` メソッドを追加します。メソッドは、特急料金が存在すれば運賃と特急料金の合計を、存在しなければ運賃のみを返します。最後にコンソールに `ticket.calcTotal()` の結果を出力してください。

### ソリューションアプローチ
1. `calcTotal` メソッドを `ticket` オブジェクトに追加します。
2. メソッドは、`express` プロパティが存在するかどうかをチェックし、存在すれば `fare` の合計を、存在しなければ `fare` のみを返します。
3. `ticket.calcTotal()` を呼び出し、その結果をコンソールに出力します。

### コード
```javascript
ticket.calcTotal = function() {
  if (this.express) {
    return this.fare + this.express.fare;
  } else {
    return this.fare;
  }
};

console.log(ticket.calcTotal());
```

### コードの詳細な解説
1. `calcTotal` メソッドを `ticket` オブジェクトに追加します。
2. メソッド内で `express` プロパティの存在をチェックし、存在すれば `fare` と `express.fare` の合計を返します。存在しなければ `fare` のみを返します。
3. `console.log` 関数を使用して `ticket.calcTotal()` の結果を出力します。

### 入出力例
- 入力: なし
- 出力:
  ```
  5490
  ```

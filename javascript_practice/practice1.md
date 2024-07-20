
# 問題 1

## 1-1 繰り返し処理によって配列の要素の型を出力するプログラム

### 説明
問題の要求は、配列 `values` の各要素の型を出力するプログラムを作成することです。配列 `values` の要素には、以下の基本型がすべて含まれている必要があります：
- boolean
- number
- string
- symbol
- bigint
- object
- undefined

### ソリューションアプローチ
1. 配列 `values` を各型の要素で初期化します。
2. `for...of` ループを使用して配列 `values` を繰り返し処理し、各要素の型を `console.log` で出力します。

### コード
```javascript
const values = [
  true,                  // boolean
  42,                    // number
  "Hello, world!",       // string
  Symbol("sym"),         // symbol
  123n,                  // bigint
  { name: "John Doe" },  // object
  undefined              // undefined
];

for (let value of values) {
  console.log(typeof value);
}
```

### コードの詳細な解説
1. 配列 `values` を各型の例で初期化します。
2. `for...of` ループを使用して、配列の各要素を取り出し、その型を `typeof` 演算子で取得し、`console.log` で出力します。

### 入出力例
- 入力: 配列 `values` に含まれる各要素
- 出力:
  ```
  boolean
  number
  string
  symbol
  bigint
  object
  undefined
  ```

---

## 1-2 文字列の配列の長さを出力するコード

### 説明
配列 `notes` に含まれる各文字列の長さを計算し、コンソールに出力する必要があります。

### ソリューションアプローチ
1. 配列 `notes` を文字列の例で初期化します。
2. `for...of` ループを使用して配列 `notes` を繰り返し処理し、各文字列の長さを `console.log` で出力します。

### コード
```javascript
const notes = [
  "Lorem", 
  "ipsum", 
  "dolor", 
  "sit", 
  "amet", 
  "consectetur", 
  "adipiscing", 
  "elit", 
  "Aliquam", 
  "malesuada"
];

for (let note of notes) {
  console.log(note.length);
}
```

### コードの詳細な解説
1. 配列 `notes` を例として文字列で初期化します。
2. `for...of` ループを使用して、配列の各文字列を取り出し、その長さを `length` プロパティで取得し、`console.log` で出力します。

### 入出力例
- 入力: 配列 `notes` に含まれる各文字列
- 出力:
  ```
  5
  5
  5
  3
  4
  11
  10
  4
  7
  9
  ```

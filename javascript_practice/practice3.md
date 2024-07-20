
# 問題 3

## 3-1 四角形の面積を求める関数の作成

### 説明
次の内容に沿って、四角形の面積を求める関数を、変数 `rectArea` に代入してください。

- 関数は1つまたは2つの引数を受け取る
- 引数が1つの場合は、デフォルト値としてもう一方の引数にも同じ値を設定する
- 2つの引数を掛けた数を返す

### ソリューションアプローチ
1. 関数 `rectArea` を作成し、引数が1つの場合にはその値を使って正方形の面積を計算し、2つの場合にはそれぞれの引数を掛け合わせて長方形の面積を計算します。

### コード
```javascript
const rectArea = (length, width = length) => {
  return length * width;
};

console.log(rectArea(5, 6));  // 引数が2つの場合
console.log(rectArea(10));    // 引数が1つの場合
```

### コードの詳細な解説
1. 関数 `rectArea` を定義し、引数 `length` と `width` を受け取ります。`width` はデフォルト値として `length` を設定します。
2. `length` と `width` を掛け合わせた結果を返します。
3. `console.log` 関数を使用して、関数 `rectArea` の呼び出し結果を出力します。

### 入出力例
- 入力: `rectArea(5, 6)`
  - 出力: `30`
- 入力: `rectArea(10)`
  - 出力: `100`

---

## 3-2 文字列の長さを比較する関数の作成

### 説明
以下の内容に沿って、2つの文字列を引数に受け取り、それぞれの長さを比較する関数を作成してください。比較結果は文字列で返します。

- 少なくともいずれか一方が文字列ではない場合、「比較できません」を返す
- 最初の文字列の長さが次の文字列の長さよりも大きい場合、「最初の文字列が ? 文字長いです」を返す（? には数値が入ります）
- 最初の文字列の長さが次の文字列の長さよりも小さい場合、「最初の文字列が ? 文字短いです」を返す（? には数値が入ります）
- 2つの文字列が同じ長さの場合、「同じ長さです」を返す

### ソリューションアプローチ
1. 2つの引数を受け取る関数 `compareStrings` を定義します。
2. それぞれの引数が文字列かどうかを確認します。
3. 長さを比較し、それに応じた文字列を返します。

### コード
```javascript
const compareStrings = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return "比較できません";
  }
  
  const len1 = str1.length;
  const len2 = str2.length;

  if (len1 > len2) {
    return `最初の文字列が ${len1 - len2} 文字長いです`;
  } else if (len1 < len2) {
    return `最初の文字列が ${len2 - len1} 文字短いです`;
  } else {
    return "同じ長さです";
  }
};

console.log(compareStrings("hello", "world"));      // 同じ長さ
console.log(compareStrings("javascript", "js"));    // 最初が長い
console.log(compareStrings("short", "longer"));     // 最初が短い
console.log(compareStrings("string", 12345));       // 比較できません
```

### コードの詳細な解説
1. 関数 `compareStrings` を定義し、2つの引数 `str1` と `str2` を受け取ります。
2. それぞれの引数が文字列であるかどうかを確認し、文字列でない場合には「比較できません」を返します。
3. 文字列の長さを取得し、長さを比較して結果を文字列で返します。
4. `console.log` 関数を使用して、関数 `compareStrings` の呼び出し結果を出力します。

### 入出力例
- 入力: `compareStrings("hello", "world")`
  - 出力: `同じ長さです`
- 入力: `compareStrings("javascript", "js")`
  - 出力: `最初の文字列が 8 文字長いです`
- 入力: `compareStrings("short", "longer")`
  - 出力: `最初の文字列が 1 文字短いです`
- 入力: `compareStrings("string", 12345)`
  - 出力: `比較できません`

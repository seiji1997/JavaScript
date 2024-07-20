
# 異なる3つの数字を並べてできる3桁の数値をすべて出力するプログラム

## 問題の説明
異なる3つの数字を並べてできる3桁の数値をすべて出力するプログラムを作成してください。以下、手順に沿って実施してください。

1. 重複のないランダムな数値を3つ生成し、配列に格納します。
2. 生成した配列の要素を並べてできる3桁の数値をすべて出力します。

## コード

```javascript
// 重複のないランダムな数値を3つ生成し、配列に格納
let numbers = [];
while (numbers.length < 3) {
    let num = Math.floor(Math.random() * 10);
    if (!numbers.includes(num)) {
        numbers.push(num);
    }
}
console.log("Generated numbers: ", numbers);

// 生成した配列の要素を並べてできる3桁の数値をすべて出力
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (i != j) {
            for (let k = 0; k < numbers.length; k++) {
                if (k != i && k != j) {
                    console.log("" + numbers[i] + numbers[j] + numbers[k]);
                }
            }
        }
    }
}
```

## 解説
このプログラムは、異なる3つの数字を生成し、その全ての組み合わせを出力するものです。初心者でも理解しやすいように、コードを短くし、各ステップでの処理内容を詳しく解説しました。

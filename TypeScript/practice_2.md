
# 回答解説

## 問題2

### 2-1: 数学関数の定義

次の条件に従って3つの関数を作成してください。

- 関数名: `sum`
  - 引数: `x: number`
  - 戻り値: `x` を2倍した値を返す

- 関数名: `times`
  - 引数: `x: number`
  - 戻り値: `x` を自分自身で掛けた値を返す

- 関数名: `pow`
  - 引数: `x: number`
  - 戻り値: `x` を `x` 乗した値を返す

例:

```typescript
sum(3);   // 6
times(3); // 9
pow(3);   // 27
```

#### 回答

```typescript
function sum(x: number): number {
  return x + x;
}

function times(x: number): number {
  return x * x;
}

function pow(x: number): number {
  return x ** x;
}
```

### 解説

これらの関数は、それぞれ異なる数学的な操作を行います。

- `sum` 関数は、引数 `x` を2倍にします。
- `times` 関数は、引数 `x` を自分自身で掛け算します。
- `pow` 関数は、引数 `x` を `x` 乗します。

### 2-2: 高階関数 `calc` の定義

次の条件に従って `calc` 関数を作成してください。

- 関数名: `calc`
  - 引数:
    - `x: number`
    - `fn: (num: number) => number`
  - 戻り値: 関数 `fn` を引数 `x` で実行した結果を返す

例:

```typescript
calc(3, sum);   // 6
calc(3, times); // 9
calc(3, pow);   // 27
```

#### 回答

```typescript
function calc(x: number, fn: (num: number) => number): number {
  return fn(x);
}
```

### 解説

`calc` 関数は、高階関数と呼ばれ、他の関数を引数として受け取り、それを実行します。この場合、`x` を `fn` に渡して実行し、その結果を返します。

### 2-3: 実行例

`calc` 関数を使用して、先ほど定義した `sum`、`times`、`pow` 関数を実行し、結果をコンソールに出力します。

#### 回答

```typescript
console.log(calc(3, sum));
console.log(calc(3, times));
console.log(calc(3, pow));
```

### 解説

- `calc(3, sum)` は `sum(3)` を実行し、その結果 `6` を返します。
- `calc(3, times)` は `times(3)` を実行し、その結果 `9` を返します。
- `calc(3, pow)` は `pow(3)` を実行し、その結果 `27` を返します。

これらの関数呼び出しの結果は、それぞれの関数がどのように動作するかを示しています。

### 例

```typescript
console.log(calc(3, sum));   // 6
console.log(calc(3, times)); // 9
console.log(calc(3, pow));   // 27
```

これにより、`calc` 関数が他の関数を引数として受け取り、その関数を実行する方法を示しています。

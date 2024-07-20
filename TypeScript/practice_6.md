
# 回答解説

## 問題6

### 1-1: toText 関数の定義と使用例

次の条件に従って `toText` 関数を作成し、使用例を示してください。

- `toText` 関数は、`string`、`number`、または `boolean` 型の `input` を引数として受け取り、`string` 型に変換して返します。
- `input` が `string` 型の場合、そのまま返します。
- `input` が `number` または `boolean` 型の場合、`toString` メソッドを使って `string` 型に変換して返します。

#### 回答

```typescript
function toText(input: string | number | boolean): string {
  if (typeof input === 'string') {
    return input;
  } else {
    return input.toString();
  }
}

console.log(toText('テキスト')); // 'テキスト'
console.log(toText(0));          // '0'
console.log(toText(false));      // 'false'
```

### 解説

`toText` 関数は、与えられた `input` を `string` 型に変換します。`typeof` 演算子を使って `input` の型を判定し、それに応じて変換処理を行います。

### 1-2: Union 型の処理と使用例

次の条件に従って `start` 関数を作成し、使用例を示してください。

- `start` 関数は、`Swallow` 型または `Penguin` 型の `bird` を引数として受け取ります。
- `Swallow` 型は `fly` メソッドを持ち、`Penguin` 型は `swim` メソッドを持ちます。
- `bird` が `swim` メソッドを持つ場合、そのメソッドを呼び出して結果を返します。
- `bird` が `swim` メソッドを持たない場合、`fly` メソッドを呼び出して結果を返します。

#### 回答

```typescript
type Swallow = { fly: () => number };
type Penguin = { swim: () => number };

function start(bird: Swallow | Penguin) {
  if ('swim' in bird) {
    return bird.swim();
  }

  return bird.fly();
}

console.log(start({ fly: () => 10 })); // 10
console.log(start({ swim: () => 20 })); // 20
```

### 解説

`start` 関数は、`bird` が `swim` メソッドを持つかどうかを判定するために `in` 演算子を使用します。それに基づいて、`swim` または `fly` メソッドを呼び出します。

### 1-3: 型ガードを使った printAll 関数の定義と使用例

次の条件に従って `printAll` 関数を作成し、使用例を示してください。

- `printAll` 関数は、`number` 型の配列または `string` 型の `value` を引数として受け取ります。
- `value` が `number` 型の配列の場合、その要素をすべてコンソールに出力します。
- `value` が `string` 型の場合、その値をコンソールに出力します。

#### 回答

```typescript
function printAll(value: number[] | string) {
  if (isNumberArray(value)) {
    for (const num of value) {
      console.log(num);
    }
  } else {
    console.log(value);
  }
}

function isNumberArray(arr: unknown): arr is number[] {
  return Array.isArray(arr) && arr.length > 0 && typeof arr[0] === 'number';
}

printAll('文字列');     // '文字列'
printAll([7, 5, 3]);   // 7, 5, 3
```

### 解説

`printAll` 関数は、与えられた `value` が `number` 型の配列か `string` 型かを判定し、それに応じて異なる処理を行います。`isNumberArray` 型ガード関数を使って、`value` が `number` 型の配列かどうかを判定します。

### 例

```typescript
console.log(toText('テキスト')); // 'テキスト'
console.log(toText(0));          // '0'
console.log(toText(false));      // 'false'

console.log(start({ fly: () => 10 })); // 10
console.log(start({ swim: () => 20 })); // 20

printAll('文字列');     // '文字列'
printAll([7, 5, 3]);   // 7, 5, 3
```

これにより、複数の型を受け取る関数の実装と、それぞれの型に応じた適切な処理の方法を示しています。

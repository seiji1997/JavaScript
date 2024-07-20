
# 回答解説

## 事前準備

まず、TypeScriptの設定ファイル `tsconfig.json` を作成します。このファイルには、コンパイラのオプションを設定します。

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "outDir": "./dist"
  }
}
```

## 問題1

### 1-1: move 関数

次の条件に従って `move` 関数を作成してください。

- 関数名: `move`
- 引数:
  - `first`: `{ x: number; y: number }`
  - `second`: `{ x: number; y: number }`
- 戻り値: `first` と `second` の `x` と `y` を加算した結果を持つオブジェクト `{ x: number; y: number }`

例:

```typescript
const point1 = { x: 1, y: 2 };
const point2 = { x: 3, y: 4 };
const result = move(point1, point2);
// result は { x: 4, y: 6 }
```

#### 回答

```typescript
function move(
  first: { x: number; y: number },
  second: { x: number; y: number }
): { x: number; y: number } {
  return { x: first.x + second.x, y: first.y + second.y };
}
```

### 解説

この関数は、2つのポイントオブジェクトを受け取り、それらの `x` と `y` の値を加算して新しいポイントオブジェクトを返します。

### 1-2: concat 関数

次の条件に従って `concat` 関数を作成してください。

- 関数名: `concat`
- 引数:
  - `prefix`: `string`
  - `body`: `string`
- 戻り値: `prefix` が空でない場合は `prefix` と `body` を連結した文字列を返し、空の場合は `body` を返す

例:

```typescript
const result1 = concat("Hello, ", "World");
// result1 は "Hello, World"

const result2 = concat("", "World");
// result2 は "World"
```

#### 回答

```typescript
function concat(prefix: string, body: string): string {
  if (prefix.length > 0) {
    return prefix + body;
  }
  return body;
}
```

### 解説

この関数は、`prefix` が空でない場合に `prefix` と `body` を連結し、空の場合には `body` をそのまま返します。

### 1-3: merge 関数

次の条件に従って `merge` 関数を作成してください。

- 関数名: `merge`
- 引数:
  - `table`: `string[][]`
  - `x`: `number`
  - `y`: `number`
  - `label`: `string`
- 処理: `table` の `x` 行 `y` 列の要素を `label` に置き換える

例:

```typescript
const table = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];
merge(table, 1, 1, "z");
// table は [
//   ["a", "b", "c"],
//   ["d", "z", "f"],
//   ["g", "h", "i"]
// ]
```

#### 回答

```typescript
function merge(table: string[][], x: number, y: number, label: string): void {
  table[x][y] = label;
}
```

### 解説

この関数は、2次元配列 `table` の指定された位置に `label` を設定します。指定された位置の要素を新しい値に置き換えるため、簡単な代入操作を行っています。


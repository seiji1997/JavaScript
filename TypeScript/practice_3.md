
# 回答解説

## 問題3

### 1-1: StatusCode 型の定義

次の条件に従って `StatusCode` 型を作成してください。

- `StatusCode` は次のいずれかの値をとるリテラル型です。
  - `200`
  - `404`
  - `500`

#### 回答

```typescript
type StatusCode = 200 | 404 | 500;
```

### 解説

`StatusCode` 型は、HTTPステータスコードの特定の値をリテラル型として定義します。これにより、指定された3つのステータスコードのいずれかのみを許可します。

### 1-2: StatusMessage 型の定義

次の条件に従って `StatusMessage` 型を作成してください。

- `StatusMessage` は次のいずれかの値をとるリテラル型です。
  - `'OK'`
  - `'Not Found'`
  - `'Internal Server Error'`

#### 回答

```typescript
type StatusMessage = 'OK' | 'Not Found' | 'Internal Server Error';
```

### 解説

`StatusMessage` 型は、HTTPステータスメッセージの特定の値をリテラル型として定義します。これにより、指定された3つのメッセージのいずれかのみを許可します。

### 1-3: Status 型の定義と使用例

次の条件に従って `Status` 型を作成し、使用例を示してください。

- `Status` は、`StatusCode` と `StatusMessage` のペアを表すタプル型です。
- `Status` 型の例として、次の3つの定数を定義し、それらをコンソールに出力します。
  - `ok`: `[200, 'OK']`
  - `notFound`: `[404, 'Not Found']`
  - `error`: `[500, 'Internal Server Error']`

#### 回答

```typescript
type Status = [StatusCode, StatusMessage];

const ok: Status = [200, 'OK'];
const notFound: Status = [404, 'Not Found'];
const error: Status = [500, 'Internal Server Error'];

console.log(ok);
console.log(notFound);
console.log(error);
```

### 解説

`Status` 型は、`StatusCode` と `StatusMessage` のペアをタプルとして定義します。これにより、HTTPステータスのコードとメッセージを組み合わせた値を表現できます。

- `ok`, `notFound`, `error` の各定数は、それぞれ `Status` 型に一致するタプルを持ちます。
- `console.log` によって、これらの値が正しく定義され、出力されることを確認します。

### 例

```typescript
console.log(ok);       // [200, 'OK']
console.log(notFound); // [404, 'Not Found']
console.log(error);    // [500, 'Internal Server Error']
```

これにより、`Status` 型の使用方法と、その値が正しく定義されていることを示しています。

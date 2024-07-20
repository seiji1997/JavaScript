
# 回答解説

## 問題4

### 1-1: Point2D 型の定義と使用例

次の条件に従って `Point2D` 型を作成し、使用例を示してください。

- `Point2D` は次のプロパティを持つオブジェクト型です。
  - `x`: `number`
  - `y`: `number`

#### 回答

```typescript
type Point2D = {
  x: number;
  y: number;
};

const twoD: Point2D = { x: 8, y: 6 };
console.log(twoD);
```

### 解説

`Point2D` 型は、2次元のポイントを表すオブジェクト型です。`x` と `y` の2つの数値プロパティを持ちます。

### 1-2: Point3D 型の定義と使用例

次の条件に従って `Point3D` 型を作成し、使用例を示してください。

- `Point3D` は `Point2D` を継承し、さらに次のプロパティを持つオブジェクト型です。
  - `z`: `number`

#### 回答

```typescript
type Point3D = Point2D & {
  z: number;
};

const threeD: Point3D = {
  x: 2,
  y: 3,
  z: 5,
};

console.log(threeD);
```

### 解説

`Point3D` 型は、`Point2D` を継承し、さらに `z` プロパティを追加したオブジェクト型です。これにより、3次元のポイントを表すことができます。

### 1-3: JSON からの Point3D オブジェクトの生成

次の条件に従って JSON 文字列を `Point3D` 型のオブジェクトにパースし、使用例を示してください。

- JSON 文字列を `Point3D` 型のオブジェクトにパースします。
- パースしたオブジェクトの各プロパティの値をコンソールに出力します。

#### 回答

```typescript
const fromJSON: Point3D = JSON.parse('{ "x": 12, "y": 10, "z": 8 }');

console.log(`x = ${fromJSON.x}`);
console.log(`y = ${fromJSON.y}`);
console.log(`z = ${fromJSON.z}`);
```

### 解説

JSON 文字列を `JSON.parse` メソッドでパースし、`Point3D` 型のオブジェクトを生成します。その後、各プロパティの値をコンソールに出力します。

### 例

```typescript
const fromJSON: Point3D = JSON.parse('{ "x": 12, "y": 10, "z": 8 }');

console.log(`x = ${fromJSON.x}`); // x = 12
console.log(`y = ${fromJSON.y}`); // y = 10
console.log(`z = ${fromJSON.z}`); // z = 8
```

これにより、JSON 文字列からオブジェクトを生成し、その値を確認する方法を示しています。

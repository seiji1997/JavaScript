
# 回答解説

## 問題5

### 1-1: Figure インターフェースの定義

次の条件に従って `Figure` インターフェースを作成してください。

- `Figure` インターフェースは、`area` メソッドを持ち、戻り値の型は `number` です。

#### 回答

```typescript
interface Figure {
  area(): number;
}
```

### 解説

`Figure` インターフェースは、図形の面積を計算するための `area` メソッドを定義します。このメソッドは戻り値の型として `number` を返します。

### 1-2: Rectangle クラスの定義と使用例

次の条件に従って `Rectangle` クラスを作成し、使用例を示してください。

- `Rectangle` クラスは次のプロパティを持ちます。
  - `height`: `number`
  - `width`: `number`
- コンストラクタは `height` と `width` を引数として受け取り、これらのプロパティを初期化します。

#### 回答

```typescript
class Rectangle {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
}

const rectangleObj = new Rectangle(4, 7);
console.log(rectangleObj);
```

### 解説

`Rectangle` クラスは、高さと幅を持つ長方形を表します。コンストラクタはこれらのプロパティを初期化します。`rectangleObj` インスタンスを作成し、コンソールに出力します。

### 1-3: Figure インターフェースを実装した Rectangle クラス

次の条件に従って `Figure` インターフェースを実装した `Rectangle` クラスを作成し、使用例を示してください。

- `Rectangle` クラスは `Figure` インターフェースを実装します。
- `area` メソッドを実装し、長方形の面積を計算して返します。

#### 回答

```typescript
class Rectangle implements Figure {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  area(): number {
    return this.height * this.width;
  }
}

const rectangle = new Rectangle(5, 3);
console.log(rectangle.area());
```

### 解説

`Rectangle` クラスは `Figure` インターフェースを実装し、`area` メソッドを定義して長方形の面積を計算します。`rectangle` インスタンスを作成し、その面積をコンソールに出力します。

### 1-4: Square クラスの定義と使用例

次の条件に従って `Square` クラスを作成し、使用例を示してください。

- `Square` クラスは `Rectangle` クラスを継承します。
- コンストラクタは `length` を引数として受け取り、`Rectangle` のコンストラクタを呼び出して正方形を初期化します。

#### 回答

```typescript
class Square extends Rectangle {
  length: number;

  constructor(length: number) {
    super(length, length);
    this.length = length;
  }
}

const square = new Square(5);
console.log(square.area());
```

### 解説

`Square` クラスは `Rectangle` クラスを継承し、正方形を表します。コンストラクタで `length` を受け取り、`Rectangle` のコンストラクタを呼び出して正方形を初期化します。`square` インスタンスを作成し、その面積をコンソールに出力します。

### 例

```typescript
const rectangleObj = new Rectangle(4, 7);
console.log(rectangleObj); // Rectangle { height: 4, width: 7 }

const rectangle = new Rectangle(5, 3);
console.log(rectangle.area()); // 15

const square = new Square(5);
console.log(square.area()); // 25
```

これにより、`Rectangle` クラスおよび `Square` クラスの使用方法と、それぞれの面積を計算する方法を示しています。

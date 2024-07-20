**問題 36**

次の特徴を持つ車オブジェクトを定義してください。

- 下記プロパティを持つ
    - 車名
    - 速度（km/h）
- 下記メソッドを持つ
    - アクセルを踏む
        - 速度を 10km/h 増やす
    - ブレーキを踏む
        - 速度を 10km/h 減らす

メソッドを実行して、出力が期待どおりが確認してください。

1. アクセルを踏む（メソッド呼び出し）
2. アクセルを踏む
3. ブレーキを踏む
4. 現在の速度をコンソールに出力する
    - 10km/h

### 1-1 シンプルな実装
```js
let car = {
  name: '車名',
  speed: 0,
  accelerate: function() {this.speed += 10;},
  brake: function() {this.speed -= 10;}
};

car.accelerate(); 
car.accelerate(); 
car.brake();   
console.log('現在の速度:', car.speed, 'km/h'); 
```

###　1-2　　メソッド化する！
1-1 と同じメソッドを持つ、別の車オブジェクトを増やしたいと考えています。車プロトタイプと車コンストラクタを作成してください。
コンストラクタから、新たにオブジェクトを作成してメソッドの実行と出力の確認を行ってください。
```js
function Car(name) {
  this.name = name;
  this.speed = 0;
}

Car.prototype.accelerate = function() {this.speed += 10;};
Car.prototype.brake = function() {this.speed -= 10;};

let car1 = new Car('車1');

car1.accelerate(); 
car1.accelerate(); 
car1.brake();   
console.log('現在の速度:', car1.speed, 'km/h'); 

```

### 1-3　　クラス化する！

1-2 で作成したコンストラクタを、クラス構文で記述してください。
クラスから、新たにオブジェクトを作成してメソッドの実行と出力の確認を行ってください。
```js
class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  accelerate() {this.speed += 10;}
  brake() {this.speed -= 10;}
}

let car2 = new Car('車2');

car2.accelerate(); 
car2.accelerate(); 
car2.brake();   
console.log('現在の速度:', car2.speed, 'km/h');
```

### 1-4　　クラスの継承と機能追加！

1-3 で作成したクラスのサブクラスとして、以下の特徴を持つガソリン車を作成してください。アクセルを踏むメソッドはオーバーライドしてください。

- 下記プロパティを持つ
    - ガソリン残量
- 下記メソッドを持つ
    - アクセルを踏む
        - 速度を 10 増やす
        - ガソリンを 10 減らす
    - 給油する
        - 受け取ったガソリン量をガソリン残量に加える

サブクラスから、新たにオブジェクトを作成してメソッドの実行と出力の確認を行ってください。

```js
// クラス構文を使用してガソリン車のサブクラスを定義し、メソッドをオーバーライドします。
// 車クラスを定義（前述のコードを再利用）
class Car {
  constructor(name) {
    this.name = name;
    this.speed = 0; 
  }
  accelerate() {this.speed += 10;}
  brake() {this.speed -= 10;}
}

class GasolineCar extends Car {
  constructor(name, fuel) {
    super(name); 
    this.fuel = fuel;
  }
  accelerate() {
    if (this.fuel > 0) {this.speed += 10; this.fuel -= 10;} 
    else {console.error('ガソリンが不足しています');}
  }
  refuel(amount) {this.fuel += amount;}
}

let gasCar = new GasolineCar('ガソリン車', 50);

gasCar.accelerate(); 
gasCar.accelerate(); 
gasCar.brake();   
console.log('現在の速度:', gasCar.speed, 'km/h');
console.log('残りのガソリン量:', gasCar.fuel); 
gasCar.refuel(20);
console.log('給油後のガソリン量:', gasCar.fuel); 
```
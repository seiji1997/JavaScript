//クラスの定義
class Restaurant {
  constructor(menue, price, special_menue, special_price) {
    this.menue = menue;
    this.price = price;
    this.special_menue = special_menue;
    this.special_price = special_price;
  }

  // infoメソッド
  greet() {
    console.log("本日のおすすめ");
  }
  greet2() {
    console.log("季節のおすすめ");
  }
  info(){
    console.log(`${this.menue}`);
    console.log(`${this.price}`);
  }
  info2(){
    console.log(`${this.special_menue}`);
    console.log(`${this.special_price}`);
  }
}

//インスタンス
const restaurant = new Restaurant("pasta", "¥1500", "pizza", "¥2000");

// 出力
restaurant.greet();
restaurant.info();
console.log("######これはデバッグです。ここまで処理が進んでます。######")
restaurant.greet2();
console.log("######これはデバッグ2です。ここまで処理が進んでます。######")
restaurant.info();
console.log("######これはデバッグ3です。ここまで処理が進んでます。######")

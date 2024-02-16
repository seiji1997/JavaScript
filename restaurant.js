//Class Definition
class Restaurant {
  constructor(menue, price, special_menue, special_price) {
    this.menue = menue;
    this.price = price;
    this.special_menue = special_menue;
    this.special_price = special_price;
  }

  // info method
  greet() {
    console.log("Today's Recommendation");
  }
  greet2() {
    console.log("Seasonal Recommendations");
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

//instance
const restaurant = new Restaurant("pasta", "¥1500", "pizza", "¥2000");

// output
restaurant.greet();
restaurant.info();
console.log("######This is debugging. The process has progressed to this point.######")
restaurant.greet2();
console.log("######This is debugging2. The process has progressed to this point.######")
restaurant.info();
console.log("######This is debugging3. The process has progressed to this point.######")


// ---------------------------------------------

const names = [
  {firstName: "Matt", lastName: "Bomer"},
];

// Create a new array for the constant names and assign it to the constant fullNames
const fullNames = names.map((name) => {
  return name.firstName + " " + name.lastName;
});

class Product{
  constructor(name, menue, price){
      //プロパティの初期化
      this.name = name;
      this.menue = menue;
      this.price = price;
  }

  //各インスタンスから参照されるメソッドを定義
  hi(){
      console.log("welcome to our restaurant!!!!");
      console.log(`Mr. ${fullNames}, we have been waiting for you.`);
  }

  info(){
  console.log(`${this.name} recommendation.`);
  console.log(`　◼　${this.menue} is ${this.price} backs.`);
  }

  end(){
    console.log("Taste it!!!!!");
  }
}
//以下、インスタンスオブジェクトの生成
const product1 = new Product("Today's", "pasta", 15);
const product2 = new Product("Seasonal", "pizza", 20);
const product3 = new Product("Chef's", "gratin", 10);

product1.hi();
product1.info();
product2.info();
product3.info();
product1.end();
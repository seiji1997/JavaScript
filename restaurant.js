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

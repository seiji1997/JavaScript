class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }

  info() {
    this.greet();
    console.log(`It's ${this.name}.`);
    console.log(`${this.age} years old.`);
  }
}

export default Animal;
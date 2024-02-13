class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("Hi");
  }
  
  info() {
    this.greet();
    console.log(`I am${this.name}.`);
    console.log(`${this.age}years old.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
  
  info() {
    this.greet();
    console.log(`I am ${this.name}.`);
    console.log(`dog type is ${this.breed}.`);
    
    console.log(`${this.age} years old.`);
    const humanAge = this.getHumanAge();
    console.log(`${humanAge} years old in human years.`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("Reo", 4, "TheDog");
dog.info();


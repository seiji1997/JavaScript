import chalk from "chalk";
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    const humanAge = this.getHumanAge();
    this.greet();
    console.log(chalk.yellow(`It's ${this.name}.`));
    console.log(chalk.bgCyan(`The breed is ${this.breed}.`));
    console.log(`${this.age} years old.`);
    console.log(`${humanAge} years old in human age.`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;
import readlineSync from "readline-sync";

import Dog from "../class/dog";

const dog1 = new Dog("Reo", 4, "TheDog");
const name = readlineSync.question("Please enter your name: ");
const age = readlineSync.questionInt("Please enter your age: ");
const breed = readlineSync.question("Please enter the breed of dog: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
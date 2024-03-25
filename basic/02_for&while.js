// Define variable number
let number = 1;

// Create while statement
while (number <= 100) {
  console.log(number);
  number += 1;
}

//  -----------------------------------------------------
// for statement
for (let number = 1; number <= 100; number += 1) {
  
  // When number is a multiple of 3, it outputs "a multiple of 3. Otherwise, the number is output
  if (number % 3 === 0) {
    console.log("Multiples of 3.");
  }
  else {
    console.log(number);
  }
}


//  -----------------------------------------------------
// Assigns an array to the constant animals
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];
console.log(animals);
console.log(animals[0]);

// Update the third element of the array animals to "rabbit" and
animals[2] = "rabbit";
console.log(animals[2]);
console.log(animals.length);

// Rewrite conditional expression using length
for (let i = 0; i < animals.length; i ++) {
  console.log(animals[i]);
}

//  -----------------------------------------------------
// Define constant character and assign object
const character = {name: "Hulk", age: 14};
console.log(character);
console.log(character.name);

// Update character's age value to "20
character.age = 20;
console.log(character);


//  -----------------------------------------------------
const characters2 = [
  {name: "Hulk", age: 14},
  {name: "Loki", age: 100},
  {name: "IronMan", age: 5},
  {name: "captainAmerica"}
];

for (let i = 0; i < characters2.length; i++) {
  console.log("--------------------");
  
  const character = characters2[i];
  console.log(`I am ${character.name}.`);
  console.log(`${character.age}years old.`);
}

for (let i = 0; i < characters2.length; i++) {
  console.log("--------------------");
  
  const character = characters2[i];
  console.log(`I am ${character.name}.`);
  
  if (character.age === undefined) {
    console.log("Age is a secret...");
  } else {
    console.log(`${character.age}years old.`);
  } 
}


//  -----------------------------------------------------

const cafe = {
  name: "The Avengers cafe",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  menus: ["coffee", "black tea", "Chocolate Cake"]
};

console.log(`shop name: ${cafe.name}`);
console.log(`business hours: ${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("recommended menus");

for (let i = 0; i < cafe.menus.length; i ++) {
  console.log(cafe.menus[i]);
}


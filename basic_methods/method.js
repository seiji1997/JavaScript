// push method
const list_characters = ["Hulk", "IronMan", "Loki", "captainAmerica"];

console.log(list_characters);
list_characters.push("Thor");
console.log(list_characters);

// forEach method: Output all contents of the array characters
list_characters.forEach((character) => {
  console.log(character);
});


// -----------------------------------------------
// find method for number
const skip_numbers = [1, 3, 5, 7, 9];

// Find multiples of 3 from the array numbers and assign them to the constant foundNumber
const foundNumber = skip_numbers.find((number) => {
  return number % 3 === 0 ;
});

console.log(foundNumber);

// find method for character
const dic_characters = [
  {id: 1, name: "Hulk", age: 6},
  {id: 2, name: "IronMan", age: 2},
  {id: 3, name: "Loki", age: 100},
  {id: 4, name: "captainAmerica", age: 21}
];

// Finds objects with id 3 from the constant characters and assigns them to the constant foundCharacter
const foundCharacter = dic_characters.find((character) => {
  return character.id === 3;
});

console.log(foundCharacter);


// -----------------------------------------------
// filter method for number
const nomal_numbers = [1, 2, 3, 4];

// Take an even number from numbers and assign it to the constant evenNumbers
const evenNumbers = nomal_numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// filter method for character
const dic_characters2 = [
  {id: 1, name:"Hulk", age: 14},
  {id: 2, name:"IronMan", age: 5},
  {id: 3, name:"Loki", age: 100}
];

// Take the characters under 20 from characters and assign them to the constant underTwenty.
const underTwenty = dic_characters2.filter((character) => {
  return character.age < 20;
});

console.log(underTwenty);


// -----------------------------------------------
// map method for number
const numbers = [1, 2, 3, 4];

// Create an array for the constant numbers and assign it to the constant doubledNumbers
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

// map method for character
const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Create a new array for the constant names and assign it to the constant fullNames
const fullNames = names.map((name) => {
  return name.firstName + name.lastName;
});

console.log(fullNames);

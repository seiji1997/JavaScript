const greet = function() {
  console.log("Hi!");
  console.log("Let's study the functions!");
};

greet();

// --------------------------------------------------
// Substitute the Arrow function for the constant greet
const greetallow = () => {
  console.log("Hi!");
}
greetallow();


// --------------------------------------------------
// Add number1 and number2 to function arguments
const add = (number1, number2) => {
  console.log(number1 + number2);
};
add(5, 7);

// --------------------------------------------------
const check = (number) => {
  // Returns whether number is a multiple of 3 or not
  return number % 3 === 0;
};

if (check(123)) {
  console.log("Multiples of 3.");
} else {
  console.log("Not in multiples of 3");
}


// --------------------------------------------------
const name = "Loki";

const introduce = () => {
  const name = "Hulk";
  console.log(name);
};
introduce();

console.log(name);

// --------------------------------------------------
// Define the toMinutes function
const toMinutes = (hour, minute) => {
  return hour * 60 + minute;
}

// Assigns the return value of the toMinutes function to the constant result
const result = toMinutes(3, 20);

// Output the result converted into minutes so that it becomes "◯◯◯ minutes".
console.log(`${result} minutes`);



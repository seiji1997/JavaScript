const password = "Hulk2024";

if (password === "Hulk2024") {
  console.log("Successfully logged in.");
}
if (password !== "Hulk2024") {
  console.log("Password is incorrect.");
}

//  -----------------------------------------------------

const age = 17;

if (age >= 20) {
  console.log("I am over 20 years old.");
} else if (age >= 10) {
  console.log("I am under 20, but over 10.");
} else if (age >= 5 && age <10) {
  console.log("I am under 10, but over 5.");
} else {
  console.log("I am under 4 years old.");
}

//  -----------------------------------------------------

const n = 4;

switch (n) {
  case 1:
    console.log("It's a big lucky day.");
    break;
  case 2:
    console.log("Good Luck.");
    break;
  case 3:
    console.log("A little good luck.");
    break;
  default:
    console.log("It's bad.");
    break;
}



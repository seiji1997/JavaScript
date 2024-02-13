const printWanko = () => {
  console.log("Hulk");
};

const call = (callback) => {
  console.log("Callback function is called.");
  callback();
};

const intro = (callback) => {
  callback("Hulk", 14);
};


// output
call(printWanko);

call(() => {
  console.log("Loki");
});

intro((name, age) => {
  console.log(`${name} is ${age} years old.`);
});


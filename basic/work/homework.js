// 課題

// クク(9*9)の表を綺麗にコンソールに出力
"use strict";


function printKuku(n) {

  if (!n > 20) {         
    console.log("1 ~ 20 までの数字を指定してください");
    return;
  }

  for (let i = 1; i <= n; i++) {
    
    let row = "";
    for (let j = 1; j <= n; j++) {
      // 最も左の列(j)以外は間隔をあける
      if (j > 1) {
        row += " ";
      }
      // 各列で最大桁数に揃えて左に空白を入れる
      let padding = (j * n).toString().length;
      row += (i * j).toString().padStart(padding, " ");
    }
    console.log(row);
  }
}

printKuku(15);

// ------------------------------------------------
// 条件分岐を使って時間の計算が: (exp: 59秒の1秒後は繰り上がりなど)
function calculateTime(hours, minutes, seconds) {
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  let newHours = Math.floor(totalSeconds / 3600);
  let newMinutes = Math.floor((totalSeconds % 3600) / 60);
  let newSeconds = totalSeconds % 60;

  return `${newHours > 0 ? newHours + " hour" + (newHours > 1 ? "s" : "") + " " : ""}${newMinutes > 0 ? newMinutes + " minute" + (newMinutes > 1 ? "s" : "") + " " : ""}${newSeconds} second${newSeconds > 1 ? "s" : ""}`;
}

console.log(calculateTime(2, 59, 20)); // Output: 59 minutes 20 seconds
console.log(calculateTime(0, 55, 20)); // Output: 39 minutes 20 seconds

// ------------------------------------------------
// 条件分岐を使って、西暦で指定された年が何世紀か計算
function calculateCenturies(year) {
  let centuries = Math.ceil(year / 100);
  let suffix = centuries > 1 ? "th" : "st";
  // let suffix;
  // if (centuries > 1) {
  //   suffix = "th";
  // } else {
  //   suffix = "st";
  // }
  return `${centuries}${suffix} century`;
}

console.log(calculateCenturies(2024)); // Output: 21st century
console.log(calculateCenturies(1999)); // Output: 20th century
console.log(calculateCenturies(1776)); // Output: 18th century
console.log(calculateCenturies(1066)); // Output: 11th century

// ------------------------------------------------
// 条件分岐を使ってうるう年の計算ができる
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return "そうです、わだすがうるう年です";
  } else {
      return "残念、、うるう年ではありません";
  }
}

console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1999)); // Output: false
console.log(isLeapYear(2000)); // Output: true
console.log(isLeapYear(1900)); // Output: false


// ------------------------------------------------
// 配列の要素の出現回数をカウントし、最も出現回数が多いものを特定できる
function countOccurrences(array) {
  let counts = {};
  let maxCount = 0;
  let mostCommonElement;

  for (let element of array) {
      if (counts[element]) {
          counts[element]++;
      } else {
          counts[element] = 1;
      }

      if (counts[element] > maxCount) {
          maxCount = counts[element];
          mostCommonElement = element;
      }
  }

  return {
      counts: counts,
      mostCommonElement: mostCommonElement,
      maxCount: maxCount
  };
}

let array = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 1, 2, 1];
let result = countOccurrences(array);

console.log(result.counts); // Output: { '1': 5, '2': 4, '3': 3, '4': 2 }
console.log("最も出現回数が多いものは" + result.mostCommonElement + "、出現回数は" + result.maxCount + "です"); // Output: 1


// ------------------------------------------------
// 異なる3つの数値からなる配列を生成(3つの数値はランダムに生成) - 3つの数値を並べて3桁の数値を6パターンで出力できる

// Generate an array of 3 different random numbers
let numbers = [];
while (numbers.length < 3) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
    }
}

// Output 6 patterns of 3-digit numbers with 3 numbers in a row
for (let i = 0; i < 6; i++) {
    console.log(`${numbers[0]}${numbers[1]}${numbers[2]}`);
    console.log(`${numbers[0]}${numbers[2]}${numbers[1]}`);
    console.log(`${numbers[1]}${numbers[0]}${numbers[2]}`);
    console.log(`${numbers[1]}${numbers[2]}${numbers[0]}`);
    console.log(`${numbers[2]}${numbers[0]}${numbers[1]}`);
    console.log(`${numbers[2]}${numbers[1]}${numbers[0]}`);
}

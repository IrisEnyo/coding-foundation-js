/* 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20 */

const size = 25;
let result = "";

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);

//
//
// 02) oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

//
//
// 03) oldYoung function

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "invalid parameter";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));

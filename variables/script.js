/*01) Spot the errors and fix them

const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true
*/

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return (let = userName.length);
}

console.log(getUserNameLength(userName) > 4);

//
//
// 02) isString function

let isString = function (data) {
  return typeof data === "string";
};

console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));

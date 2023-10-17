// 01) Begrüßungsfunktion
function welcomeMsg(name) {
  return "Welcome " + name + "!";
}
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Mark"));

// 02) Bruttopreisfunktion
function calcGrossPrice(integer, float) {
  return integer + (integer / 1) * float;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// 03) Positive Funktion hinzufügen
function addPositive(x, y) {
  return x + y;
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

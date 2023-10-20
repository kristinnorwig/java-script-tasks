//Aufgabe 1

function welcomeMsg(Name) {
  return "Welcome " + Name;
}

console.log(welcomeMsg("Jane"));

//Aufgabe 2

function calcGrossPrice(netPrice, Tax) {
  return netPrice + netPrice * Tax;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

//Aufgabe 3

function addPositive(a, b) {
  return Math.abs(a) + Math.abs(b);
}

console.log(addPositive(2, 3));

console.log(addPositive(3, -5));

console.log(addPositive(-1, -8));

// Aufgabe 1 Spot the errors and fix them

/*const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true*/

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return (userName = name.length);
}

console.log(getUserNameLength(userName) > 4);

// Aufgabe 12 Implement a isString function

const isString = function (test) {
  return typeof test === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

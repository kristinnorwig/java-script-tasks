// Aufgabe 1 Implement a removeItem function
/* The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.*/

function removeItem(array, number) {
  let newArray = structuredClone(array);
  newArray.splice(number - 1, 1);
  return newArray;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result: ["Cat", "Lion"]

console.log(ainmals);
// result: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//Aufgabe 2 Implement a sumOfCharacters function.

/* The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.*/

function sumOfCharacters(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      // Typ-Abfrage
      count += array[index].length; // Alternativ: count = count + array[index].length
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result: 55

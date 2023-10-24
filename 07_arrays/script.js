// Aufgabe 1 Implement a removeItem function

// Parameter 1: Ein Array
// Parameter 2: eine Nummer
// bei 1 anfangen, nicht 0!
// Aufgabe: neues Array auf Basis des "alten" (Parameter 1) erstellen, indem der Inhalt der angegeben Stelle (Parameter 2) entfernt ist

function removeItem(array, number) {
  const newArray = structuredClone(array); //deep Copy!!! mit CONST!!!
  newArray.splice(number - 1, 1); // 1 Zahl = was löschen (also Startpunkt), 2 Zahl = wie viel, da Start bei 0 ein Schritt zurück (-1), um von zero-based zu non-zero-based "-1" rechnen!!!
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

//Aufgabe 2 Implement a sumOfCharacters function

// nur ein Parameter: Ein Array
// welcher Array-Eintrag ist ein String?
// zähle die Buchstaben der vorhandenen Strings
// die Funktion soll alle Buchstaben des jew. Arrays ausgeben

function sumOfCharacters(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      // Typ-Abfrage
      // INDEX!!!!
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

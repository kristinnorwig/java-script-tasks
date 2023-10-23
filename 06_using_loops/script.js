// Aufgabe 1 Implement the oddNumbers function

let firstNmbr;
let secondNmbr;

function oddNumbers(firstNmbr, secondNmbr) {
  if (firstNmbr < 0 || secondNmbr < 0) {
    return "negative numbers are not allowed";
  }
  von = Math.min(firstNmbr, secondNmbr); // Math.min = gibt den kleinsten Wert der input Parameter zurück
  bis = Math.max(firstNmbr, secondNmbr); // Math.max = gibt den größten Wert der input Parameter zurück
  let strng = ""; // = Deklaration und Definition eines Strings
  for (let i = von; i <= bis; i++) {
    if (i % 2 == 1) {
      strng = strng + i.toString() + ","; // Variable wird befüllt mit den ungeraden Zahlen als String .toString() und einem Komma zum Trennen der String-Zahlen, strng wird erneut angesprochen weil nicht immer wieder neu deklaiert werden soll und so nur die letzte immer wieder ausgegeben werden würde
    }
  }
  if (strng.length > 0) {
    strng = strng.substring(0, strng.length - 1); // .substring() returned einen Teil des gegebenen Strings = der String enthält alle String-Zahlen pluss Kommata und nimmt mit -1 dem letzten Character das Komma weg
  }
  return strng;
}

console.log(oddNumbers(0, 4));
// result: 1,3

console.log(oddNumbers(10, 33));
// result: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result: 9,11

// Aufgabe 1 Alternative 1

//Contract:
// two parameters: lower: number, upper: number
// lower > 0;
// upper > lower
// return:
// result: number[] - n in result -> n >= lower, n <= upper,
// result encoded as string, with numbers n separated by ','

function oddNumbers(lower, upper) {
  // 3, 5
  let result = "";
  if (lower % 2 === 0) {
    lower = lower + 1;
  }
  for (let n = lower; n <= upper; n += 2) {
    // 1, 2, 3
    // 1. consider odd numbers only

    // 2. add the odd number to the result string, comma seperated
    if (result === "") {
      // first iteration
      result = result + n;
    } else {
      result = result + "," + n;
    }
    // let's detect if we're at the begining of the string
  }
  return result;
}

console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));

//Aufgabe 1 Alternative 2

function oddNumbers(n1, n2) {
  let result = "";
  //prüfen, ob Zahl negativ, wenn nicht, dann fortfahren, wenn ja dann return
  if (n1 < 0 || n2 < 0) {
    return "negative numbers are not allowed";
  }

  for (let index = n1; index <= n2; index++) {
    //index zählt in der Schleife immer nach oben, ist dann also "aktuelle" Zahl
    if (index % 2 === 1) {
      // Alternativ: index % 2 !== 0
      if (result === "") {
        //Komma bei der ersten Zahl entfernen
        result = index;
      } else {
        result += "," + index;
      } // Alternativ: result = result + index
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));

console.log(oddNumbers(10, 33));

console.log(oddNumbers(9, 12));

// Aufgabe 2 Implement the charCount function

function charCount(word, char) {
  let count = 0;

  /* if (char.length > 1) {
    console.log("not allowed");
  } */

  if (char.length === 1) {
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }
}

console.log(charCount("hello", "l"));
// result: 2

console.log(charCount("mama", "m"));
// result: 2

console.log(charCount("Resümee", "e"));
// result: 3

// Aufgabe 2 Alternative 1
function charCount(word, character) {
  let count = 0; //null, weil es eine number ist und kein string wie bei Aufg. 1
  if (character.length !== 1) {
    // Alternativ zu !== geht auch >1
    return;
  }
  for (let index = 0; index < word.length; index++) {
    if (word[index].toUpperCase() === character.toUpperCase()) {
      //[] eckige Klammern fragen die Buchstaben in Variable "word" ab, .toUpperCase() ist egal ob Groß- und Kleinschreibung, "man macht alles groß"
      count++;
    } //Alternativ: count = count + 1
  }
  return count;
}

console.log(charCount("hello", "l"));

console.log(charCount("mama", "m"));

console.log(charCount("Resümee", "e"));

function zipStrings(strA, strB) {
  // neuen End-String mit leerer Zeichenkette definieren
  let result = "";

  // maximale Länge bestimmen
  let maxStrLength = Math.max(strA.length, strB.length);

  // Schleife so lang wie maxStrLength
  for (let index = 0; index < maxStrLength; index++) {
    // Zeichen beider Strings abwechselnd in den Result-String einfügen
    // Prüfen ob index kleiner ist als länge von strA, dann akt. Index einfügen
    if (index < strA.length) {
      result += strA[index];
      g;
    }

    //  Prüfen ob index kleiner ist als länge von strB, dann akt. Index einfügen
    if (index < strB.length) {
      result += strB[index];
    }
  }

  /* Schleife läuft so lange bis beide strings abgefragt wurden, 
  wenn ein String kürzer als der andere, werden die zeichen des 
  längeren einfach hintereinander eingefügt*/

  return result;
}

//

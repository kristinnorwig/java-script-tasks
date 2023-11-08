function extractClassName(sessionTitle) {
  // Monatsnamen den jew. Monats-Nummern in Objekt zuordnen
  const monthObj = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  // Titel aufteilen = Array mit einzelnen Wörtern entsteht
  const wordsArr = sessionTitle.split(" ");

  // jedes Wort im Array anschauen
  for (let i = 0; i < wordsArr.length; i++) {
    // Überprüfen ob Class in Titel zu finden ist und mind. zwei Wörter in Array
    if (wordsArr[i] === "Class" && i + 2 < wordsArr.length) {
      // Wenn ja: neue const mit Jahr (nächstes Wort nach Class = i+1)
      // und neue const mit Monatsname (Wort nach Class = i+2)
      const year = wordsArr[i + 1];
      const monthName = wordsArr[i + 2];

      // Überprüfen ob Monatsname in Monatsobjekt mit .hasOwnProperty und Jahreszahl-Länge kleinergleich 4
      if (monthObj.hasOwnProperty(monthName) && year.length <= 4) {
        // Wenn ja: neue const mit Monats-Nummer,
        // monthObj[monthName] = in monthObj nach monthName suchen
        const monthNmbr = monthObj[monthName];

        // und das Jahr mit Bindestrich und entsprechender Nummer returnen
        return year + "-" + monthNmbr;
      }
    }
  }

  // wenn alle Bedingungen nicht zutreffen: null zurückgeben
  return null;
}

function filterApiData(apiData, mandatoryKeys) {
  const result = [];

  for (let objects of apiData) {
    // Variable zur Abfrage definiert, Variable auf true gesetzt, damit in zweiter For-Schleife das hasKey auf false überprüft werden kann
    let hasKey = true;
    for (let key of mandatoryKeys) {
      // Ausrufezeichen vor Bedingung fragt ob Bedingung nicht zutrifft
      if (!objects.hasOwnProperty(key)) {
        hasKey = false;
      }
    }

    //
    if (hasKey) {
      result.push(objects);
    }
  }
  return result;
}

// apiData = Array mit Objekten, Objekte können versch. Keys haben
// mandatoryKeys = Array mit den Keys als String die auf jeden Fall in den Objekte von apiData
// Ergebnis soll Array mit Objekten sein die nur die Objekte haben die alle Keys von mandatoryKeys von erfüllen (wie Filter

// CREO 2 LISTE DI ELMENTI
const listSurname = ["Rossi", "Baggio", "Tartaglia", "Parolin", "Alberti"];
const listName = ["Mario", "Angela", "Stefano", "Gianmarco", "Thomas"];

// CREO UNA VARIABILE CHE MI VA A CREARE LE VARIE COMBINAZIONI
let surnameName;

// COMBINO LE 2 LISTE
for (i = 0; i < listSurname.length; i++) {
  surnameName = listName[0] + listSurname[i];
  console.log(surnameName);
  surnameName = listName[1] + listSurname[i];
  console.log(surnameName);
  surnameName = listName[2] + listSurname[i];
  console.log(surnameName);
  surnameName = listName[3] + listSurname[i];
  console.log(surnameName);
  surnameName = listName[4] + listSurname[i];
  console.log(surnameName);
}

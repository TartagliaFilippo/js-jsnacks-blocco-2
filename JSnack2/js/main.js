// CREO 2 LISTE DI ELMENTI
const listSurname = ["Rossi", "Baggio", "Tartaglia", "Parolin", "Alberti"];
const listName = ["Mario", "Angela", "Stefano", "Gianmarco", "Thomas"];

// LA MIA VARIABILE A SCHERMO
const nameSurname = document.getElementById("name-surname");

// CREO UNA VARIABILE CHE MI VA A CREARE LE VARIE COMBINAZIONI
let surnameName;

// COMBINO LE 2 LISTE
for (let i = 0; i < listSurname.length; i++) {
  for (let j = 0; j < listName.length; j++) {
    surnameName = listName[j] + listSurname[i];
    console.log(surnameName);

    nameSurname.innerHTML += surnameName + ` </br>`;
  }
  // surnameName = listName[0] + listSurname[i];
  // console.log(surnameName);
  // surnameName = listName[1] + listSurname[i];
  // console.log(surnameName);
  // surnameName = listName[2] + listSurname[i];
  // console.log(surnameName);
  // surnameName = listName[3] + listSurname[i];
  // console.log(surnameName);
  // surnameName = listName[4] + listSurname[i];
  // console.log(surnameName);
}

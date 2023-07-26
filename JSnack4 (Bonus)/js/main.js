// CREO 2 ARRAY CON ELEMENTI DIVERSI
const myArrSt = ["a", "b", "c", "d", "e"];
const myArrNd = ["f", "g", "h"];

// CREO UN ARRAY TEMPORANEO
let myArrTemporary;

// VARIABILE CHE DIFFERENZIA I 2 ARRAY
let arrDifference;

// SE IL PRIMO ARRAY E' PIU' CORTO DEL SECONDO
if (myArrSt.length < myArrNd.length) {
  // METTO PRIMO ARRAY DENTRO ARRAY CORTO
  myArrTemporary = myArrSt;
} else {
  // METTO SECONDO ARRAY DENTRO ARRAY CORTO
  myArrTemporary = myArrNd;
}

// DICHIARO LA VARIABILE DA AGGIUNGERE
if (myArrSt.length > myArrNd.length) {
  arrDifference = myArrSt.length - myArrNd.length;
} else {
  arrDifference = myArrNd.length - myArrSt.length;
}

// PER OGNI ELEMENTO DI DIFFERENZA
for (let i = 0; i < arrDifference; i++) {
  // CHIEDO ALL'UTENTE UN ELEMENTO
  const elementToAdd = prompt("aggiungi un elemento alla lista");
  // LO AGGIUNGO ALL'ARRAY CORTO
  myArrTemporary.push(elementToAdd);
}

console.table(myArrTemporary);

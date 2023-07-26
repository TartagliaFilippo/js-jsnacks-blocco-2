// LISTA DI VALORI
const values = [1, 2, 3, 4, 5, 6, 7, 8];
console.table(values);

const sumOfOdd = document.getElementById("sum-of-odd");

// CREO UNA VARIABILE SOMMA
let sumVar = 0;

// ISOLO I VALORI DISPARI
for (let i = 1; i < values.length; i += 2) {
  sumVar += values[i];
  console.log(sumVar);
}

sumOfOdd.innerHTML = "la somma dei valori con indice dispari è: " + sumVar;

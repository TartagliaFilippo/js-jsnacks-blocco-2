//  chiedo di scrivere un numero
const userNumber = prompt("scrivi un numero a tua scelta");
console.log(userNumber);

const evenNumber = document.getElementById("even-number");

//  se il numero è divisibile per 2
if (userNumber % 2 == 0) {
  //    scrivo quel numero
  evenNumber.innerHTML = userNumber;
} else {
  //    incremento quel numero di 1
  evenNumber.innerHTML = parseInt(userNumber) + 1;
}

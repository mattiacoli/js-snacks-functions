/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



/* 
  let iniziali = []
  for (let i = 0; i < names.length; i++) {
  const nome = names[i];
  inziali.push(nome[0])  
}
console.log(inziali);
 */

// Dichiara la funzione qui.

/* function arrDiIniziali(arr) {
  let inziali = [];

  for (let i = 0; i < arr.length; i++) {
    const nome = arr[i];
    inziali.push(nome[0])
  }
  return inziali
} */


// arrow function

const arrDiIniziali = arr =>{
  let inziali = [];

  for (let i = 0; i < arr.length; i++) {
    const nome = arr[i];
    inziali.push(nome[0])
  }
  return inziali
}


// Invoca la funzione qui e stampa il risultato in console


console.log(arrDiIniziali(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
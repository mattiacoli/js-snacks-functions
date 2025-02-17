/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

/* let nomiCheInizianoPer = []

for (let i = 0; i < names.length; i++) {
  const nome = names[i];

  if(nome.indexOf('A') === 0){
    nomiCheInizianoPer.push(nome)
  }
  
}
console.log(nomiCheInizianoPer); */

// Dichiara la funzione qui.

function arrNomiConIniziale(letter, arr) {
  let nomiCheInizianoPer = [];

  for (let i = 0; i < arr.length; i++) {
    const nome = arr[i];

    if (nome.indexOf(letter) === 0) {
      nomiCheInizianoPer.push(nome)
    }    
  }
  
  return nomiCheInizianoPer
}

// Invoca la funzione qui e stampa il risultato in console

const nomiConInizialeA = arrNomiConIniziale('A', names)
console.log(nomiConInizialeA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
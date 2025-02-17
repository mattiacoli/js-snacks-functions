/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';



// Dichiara la funzione qui.

function contaVocali(str) {

  str = str.toLowerCase()

  const vowels = 'aeiou'

  let vowelsCount = 0

  for (let i = 0; i < str.length; i++) {
    const letters = str[i];

    if (vowels.indexOf(letters) !== -1) {
      vowelsCount++
    }
  }

  return vowelsCount
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
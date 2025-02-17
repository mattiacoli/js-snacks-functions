/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

/* const date = new Date
const hour = date.getHours()

if(hour <= 13){
  console.log(`Buongiorno ${name}`);
  
} else if (hour <= 17){
  console.log(`Buon pomeriggio ${name}`)
} else if (hour > 17){
  console.log(`Buona sera ${name}`);
}
 */


// Dichiara la funzione qui.

function salutiOrari(nome) {
  const date = new Date
  const hour = date.getHours()

  if (hour <= 13) {
    return `Buongiorno ${nome}`;

  } else if (hour <= 17) {
    return `Buon pomeriggio ${nome}`

  } else if (hour > 17) {
    return `Buona sera ${nome}`;
  }

}

// Invoca la funzione qui e stampa il risultato in console

const saluta = salutiOrari(name)
console.log(saluta);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
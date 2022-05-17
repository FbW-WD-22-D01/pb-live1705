// REACP FUNKTIONEN

// zwei Arrays definieren
let meinArray= ['Klaus', 'Dieter','Helga', 'Gerda', 'Maik'];
let meineMonate =['Januar', 'Februar', 'März'];


// Funktion die einen zufälligen Wert aus einem Array auswählt
function meineZufallFunktion(array){
    let zufallZahl = Math.floor(Math.random() * array.length);
    let zufallName = array[zufallZahl];
    return zufallName
}

// Funktion die einen String groß schreibt
function capitalize(string){
    let name = string.toUpperCase();
    return name
}

//Funktion die einen Namen x mal hinterinander mit *** getrennt aufschreibt
function multiply(userName,x){
    let userNeu = ''
    for (let i = 0; i<x; i++) {
     userNeu += userName + '***';
    }
    return userNeu
}

// Wie würde ich das ohne Funktion schreiben: 
// let user = 'Dieter';
// let userNeu = ''
// for (let i = 0; i<4; i++) {
//   userNeu += user;
// }
// console.log(userNeu);



console.log(capitalize('Maik'));
console.log(meineZufallFunktion(meineMonate));

let ergebnis    = meineZufallFunktion(meinArray); 
ergebnis        = capitalize(ergebnis);

console.log(multiply(ergebnis,10));
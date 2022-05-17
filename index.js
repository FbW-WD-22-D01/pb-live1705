
// Function Statement - named function 
function sayHallo(user){
    console.log('Hallo', user)
}
sayHallo('Udo');


// function expression - anonyme Funktion 
 let hi = function(user){
     // console.log('Hi', user)
     return `Hi ${user}`
 };

 console.log(hi('Christoph'));


 // arrow function - eine Kurzschreibweise der anonymen Funktionen (ohne Schlüsselwort function, mit => )
let hello = (userName) => {
    return `hello ${userName}`
} 
console.log(hello('Mohsen'));


// Es geht noch kürzer (kein {} und kein return, Ausdruck muss in einer Zeile stehen(!))
let square = (zahl) => zahl*zahl;
console.log(square(5));


// Beispiel Funktion Großschreiben
let upper = (wort) => wort.toUpperCase();

console.log(upper('hallo'));
console.log(upper('anderes Wortgetüm'));

// Beispiel Funktion Umdrehen (lang)
let reverse = (wort) => {
    let ergebnis = wort.split('');
    ergebnis = ergebnis.reverse();
    ergebnis = ergebnis.join('');
    return ergebnis
};
console.log(reverse('Hallo'))

// Beispiel Funktion Umdrehen (kurz)
let reverseShort = (wort) => wort.split('').reverse().join('');
console.log(reverseShort('Wort'));


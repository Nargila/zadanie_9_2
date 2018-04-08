// Zadanie 9.2 Łączymy tablice

var femaleNames = ['Kasia', 'Asia', 'Basia', 'Magda'];
var maleNames = ['Piotrek', 'Marek', 'Artur', 'Daniel'];
var allNames = femaleNames.concat (maleNames);
var newName = 'Marian';


if (allNames.indexOf(newName) === -1) {

	allNames.push(newName);

}


console.log (allNames);
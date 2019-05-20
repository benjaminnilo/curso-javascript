'use strict'
//pruebas con let y var

//Prueba con ver
var numero = 40;
console.log(numero); // Numero 40

if (true) {
	var numero = 50;
	console.log(numero); // Numero 50
}

console.log(numero); // Numero 50

//Prueba con let

var text = "Curso JS benjamin nilo";
console.log(text);

if (true) {
	let text = "Curso laravel 5";
	console.log(text);
}

console.log(text);
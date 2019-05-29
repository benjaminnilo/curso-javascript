'use strict'

//Funciones anonimas

//Es una función que no tiene  nombre

/*
var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}
*/

function sumame (numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(7, 5,  dato  => {
	console.log("La suma es: ", dato);
},

dato =>  {
	console.log("La suma por dos es :", (dato*6));
});






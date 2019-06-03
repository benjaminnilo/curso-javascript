'use strict'

var numero = 12;
var texto = "Hola mundo soy una variable global";

function holaMundo(texto){
	var hola_mundo = "Texto dentro de funcion"
	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);
}

holaMundo(texto);

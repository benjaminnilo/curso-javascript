'use strict'

//Plantillas de textos 

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

//var texto = "Mi nombre es: "+nombre+" <br/> y mis apellidos son: "+ apellidos;

//plantillade javaScript mucho mas ordenado con comillas invertida
var texto = `
	<h1>Hola que tal </h1>
	<h2>Mi nombre es: ${nombre}</h2>
	<h3>Mis apellidos son : ${apellidos} </h3>
	`;
	
document.write(texto);
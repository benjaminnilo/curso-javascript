'use strict'

//Transformacion de textos

var numero = 444;
var texto1 = " Hola benjamin felipe ";
var texto2 = "holaMundoDos";

//convertir a string
var dato1 = numero.toString();

//Convertir a mayusculas
var	dato2 = texto1.toUpperCase();

//Convertir minusculas
var	dato3 = texto1.toLowerCase();


console.log(typeof texto1);
console.log(typeof numero);

console.log(dato1);
console.log(dato2);
console.log(dato3);

//Calcular longitud 
var nombre = "Hola";
console.log(nombre.length);

//Calcular longitud en Array
var nombre = "Hola";
	nombre = ["hola","como estas","chao"];

console.log("El array "+nombre+ " tiene un largo de: " + nombre.length);

//Concatenar

var textoTotal = texto1+"-"+texto2;
console.log(textoTotal);

//Concatenar algo que no existe
var textoTotal2 = texto1.concat(""+ "elementoInventado");
console.log(textoTotal2);

//buscar caracteres de un texto (PRIMERA COINCIDENCIA)
console.log(texto1.indexOf("felipe"));

//buscar caracteres de un texto (ULTIMA COINCIDENCIA)
console.log(texto1.lastIndexOf("felipe"));

//buscar caracteres de un texto (PRIMERA COINCIDENCIA)
console.log(texto1.search("felipe"));

//buscar devuelve ARRAY
console.log(texto1.match("felipe"));

//buscar por posición definida 
console.log(texto1.substr(0,4));

//buscar por letra
console.log(texto1.charAt(3));

//buscar si existe true or false (solo busca desde el comienzo)
console.log(texto1.startsWith("Hola"));

//buscar si existe true or false (solo busca desde el fin)
console.log(texto1.endsWith("felipe"));

//buscar si existe true or false (en todo el texto)
console.log(texto1.includes("benjamin"));

//reemplazar un texto
console.log(texto1.replace("benjamin", "carlos"));

//eliminar parte de un  texto por posición...
console.log(texto1.slice(3, 7));

//meter todo en un array
console.log(texto1.split());

//meter todo en un array separadas por espacio..
console.log(texto1.split(" "));

//eliminar espacios
console.log(texto1.trim(" "));
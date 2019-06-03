'use strict'

<<<<<<< HEAD
//Parametros REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){

console.log("Fruta 1: ", fruta1);
console.log("Fruta 2: ", fruta2);
console.log(resto_de_frutas);
}

listadoFrutas("Naranja","Manzana","Melon", "Sandia", "Pera","Coco");

var frutas = ["Naranja","Manzana"]

listadoFrutas(...frutas,"Naranja","Manzana","Melon", "Sandia", "Pera","Coco");
=======
// Parametros REST y SPREAD 

function listadoFrutas(fruta1, fruta2, ...RESTO){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(RESTO);
}


listadoFrutas("Maranja", "Manzana", "Sandia", "Pera", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Coco");
>>>>>>> e29e5a7b3371214588b1888fddc782c7abf9bf8f

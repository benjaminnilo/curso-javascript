'use strict'

// Parametros REST y SPREAD 

function listadoFrutas(fruta1, fruta2, ...RESTO){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(RESTO);
}


listadoFrutas("Maranja", "Manzana", "Sandia", "Pera", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Coco");
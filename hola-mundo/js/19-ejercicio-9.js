'use strict'

// Funciones
//Una funcion es una agrupacion reutilizable de un conjunto de instrucciones.

function porConsola(numero1,numero2){

	console.log("*****console*******");
	console.log("Suma: "+ (numero1+numero2));
	console.log("Resta: "+ (numero1-numero2));
	console.log("Multiplicación: "+ (numero1*numero2));
	console.log("División: "+ (numero1/numero2));
	console.log("********");
}

function porPantalla(numero1, numero2){

	document.write("*****Page******"+"<br/>");

	document.write("Suma: "+ (numero1+numero2)+"<br/>");
	document.write("Resta: "+ (numero1-numero2)+"<br/>");
	document.write("Multiplicación: "+ (numero1*numero2)+"<br/>");
	document.write("División: "+ (numero1/numero2)+"<br/>");

	document.write("********");
}

function calculadora(numero1,numero2,mostrar = false){

	if (mostrar==false) {
		porConsola(numero1,numero2);
	}else{
		porPantalla(numero1,numero2);
	}
	return true;
}

calculadora(5,4,true);
calculadora(2,5);
calculadora(54,4,true);
calculadora(6,4,true);
/*
for (var i = 1; i < 10; i++) {	
	console.log(i);
	calculadora(i,8);
}
*/

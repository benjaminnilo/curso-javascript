'use strict'

//Hacer una calculadora que que pida 2 numeros  con validación de numero. 
// que nos muestre en el cuerpo de la pagina en  una alerta y por la consola  el resultado de"
//sumar, restar multiplicar y dicidir esas 2 cifras. 

var numero1 = parseInt(prompt('Ingresa el primer numero',0));
var numero2 = parseInt(prompt('Ingresa el segundo numero',0));
var resultado;

while(numero1<0||numero2<0||isNaN(numero1)||isNaN(numero2)){

	numero1 = parseInt(prompt('Ingresa el primer numero',0));
	numero2 = parseInt(prompt('Ingresa el segundo numero',0));
}

resultado = "La suma es :" +(numero1+numero2)+"<br/>"+
"La resta es :" +(numero1-numero2)+"<br/>"+
"La multiplicacion es :" +(numero1*numero2)+"<br/>"+
"La division es :" +(numero1/numero2)+"<br/>";

document.write(resultado);

var resultadoCMD = 	"La suma es :" +(numero1+numero2)+"\n"+
			 		"La resta es :" +(numero1-numero2)+"\n"+
			 		"La multiplicacion es :" +(numero1*numero2)+"\n"+
             		"La division es :" +(numero1/numero2)+"\n";

console.log(resultadoCMD);
alert(resultadoCMD);


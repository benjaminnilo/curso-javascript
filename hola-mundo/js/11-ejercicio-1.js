'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
*/
var numero1 = parseInt(prompt("introduce el primer numero", 0)); 
var numero2 = parseInt(prompt("introduce el segundo numero", 0)); 

while (numero1 <= 0 || numero2 <= 0 || isNaN (numero1) ||isNaN (numero2)){

	numero1 = parseInt(prompt("introduce el primer numero", 0)); 
	numero2 = parseInt(prompt("introduce el segundo numero", 0)); 
}

if (numero1 > numero2){

	alert(numero1 + " es mayor que " + numero2);

}else if (numero1 < numero2){

	alert(numero2 + " es mayor que " + numero1);

}else if(numero2 == numero1){

	alert(numero2 + " es igual a " + numero1);

}else{
	alert('introduce numeros correctos');
}



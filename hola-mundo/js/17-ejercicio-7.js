'use strict'

/*tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(prompt('¿De que numero quieres la tabla?',1));

document.write("Tabla del: "+numero+"<br/>");

for (var i = 1; i<=10; i++) {
	document.write(i+" x "+numero+" = "+(i*numero)+"<br/>");
}

//Todas las tablas de multiplicar

for (var c= 1; c<=10; c++) {
	document.write("Tabla del "+c+"<br/>");
	for (var i = 1; i<=10; i++) {
		document.write(i+" x "+c+" = "+(i*c)+"<br/>");
	}
}


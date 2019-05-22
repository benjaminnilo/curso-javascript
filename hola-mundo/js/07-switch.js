'use strict'

//Switch

var edad = 79;
var imprime;

switch (edad){

	case 18:
	imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
	imprime = "ya eres un adulto";
	break;
	case 40:
	imprime = "Crisis de los 40";
	break;

	case 79:
	imprime = "ya eres un anciano";
	break;

	default:
	imprime="tu edad es neutra"
}

console.log(imprime);
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let num1;
	let num2;
	let suma;
		num1= parseInt(document.getElementById("txtIdNumeroUno").value);
		num2= parseInt(document.getElementById("txtIdNumeroDos").value);
		suma=num1+num2;
	
		
	alert("La suma da "  + suma);	
}

function restar()
{{	let num1;
	let num2;
	let restar;
		num1= parseInt(document.getElementById("txtIdNumeroUno").value);
		num2= parseInt(document.getElementById("txtIdNumeroDos").value);
		restar=num1-num2;
	
		
	alert("La resta da "  + restar);	
}
	
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multi;
		num1= parseInt(document.getElementById("txtIdNumeroUno").value);
		num2= parseInt(document.getElementById("txtIdNumeroDos").value);
		multi=num1*num2;

	alert("La multiplicación da "  + multi);	
}


function dividir()
{	let num1;
	let num2;
	let dividir;
		num1= parseInt(document.getElementById("txtIdNumeroUno").value);
		num2= parseInt(document.getElementById("txtIdNumeroDos").value);
		dividir=num1/num2;

	alert("La división da "  + dividir);	
}
	



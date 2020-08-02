/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	let contador=0;
	
	numero =parseInt( prompt("ingrese un número entre 0 y 9."));

	while(!(numero>0 && numero<9)){
	numero=prompt("Ingrese un numero dentro del rango.")
	contador++;
	}
	document.getElementById("txtIdNumero").value=numero;
	
}//FIN DE LA FUNCIÓN
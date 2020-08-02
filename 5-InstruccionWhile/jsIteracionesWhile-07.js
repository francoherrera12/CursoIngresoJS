/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{ 	let numero;
	let acumulador=0;
	let promedio;
	let i=0;
	let respuesta="si"
	
	while(respuesta !="no"){
		numero=parseInt(prompt("Ingrese un número"));
		acumulador+=numero;
		i++;
		respuesta=prompt("Desea seguir sumando?")
	}
	promedio=parseInt(acumulador/i);

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN

function mostrar()
{	let sexo;
	let contador=0;
	
	sexo=prompt("Ingrese un sexo f o m.");

	while(!(sexo=='f' || sexo=='m')) { 	
	
		sexo=prompt("Ingrese un sexo valido.")
	
		contador++;
	
}
	
	document.getElementById("txtIdSexo").value=sexo;
	
}//FIN DE LA FUNCIÓN
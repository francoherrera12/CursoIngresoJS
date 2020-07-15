/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{   
	//declaro las variables
	let nombre;
	let edad;
	//asigno valor con el elemento por id	
		nombre=  document.getElementById("txtIdNombre").value;
		edad= document.getElementById("txtIdEdad").value;
	//concateno las cadenas de texto con el + y sumando las variables donde ingresaremos el nombre y edad.

	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}


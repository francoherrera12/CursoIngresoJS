/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada="utn750";
	let contador=0;
	
	claveIngresada = prompt("ingrese la clave.");
	
		while(claveIngresada!="utn750"){
			
			 alert("Ingrese la clave incorrecta, por favor ingrese la clave correcta.")
		
				claveIngresada=prompt("Ingrese la clave.")
		contador++
		}
	
}//FIN DE LA FUNCIÓN

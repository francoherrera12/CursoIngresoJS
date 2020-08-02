/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	let numero;
	let positivo=0;
	let contadorPosi=0;
	let negativo=1;
	let contadorNegat=0;
	let respuesta="si"
	
	do{	numero=parseInt(prompt("Ingrese un número"));
		
	if(numero>0){
		positivo+=numero;
		contadorPosi++;
		
	}else{
		negativo*=numero;
		contadorNegat++;
		}
	
		respuesta=prompt("Desea seguir ingresando numeros?")
	
	}while(respuesta !="no")
	
	document.getElementById("txtIdSuma").value=positivo;
	document.getElementById("txtIdProducto").value=negativo;

}//FIN DE LA FUNCIÓN
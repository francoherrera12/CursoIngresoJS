/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	let positivos=0;
	let negativos=1;
	let numero;
	let flag=0;
	let respuesta;
	
	
	
	do{ 
		//pedir los numeros
		numero=parseInt(prompt("Ingrese un numero"));
		
		if(numero>=0){ //analizar el signo del numero con la condicion
		
				positivos+=numero; /*ES IGUAL A positivos=positivos+numero;*/
	
		}else{
			flag=1;		
		/*negativos*=numero; ES IGUAL A*/ negativos=negativos*numero;
		
					}
			
		respuesta=prompt("¿Desea ingresar otro número?")



	}while(respuesta=='s');
    
	if(flag==0){
		negativos=0;
	}
	

	//resultados---> fuera del bucle 
	
	document.getElementById("txtIdSuma").value=positivos;
	
	document.getElementById("txtIdProducto").value=negativos;

}//FIN DE LA FUNCIÓN
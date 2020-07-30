/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero;
	let maximo;
	let minimo;
	let	flag=0;
	let seguir;
	
	do{ 
		//pedir los numeros
		numero=parseInt(prompt("Ingrese un numero :"));
		
		if(flag==0 || numero>maximo){ 		
			maximo=numero;
		} 
		if(flag==0 ||numero<minimo){
			minimo=numero;
			flag=1;
		}
		seguir=prompt("Quiere ingresar otro numero?");
		}	while(seguir=='s');
		document.getElementById("txtIdMaximo").value=maximo;
		document.getElementById("txtIdMinimo").value=minimo;

	}
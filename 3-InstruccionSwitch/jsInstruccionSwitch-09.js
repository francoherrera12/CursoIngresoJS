function mostrar()
{ const PRECIO= 15000;
	let estacionIngresada;
	let destino;	
	let precioFinal;
		estacionIngresada = document.getElementById("txtIdEstacion").value;
		destino = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada){
		case "Invierno":
		if(destino == "Bariloche"){
			precioFinal=PRECIO + (PRECIO*0.20);
			
		} else if (destino=="Cordoba"){
			precioFinal=PRECIO - (PRECIO *0.10);
			
		}else if (destino=="Mar del Plata"){
			precioFinal= PRECIO - (PRECIO *0.20)
			
		}		
		break;
		case "Verano":
			if(destino == "Bariloche"){
				precioFinal= PRECIO - (PRECIO *0.20)
				
		}	else if (destino=="Cordoba"){
			precioFinal = PRECIO + (PRECIO *0.10);
			
		}else if (destino=="Mar del Plata"){
			aumento= PRECIO + (PRECIO *0.20)
				
	}	break;
		case "Primavera":
			if(destino == "Bariloche"){
				precioFinal= PRECIO + (PRECIO *0.10)
				
		}	else if (destino=="Cordoba"){
			
			
		}else if (destino=="Mar del Plata"){
			precioFinal= PRECIO + (PRECIO *0.10)
			
		}case "Otoño":
		if
			(
			destino == "Bariloche"){
			precioFinal= PRECIO + (PRECIO *0.10)
			
	}	else if (destino=="Cordoba"){
			precioFinal=PRECIO;
		
	}else if (destino=="Mar del Plata"){
		precioFinal= PRECIO + (PRECIO *0.10)
		 
	} break;
	
}	
alert(` El precio final es $ ${precioFinal}  pesos `);
} 

function mostrar()
{let estacionIngresada;
	let destino;	
		estacionIngresada = document.getElementById("txtIdEstacion").value;
		destino = document.getElementById("txtIdDestino").value;
	
	switch(estacionIngresada){
			case "Invierno":
				if (destino == "Bariloche"){
					alert("Se viaja");
				} else{
					alert("No se viaja");
				}
				break;
			case "Verano":
				if(destino=="Mar del plata" || destino=="Cataratas"){
					alert("Se viaja");
				}else{
					alert("No se viaja");
				}
			
			break;
			
			case "Primavera":
				if(!(destino=="Bariloche")){
					alert("Todos los destinos disponibles excepto bariloche");
				}
		
			break;
		
			case "Otoño":
		
				alert("Se viaja a todos los destinos");
		  
			break;
	}
}
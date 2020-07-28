function mostrar()
{
	let destino =document.getElementById("txtIdDestino").value;
	/*switch(destino){
				case "Bariloche" :
					 alert("Se encuentra en el oeste.")
					 break;
				case "Usuahia":
					alert("Se encuentra en el sur.");
					break;
				case "Mar del plata":
					alert("Se encuentra en el este.")
					break;

				case "Cataratas":
					alert("Se encuentra en el norte.")		
					break;	
				default:
				}	*/
	if(destino=="Bariloche"){
		alert("Oeste")
	}else if (destino == "Mar del plata"){
		alert("Este");
	}else if (destino == "Cataratas"){
		alert("Norte")
	}else if(destino=="Ushuaia"){
		alert("Sur");
	}else{
		alert("Ingrese un destino válido")
	}

}
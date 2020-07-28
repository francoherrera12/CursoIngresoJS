function mostrar()
{	
	let destino =document.getElementById("txtIdDestino").value;
	/*switch(destino){
				case "Bariloche" :
				case "Usuahia":
					alert("Hace frio.");
					break;
				case "Mar del plata":
				case "Cataratas":
					alert("Hace Calor.")		
					break;	*/

				if (destino=="Bariloche" || destino == "Ushuaia"){
							alert("Hace Frio");
				}else if (destino=="Cataratas" || destino == "Mar del plata"){
							alert("Hace Calor")
				}else	{
					alert ( "No es un destino válido.")
				}
	
				}
function mostrar()
{
	let mes;	
		mes=document.getElementById("txtIdMes").value;
	
	switch(mes){
		case "Enero":
			alert("Este mes tiene 30 días o más!")
			break;
		case "Febrero":	
			alert("Este mes tiene 29 días!")
			
			break;
		
		case "Marzo":
		case "Abril":	
		case "Mayo":
		case "Junio":	
		case "Julio":
		case "Agosto":	
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":				
		
			alert("Este mes tiene 30 días o más!!!")
		
			break;
	
	}
		}
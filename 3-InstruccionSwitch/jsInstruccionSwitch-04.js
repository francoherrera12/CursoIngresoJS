function mostrar()
{
	let mes;	
	mes=document.getElementById("txtIdMes").value;

switch(mes){
	case "Febrero":
		alert("Este mes tiene 29 días.")	
		break;
	case "Enero":	
	case "Marzo":	
	case "Mayo":
	case "Julio":
	case "Agosto":	
	case "Diciembre":
	case "Octubre":	
		alert("Este mes tiene 31 días")
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Este mes tiene 30 días")
		break;
	
 }}
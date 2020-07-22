function mostrar()
{	let nota;
	let maximo=10;
	let minimo=1
	
		nota= Math.round(Math.random()* (maximo - minimo) + minimo)
		
	if(numero>=9){
		alert("Excelente , nota = " + nota);
}else if(numero<4){
		alert("Vamos, la próxima se puede! , nota =  " + nota);
}else{
	   alert("Aprobado , nota  " + nota);
}}

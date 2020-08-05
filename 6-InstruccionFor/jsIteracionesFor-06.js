function mostrar()
{	let numero;
	let numeroIngresado;
	let contadorPares=0;

	numeroIngresado=parseInt(prompt("Ingresar numero "));
	
	for(let i=1 ; i<=numeroIngresado ; i++ ){
		if(i % 2 ==0){
			
			contadorPares++;
			console.log(i);
		}
			
	}
	console.log("La cantidad de pares es " + contadorPares)


}//FIN DE LA FUNCIÓN
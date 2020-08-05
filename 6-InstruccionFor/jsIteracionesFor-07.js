function mostrar()
{let numero;
	let numeroIngresado;
	let contadorDivisor=0;

	numeroIngresado=parseInt(prompt("Ingresar numero "));
	
	for(let i=1 ; i<=numeroIngresado ; i++ ){
		if(numeroIngresado % i == 0){
			
			contadorDivisor++;
			console.log(i);
		}
			
	}
	console.log("La cantidad de divisores es " + contadorDivisor)

}//FIN DE LA FUNCIÓN
function mostrar()
{	let numero;
	let acumulador=0;
	let promedio;
	let i=0;
	
	while(i<5){
		numero=parseInt(prompt("Ingrese un número"));
		acumulador+=numero;
		i++;
	}
	promedio=parseInt(acumulador/i);

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;


	/*acumulador se acumulan valores variables ---->ambos tienen que estar inicializados.
	contador se acumulan valores fijos.
	nnumero+= parseInt(X)  es igual que decir numero=numero+ parseInt(x)
	
	
	*/
	/*let acumulador;
		let promedio;
	a=parseInt(prompt("Ingrese un numero"));
	b=parseInt(prompt("Ingrese otro numero"));
	c=parseInt(prompt("Ingrese otro numero más"));
	d=parseInt(prompt("Ingrese otra vez un número"));
	e=parseInt(prompt("Ingrese un último numero"));
	
	acumulador=a+b+c+d+e;
	promedio=parseFloat(acumulador/5);


	document.getElementById("txtIdSuma").value=acumulador
	
	document.getElementById("txtIdPromedio").value=promedio.toFixed(2);*/








}//FIN DE LA FUNCIÓN
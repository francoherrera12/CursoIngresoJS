/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	
		importe= parseInt(document.getElementById("txtIdImporte").value);
		descuento=parseInt(importe*25/100);
		resultado=parseInt(importe - descuento);
		document.getElementById("txtIdResultado").value=resultado;
}

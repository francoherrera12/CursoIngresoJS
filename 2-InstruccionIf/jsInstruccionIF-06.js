function mostrar()
{	let  edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

		if (edad <13) {
		alert("Usted es un niño.");


		}else if (edad >=13 && edad<=17){
			alert("Usted es adolescente");
		}else{
			alert("Usted es adulto");
		}
}
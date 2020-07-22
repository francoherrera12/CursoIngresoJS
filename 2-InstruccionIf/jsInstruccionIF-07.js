function mostrar()
{	let  	edad;
	let		estadocivil;		
			edad = parseInt(document.getElementById("txtIdEdad").value);
			estadocivil=document.getElementById("estadoCivil").value;	
	
	if (!(edad>=18 && estadocivil== "Casado" && estadocivil== "Divorciado")) {
			alert("Usted es muy chico para no ser soltero");


}
}
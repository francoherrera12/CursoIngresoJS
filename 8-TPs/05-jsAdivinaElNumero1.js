/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let numeroSecreto; 
let contadorIntentos;
let flag= 0 ;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.round(Math.random() * 99 +  1);
    alert (numeroSecreto );
    // Focus= Función que da foco, cursor titilando.
   document.getElementById("txtIdNumero").focus();
    //contador de intentos inicializado en 0
    contadorIntentos=0;
    document.getElementById("txtIdIntentos").value=contadorIntentos;
    //Flag= Bandera que notifica que el dato paso por un bloque de codigo.
    flag= 1;

}
function verificar(){
   let numero;
    
   if(flag == 0) {
      
    alert("Primero debes presionar el botón comenzar.");
   
  }
else{   
        contadorIntentos++;
      
        document.getElementById("txtIdIntentos").value=contadorIntentos;
        numero=document.getElementById("txtIdNumero").value;  
        alert(numero);

      if(numeroSecreto==numero){
      

        alert(`Usted es un ganador!! y en solo ${contadorIntentos} intentos`);
        
    
      } else if(numeroSecreto < numero) {
      alert("Falta...");
  
    } else{
      alert("Se paso...");
 
     
    }

   
    }
    document.getElementById("txtIdNumero").value=numero; 
  }
  

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   let Fahrenheit;
    let FahrenheitCentigrados;
        Fahrenheit= parseFloat(document.getElementById("txtIdTemperatura").value);
        FahrenheitCentigrados=((Fahrenheit-32)*5/9);

    alert ( "la temperatura en fahrenheit es " + Fahrenheit.toFixed(2) + " convertida a Centigrados es " + FahrenheitCentigrados.toFixed(2));
    }

function CentigradosFahrenheit () 
{   let Centigrados;
    let CentigradosFahrenheit;
        Centigrados=parseFloat(document.getElementById("txtIdTemperatura").value);
        CentigradosFahrenheit=((Centigrados*9/5)+32)
    alert("La temperatura en Centigrados es " + Centigrados.toFixed(2) + " convertida a Fahrenheit es " + CentigradosFahrenheit.toFixed(2));
}

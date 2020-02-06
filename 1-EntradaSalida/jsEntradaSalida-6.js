/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var nume1;
var nume2;
var suma;
nume1= document.getElementById("numeroUno").value;
nume2= document.getElementById("numeroDos").value;
suma= parseInt(nume1)+ parseInt(nume2);
alert("El resultado de la suma es : "+suma);
}


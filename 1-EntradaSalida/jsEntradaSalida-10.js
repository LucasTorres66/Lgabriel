/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	var s1
    var s2
    var r1
    var r2
    s1= document.getElementById("importe").value;
    r1= parseInt(s1)* 25;
    r2= parseInt(r1)/ 100;
    document.getElementById("resultado").value= result= r2
}
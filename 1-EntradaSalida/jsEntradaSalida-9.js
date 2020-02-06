/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var s1
    var s2
    var r1
    var r2
    var r3
    s1= document.getElementById("sueldo").value;
    r1= parseInt(s1)+ parseInt(s1)*10/100;
    document.getElementById("resultado").value= result= r1
}

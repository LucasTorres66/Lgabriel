/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var n1
    var n2 
    var r1
    n1= document.getElementById("numeroUno").value;
    n2= document.getElementById("numeroDos").value;
    r1= parseInt(n1)+ parseInt(n2);
    alert(" La suma es "+r1);

	
}

function restar()
{
    var n3
    var n4
    var r2
    n3= document.getElementById("numeroUno").value;
    n4= document.getElementById("numeroDos").value;
    r2= parseInt(n3)- parseInt(n4)
    alert("La resta es "+r2)
}

function multiplicar()
{   var n5
    var n6
    var r3
    n5= document.getElementById("numeroUno").value;
    n6= document.getElementById("numeroDos").value;
    r3= parseInt(n5)* parseInt(n6)
    alert("La multiplicacion es "+r3);

	
}

function dividir()
{
	var n7
    var n8
    var r3
    n7= document.getElementById("numeroUno").value;
    n8= document.getElementById("numeroDos").value;
    r3= parseInt(n7)/ parseInt(n8);
    alert("La division es "+r3);
}


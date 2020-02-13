
function mostrar()
{
    var ancho;
    var largo;
    var total;
        ancho= prompt("Ancho","Introduzca el ancho");
        largo=prompt("largo", "Introduzca el largo");
    
    total= parseInt(ancho)* parseInt(largo);

    alert("El total del area es "+total);
}

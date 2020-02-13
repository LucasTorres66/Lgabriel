function mostrar()
{
var precio= prompt("Precio","Introduzca el precio");
var descuento= prompt("Descuento","Introduzca el descuento");
    var precioF= parseInt(precio)* parseInt(descuento)/100
    var preciof2= parseInt(precio)- parseInt(precioF)
    document.getElementById("elPrecioFinal").value= preciof2
    
}

function mostrar()
{
var sexo;
do {
    sexo=prompt('Ingrese " f " o " m " segun su sexo ' );
} while (sexo!="f" && sexo!="m");




document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

switch(mesDelAnio)
{
    case "Julio" :
            alert("abrigate que hace frio")
            break;   
    case "Agosto":
            alert("Abrigate que hace frio")         
            break;
    case "Enero" :
    case "Febrero":
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio":
            alert("Falta para el inverno!");
            break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
            alert("Ya pasamos el frio, Ahora el calor !!!")
            break;
}       
}//FIN DE LA FUNCIÓN
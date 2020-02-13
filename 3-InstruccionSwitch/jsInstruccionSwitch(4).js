function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
	
		
switch(mesDelAnio)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Tienen 31 dias")
        break;
    case "Febrero":
        alert("tiene 28 Dias")
        break;
    default:
        alert ("tiene 30 dias")
        break;
    }



}//FIN DE LA FUNCIÓN
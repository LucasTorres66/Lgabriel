function mostrar()
{
var n=0
do {
	n=prompt('Ingrese un numero entre " 0 " y " 9 " ')
} while (n<=0 || n>=9);
document.getElementById("Numero").value= n



}//FIN DE LA FUNCIÓN
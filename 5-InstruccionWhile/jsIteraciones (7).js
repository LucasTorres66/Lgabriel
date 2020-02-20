function mostrar()

/*
	var contador=0;
	var acumulador=0;
	var valor=0
	var intentos=parseInt(prompt("Ingrese la cantidad de numero totales"));
while(contador<intentos)
{
	valor=prompt("ingrese un número");
		acumulador= acumulador+ parseInt(valor);
		contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/intentos;
*/
//FIN DE LA FUNCIÓN
{
	var contador=0;
	var acomulador=0;
	var resp="s";
	var valor=0;
	do
	{
		contador++;
		valor=prompt("ingrese su numero: ");
		acomulador= acomulador+parseInt(valor);	
		resp= prompt("desea ingresar otro numero");
	
	}while(resp == "s"|| resp== "S");
	
	document.getElementById('suma').value=acomulador;
	document.getElementById('promedio').value=acomulador/contador;


}
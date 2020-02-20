function mostrar()
{

	var contador=0;
	var acumulador=0;
	var valor=0
	while(contador<5)

{
	contador++;
	valor=prompt("Ingrese un numero");
	acumulador= acumulador + parseInt(valor)
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
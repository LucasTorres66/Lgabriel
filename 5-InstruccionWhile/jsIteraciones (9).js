function mostrar()
{

	
	// declarar variables
	var min;
	var max;
	var num;
	var respuesta='si';
	
	num=parseInt( prompt("Ingrese un numero"));
	max=num;
	min=num;
	respuesta=prompt("Desea ingresar otro numero?");
	while(respuesta!='no')
	{
		num=prompt("Ingrese otro numero");
		if(num>max)
		{	
			max=num;
		}
		if(num<min)
		{
			min=num;
		}
		respuesta=prompt("desea ingresar otro numero?");
	}
	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;
	

	




}//FIN DE LA FUNCIÓN
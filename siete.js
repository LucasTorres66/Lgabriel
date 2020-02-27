function mostrar()
{
var nota;
var i=1;
var sexo;
var ContVarones=0;
var Varones=0;
var notaBaja=11;
var sexoBajo;
var cantAlumnos=5
var sumaNotas=0;

for(i=0;i<cantAlumnos;i++)
{
    do{ 
        nota=parseInt(prompt("Nota","Ingrese una nota"));
        if(isNaN(nota)){
            alert("Debe ser un numero entre 0 y 10");
            nota=-1;
        }
    }while(nota<=0||nota>10)
    sumaNotas= sumaNotas+parseInt(nota)
    do{
        sexo=prompt("Sexo",'Ingrese " f " o " m " ')
    }while(sexo!="f" && sexo!="m")
    if(nota<notaBaja){
        notaBaja=nota;
        sexoBajo=sexo;
    }
    if(sexo=="m"&&nota>=6){
        ContVarones++;
    }


}
alert("El promedio de las notas es "+(sumaNotas/cantAlumnos));
alert("La nota mas baja es "+notaBaja+" y el sexo del alumno es "+sexoBajo);
alert("La cantidad de varones con nota mayor a 6 es "+ContVarones);
}


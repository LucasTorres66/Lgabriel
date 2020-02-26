function mostrar()
{
var i=0;
var par=0;
var num=prompt("Ingrese un numero");

    for(i=1;i<=num;i++){
            
        if((i%2)==0){            //
            alert("Es par "+i); // NUMERO PAR
            par++;             //
        }

        
        }
        alert(par);
        alert(i);
}
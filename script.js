//Mostrar en consola la secuencia de Fibonacci:
//a. Entre los números 0 y 1000.
//b. Números pares entre 0 y 1000.
//c. Números impares entre 0 y 1000.
//Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase

// Asignación (A) Entre los números 0 y 1000

var numeroElementos = 16;
var fibonacci = [0,1];
for(i=2; i <= numeroElementos; i++) 
{ 
fibonacci.push(fibonacci[i-1] + fibonacci[i-2]); 
document.write(fibonacci[i]+"<br/>");
}

// Asignación (B)Números pares entre 0 y 1000 

var numeroElementos = 14;
var fibonacci = [0,1];
for(i=2; i <= numeroElementos; i++) 
{ 
fibonacci.push(fibonacci[i-1]+fibonacci[i-2]); 
document.write(fibonacci[i]+fibonacci[i]+"<br/>");
}








  

    

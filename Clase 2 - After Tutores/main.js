let var1 = prompt("Ingresa un valor");

// Validacion de que lo ingresado sea o no un numero. 
// La funcion isNaN() retorna verdadero si el parametro ingresado no es numero, falso si lo es

if(isNaN(var1)) {
    alert("Lo ingresado no es un numero");
} else {
    var1 = parseInt(var1);
    alert(var1+5);
}

// If anidados

if (var1 > 0) {
    alert("Numero ingresado es positivo");
} else {
    if  (var1 == 0) {
        alert("Numero ingresado es cero")
    } else {
        alert("Numero ingresado es negativo");
    } 
} 

// Misma funcion que el codigo de arriba pero sin utilizar else

if (var1 > 0) {
    alert("Numero ingresado es positivo");
} 

if (var1 == 0) {
    alert("Numero ingresado es cero")
}

if (var1 < 0) {
    alert("Numero ingresado es negativo");
} 

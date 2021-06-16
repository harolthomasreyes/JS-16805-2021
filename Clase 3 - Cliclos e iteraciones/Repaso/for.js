var acumuladorDiv2 = 0; //Contador de matches
var nDivisible = 6; //Numero el cual es utilizado como base para dividir

for (let i = 0; i < 10; i++) {
  var resultado = i % nDivisible; // Resultado de lam div
  var bDivisible = resultado == 0; //booleano que indica si efectivamente el resto es 0

  if (bDivisible)
    // contamos solo si es divisible
    acumuladorDiv2++;
}

console.log(
  `se encontraron ${acumuladorDiv2} numeros divisibles por ${nDivisible}`
);

//Indicamos por ingreso del usuario cuantas iteraciones debemos realizar
var numeroMaxIteraciones = parseInt(
  prompt("ingresa las iteraciones que debemos realizar:")
);

for (let i = 0; i < numeroMaxIteraciones; i++) console.log(i);

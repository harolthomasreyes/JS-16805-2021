var rango1 = 0; // 0 a 21 años
var rango2 = 0; // 22 a 50 años
var rango3 = 0; // 51 a 200 años

while (true) {
  //Ingreso de datos
  let edad = parseInt(prompt("Ingresa la edad:"));
  //Verificamos si continua la ejecucion
  if (isNaN(edad)) break; //No ingreso nada

  //Tomamos la estadisticas
  if (edad <= 21) rango1++;
  if (edad <= 50 && edad >= 22) rango2++;
  if (edad >= 51) rango3++;

  let totalActual = rango1 + rango2 + rango3;

  console.log(
    `Hasta los 21 años ingreso un %: ${(rango1 * 100) / totalActual}`
  );
  console.log(
    `Entre los 22 a los 50 años ingreso un %: ${(rango2 * 100) / totalActual}`
  );
  console.log(
    `Desde los 51 años ingreso un %: ${(rango3 * 100) / totalActual}`
  );
}

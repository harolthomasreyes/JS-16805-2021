var nombre = prompt("Ingresa tu nombre:");
var edad = parseInt(prompt("Ingresa tu edad:"));

var bNombreVacio = nombre == "";
var bEdadDesc = isNaN(edad);

console.log(bNombreVacio, bEdadDesc);
/******************************************************************************************************/
do {
  var nombre = prompt("Ingresa tu nombre:");
  var edad = parseInt(prompt("Ingresa tu edad:"));

  var bNombreVacio = nombre == "";
  var bEdadDesc = isNaN(edad);

  console.log(`La persona con nombre ${nombre} y edad ${edad} ingreso`);
} while (!(bNombreVacio && bEdadDesc)); //Si ambos casos fueron un ingreso vacio, debe cortar el do while

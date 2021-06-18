//Version 1
var torta = prompt("Ingresa tu torta preferida:");

if (torta == "chocolate") {
  console.log("Te gusta la torta de chocolate");
} else {
  console.log("No te gusta la torta de chocolate");
}

if (torta == "mascarpone") {
  console.log("Te gusta la torta de mascarpone");
} else {
  console.log("No te gusta la torta de mascarpone");
}

//Version 2

var torta = parseInt(
  prompt("Ingresa tu torta preferida: (1 - chocolate | 2- mascarpone)")
);

if (torta == 1) {
  console.log("Te gusta la torta de chocolate");
} else if (torta == 2) {
  console.log("Te gusta la torta de mascarpone");
} else {
  console.log("No Te gusta ninguna de nuestras tortas");
}

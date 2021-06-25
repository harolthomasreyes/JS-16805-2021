var colores = ["rojo", "amarillo", "verde", "rosa", "purpura"];
var numeros = [1, 2, 3, 4, 5];
var Estado = [true, false];
var personas = [
  { nombre: "patricia", DNI: 1 },
  { nombre: "pedro", DNI: 2 },
  { nombre: "martin", DNI: 3 },
];
var customArray = [
  "rojo",
  1,
  { nombre: "martin", DNI: 3 },
  true,
  [1, 2.3, 3, "dos"],
];

//Callbacks
const mostrarMensaje = (msj) => console.log(msj);

const ejecutarEnBaseAOtraFuncion = (callback, mensajeAMostrar) => {
  callback(mensajeAMostrar);
};

ejecutarEnBaseAOtraFuncion(mostrarMensaje, "hola Josue");

//Recorrer un array
//V1
var compraHogar = ["cortinas", "tomate", "queso", "carne"];
for (let i = 0; i < compraHogar.length; i++) {
  console.log(compraHogar[i]);
}
//V2
compraHogar.forEach((item) => console.log(item));
//Filter
var numeros = [1, 2, 3, 4, 5];
numeros.filter((n) => n % 2 === 0);

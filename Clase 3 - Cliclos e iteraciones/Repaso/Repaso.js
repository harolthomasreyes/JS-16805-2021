/*formas de crear dinamicamente variables que se adapten a nuestra logica*/
var A = 1;
var B = 1;
//saber si dos variables son iguales
var AigualB = A == B;
console.log(
  `el contenido de la variable A: ${A} comparado con B: ${B} es igual :${AigualB}`
);
//saber si dos variables son distintas
var AdistintoB = A != B;
console.log(
  `el contenido de la variable A: ${A} comparado con B: ${B} es distinto :${AdistintoB}`
);

//Mostrar alerta solo cuando sea el resultado esperado
if (AigualB)
  alert(
    `el contenido de la variable A: ${A} comparado con B: ${B} es igual :${AigualB}`
  );

//conociendo la negacion !
if (!AdistintoB /*AdistintoB == false*/)
  alert(
    `el contenido de la variable A: ${A} comparado con B: ${B} es distinto :${!AdistintoB}`
  );

/*condicion Y - &&*/
var chocolate = prompt("Te gusta el chocolate: (si/no)?");
var calabreza = prompt("Te gusta la pizza de calabreza: (si/no)?");
var anana = prompt("Te gusta la pizza de anana: (si/no)?");

var condcalabreza = "si" == calabreza; //forzamos a que la respuesta correcta sea 'si' para que de verdadero
var condanana = "si" == anana; //forzamos a que la respuesta correcta sea 'si' para que de verdadero
var condchocolate = "si" == chocolate; //forzamos a que la respuesta correcta sea 'si' para que de verdadero

//operador Y (si y solo si todas son verdaderas)
console.log("chocolate: ", condcalabreza);
console.log("calabreza: ", condanana);
console.log("anana: ", condchocolate);

var condOperadorY = condcalabreza && condanana && condchocolate; //solo si las 3 son true, condOperadorY es true

if (condOperadorY) alert("Felicitaciones, Ganaste!");

/*Condicion O logico*/
var chocolate = prompt("Te gusta el chocolate: (si/no)?");
var calabreza = prompt("Te gusta la pizza de calabreza: (si/no)?");
var anana = prompt("Te gusta la pizza de anana: (si/no)?");

var bCalabreza = "si" == calabreza; //forzamos a que la respuesta correcta sea 'si' para que de verdadero
var bAnana = "si" == anana; //forzamos a que la respuesta correcta sea 'si' para que de verdadero
var bChocolate = "si" == chocolate; //forzamos a que la respuesta correcta sea 'si' para que de verdadero

//operador Y (si y solo si todas son verdaderas)
console.log("chocolate: ", bChocolate);
console.log("calabreza: ", bCalabreza);
console.log("anana: ", bAnana);

var condOperadorY = bChocolate || bCalabreza || bAnana; //solo si alguna de las 3 es verdadera, la cond es verdadera

if (condOperadorY) alert("Felicitaciones, Ganaste!");

if (/*cond x*/ true) {
  //camino verdadero
  console.log(`camino verdadero`);
} /*else no es obligatorio*/ else {
  //camino falso
  console.log(`camino falso`);
}

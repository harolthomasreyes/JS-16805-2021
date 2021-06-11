//Tipos de datos en JS
//1) cadenas de texto
var texto = "hola alumnos"; // las comillas simples o dobles son lo mismo
//2) numerico
var numeroEntero = 10;
//3) numero flotante
var numeroFlotante = 3.33333312;
//4) booleano
var verdaderoOFalso = true; //true | false

//Alert => mensage al usuario
//alert(texto, numeroEntero);

//consonle.log => para los desarrolladores
console.log("un solo parametro:", texto);
console.log(
  "N parametros:",
  texto,
  numeroEntero,
  numeroFlotante,
  verdaderoOFalso
);

//Concatenar cadenas de texto => version antigua
var cadenas = "texto n1-" + "texto n2 " + texto + " " + numeroEntero;
console.log(cadenas);
//Contatenar con string interpolation
var cadenaV2 = `texto n1-texto n2 ${texto} ${numeroEntero}`;
console.log(cadenaV2);
//Operaciones logico aritmeticas
var x = 3;
var y = 9;
var z = -3;
var formula = (x ^ 2) + y * x - z;
console.log("resultado", formula);

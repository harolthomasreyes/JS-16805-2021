/*
    Creacion de una encuesta (Pablo&Harold)

    Encuenta estadistica segun respuestas de usuario
    Tendremos distintos tipos de preguntas del estipo:

    1) multiple choice (obligatorio)
    2) si/no (obligatorio)

    ==================================================DEVELOPERS==============================================

    Problema?
    1) Cuales son las preguntas?
    2) Como las contestara el usuario?
    3) Ir acumulando, segun las respuestas, los resultados de las mismas
    4) La presentacion



    Preguntas

    1) Cual es el club mas grande de Argentina? => yupanqui
    2) Que prefieres, dulce de leche o batata? => dulce de leche
    3) Tienes mascotas? (si/no) => si
    4) Argentina ganara el mundial? => si
    5) Cual es tu color favorito? celeste
*/

//================================== 1 Parte ==========================================
var pregunta1 = parseInt(
  prompt(` Cual es el club mas grande de Argentina? \n 
    1) river \n
    2) boca \n
    3) yupanqui \n
    4) saca chispas
`)
);

var pregunta2 = parseInt(
  prompt(` Que prefieres, dulce de leche o batata? \n 
      1) dulce de leche \n
      2) batata
  `)
);

var pregunta3 = parseInt(
  prompt(` Tienes mascotas? \n 
        1) si \n
        2) no
    `)
);

var pregunta4 = parseInt(
  prompt(` Argentina ganara el mundial? \n 
        1) si \n
        2) no
    `)
);

var pregunta5 = parseInt(
  prompt(`  Cual es tu color favorito? \n 
        1) azul \n
        2) verde \n
        3) amarillo \n
        4) celeste \n
    `)
);
//================================== 2 Parte ==========================================
// var acumulador = 0;
// if (pregunta1 == 3) {
//   acumulador = acumulador + 20;
// } // 3 es yupanqui

// if (pregunta2 == 1) {
//   acumulador = acumulador + 20;
// } // 1  dulce de leche
// if (pregunta3 == 1) {
//   acumulador = acumulador + 20;
// } // 1 Si
// if (pregunta4 == 1) {
//   acumulador = acumulador + 20;
// } // 1 si
// if (pregunta5 == 4) {
//   acumulador = acumulador + 20;
// } // 4 celeste

// alert(
//   `Excelente encuesta, gracias por ayudarnos. Tu resultado fue de: ${acumulador}`
// );
//================================== 2 Parte V2 ==========================================
// sin importar la cantidad de preguntas tenemos un %
var acumulador = 0;
if (pregunta1 == 3) {
  acumulador = acumulador + 1;
} // 3 es yupanqui

if (pregunta2 == 1) {
  acumulador = acumulador + 1;
} // 1  dulce de leche
if (pregunta3 == 1) {
  acumulador = acumulador + 1;
} // 1 Si
if (pregunta4 == 1) {
  acumulador = acumulador + 1;
} // 1 si
if (pregunta5 == 4) {
  acumulador = acumulador + 1;
} // 4 celeste

alert(
  `Excelente encuesta, gracias por ayudarnos. Tu resultado fue de: ${
    (acumulador * 100) / 5
  }`
);

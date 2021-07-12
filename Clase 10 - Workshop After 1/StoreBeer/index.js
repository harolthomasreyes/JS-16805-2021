/* 
    VERSION 1
    1) crear sectores en mi body
    2) insertar caja de texto
    3) insertar boton
    4) anclar envento 'click' para tomar valor de la caja de texto 
    5) cargar array proveniente de la caja de texto
    6) volcar en una lista todos los items cargados desde la caja de texto
*/
//Variables Globales
var valoresDeLaLista = [];
let divIzquierdo = document.createElement("div");
let divDerecho = document.createElement("div");

// 1) crear sectores en mi body
crearSectores();

// 2) insertar caja de texto
insertarCajaDeTexto();

//  3) insertar boton
insertarBoton();

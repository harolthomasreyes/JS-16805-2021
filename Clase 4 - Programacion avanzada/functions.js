//Ejemplo 1

function mostrarMensaje(msj) {
  console.log(msj);
}

//1) Siempre retorna lo que se encuentra luego de la flecha
// Si no utilizamos llaves {} siempre va a tomar por defecto la linea contigua
const mostrarMensajeV2 = (msj) => console.log(msj);

//Suma equivalente
function suma(numeroA, numeroB) {
  //Tenemos que retornar algo
  return numeroA + numeroB;
}
//Particularidad:
//Retorna si es necesario, la siguiente linea de ejecucion
const sumaV2 = (numeroA, numeroB) => numeroA + numeroB;

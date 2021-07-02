/*
    1) debemos tener acciones cargadas
    2) debemos cargar el usuario que usara el sistema
    3) cargar las acciones que el usuario desee comprar
    4) mostrar las acciones compradas al final
*/

//1) debemos tener acciones cargadas
var accionYPF = new Acciones("ypf", 72);
var accionGG = new Acciones("google", 1000);
var accionTele = new Acciones("telecentro", 80);

//Tenemos el listado total de acciones que se pueden comprar
var listadoAccionesDisponibles = [accionYPF, accionGG, accionTele];

//2) debemos cargar el usuario que usara el sistema
var nombreDeUsuario = prompt("Ingresa tu nombre:");
var usuarioActual = new Usuario(nombreDeUsuario, []);
console.log(usuarioActual);

//3) cargar las acciones que el usuario desee comprar
while (true) {
  let accionElegida = prompt("Ingresa la accion a comprar:");

  //Ya no desea comprar mas acciones entonces detenemos la ejecucion
  if (accionElegida == "") break;

  //Usamos la funcion Find de array
  let accionEncontrada = listadoAccionesDisponibles.find(
    (a) => a.nombre == accionElegida
  );

  usuarioActual.acciones.push(accionEncontrada);
}
//4) mostrar las acciones compradas al final

var vistaDeAccionesCompradas = "";

vistaDeAccionesCompradas += `<ul>`;
usuarioActual.acciones.forEach(
  (accionAlias) =>
    (vistaDeAccionesCompradas += `<li>${accionAlias.nombre} - ${accionAlias.valor}</li>`)
);
vistaDeAccionesCompradas += `</ul>`;

document.getElementById("acciones").innerHTML = vistaDeAccionesCompradas;
console.log(usuarioActual);

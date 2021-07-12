const cargaAcciones = (usuarioActual) => {
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
};

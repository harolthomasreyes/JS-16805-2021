const comprarAccion = () => {
  let accion = document.getElementById("selectAcciones").value;

  let accionActual = listadoAccionesDisponibles.find(
    (a) => a.nombre === accion
  );
  //Disminuir las acciones globales
  let index = listadoAccionesDisponibles.findIndex((a) => a.nombre === accion);
  listadoAccionesDisponibles[index].cantidad -= 1;

  //  accionActual.cantidad = 1;
  let accionComprada = new Acciones({
    nombre: accionActual.nombre,
    precio: accionActual.precio,
    cantidad: 1,
  });
  usuarioActual.acciones.push(accionComprada);
};

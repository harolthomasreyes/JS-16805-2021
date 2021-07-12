const cargarAcciones = () => {
  let accionesTemporales = [];

  listaDeAcciones.forEach((a) => accionesTemporales.push(new Acciones(a)));

  return accionesTemporales;
};

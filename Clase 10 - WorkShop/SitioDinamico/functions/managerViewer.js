const crearTagCustom = (tag, id) => {
  var newTag = document.createElement(tag);
  newTag.setAttribute("id", id);
  document.body.append(newTag);
};

/************************************************************************/
const mostrarNombreUsuario = () =>
  (document.getElementById(
    "usuario"
  ).innerHTML = `Welcome usuario: ${usuarioActual.nombre}`);

/************************************************************************/
const constructorListaAcciones = () => {
  //4) mostrar las acciones compradas al final
  var selectCustom = `<select id='selectAcciones' onchange='mostrarValorYCantidadDeAccion(event)' >`;
  listadoAccionesDisponibles.forEach(
    (accionAlias) =>
      (selectCustom += `<option value='${accionAlias.nombre}'>${accionAlias.nombre}</option>`)
  );
  selectCustom += `</select>`;

  document.getElementById("accionesDisponibles").innerHTML = selectCustom;
};

//event desde el select
const mostrarValorYCantidadDeAccion = (event) => {
  let accion = event.target.value;

  let accionActual = listadoAccionesDisponibles.find(
    (a) => a.nombre === accion
  );

  document.getElementById(
    "accionValor"
  ).innerHTML = `El precio es ${accionActual.precio}`;
  document.getElementById(
    "accionCantidad"
  ).innerHTML = `La cantidad es: ${accionActual.cantidad}`;
};

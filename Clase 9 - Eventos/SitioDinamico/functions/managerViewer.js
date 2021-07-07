const crearTagCustom = (tag, id) => {
  var newTag = document.createElement(tag);
  newTag.setAttribute("id", id);
  document.body.append(newTag);
};

/************************************************************************/
const mostrarNombreUsuario = (usuarioActual) =>
  (document.getElementById(
    "usuario"
  ).innerHTML = `Welcome usuario: ${usuarioActual.nombre}`);
/************************************************************************/
const constructorLista = (usuarioActual) => {
  //4) mostrar las acciones compradas al final
  var vistaDeAccionesCompradas = `<ul>`;
  usuarioActual.acciones.forEach(
    (accionAlias) =>
      (vistaDeAccionesCompradas += `<li onclick='alert("${accionAlias.nombre}")'>${accionAlias.nombre} - ${accionAlias.valor}</li>`)
  );
  vistaDeAccionesCompradas += `</ul>`;

  //Creamos un div dinamico para insertar las acciones
  crearTagCustom("div", "acciones");

  document.getElementById("acciones").innerHTML = vistaDeAccionesCompradas;
  console.log(usuarioActual);
};
/************************************************************************/
const constructorLista = () => {
  //4) mostrar las acciones compradas al final
  var selectCustom = `<select>`;
  listadoAccionesDisponibles.forEach(
    (accionAlias) =>
      (selectCustom += `<li onclick='alert("${accionAlias.nombre}")'>${accionAlias.nombre} - ${accionAlias.valor}</li>`)
  );
  selectCustom += `</select>`;

  document.getElementById("accionesDisponibles").innerHTML = selectCustom;
  console.log(usuarioActual);
};

const inicializarVanillaJS = () => {
  let btnEjecutar = document.createElement("button");
  btnEjecutar.setAttribute("id", "btnEjecutar");
  btnEjecutar.innerHTML = "Ejecutar VJS";
  document.body.append(btnEjecutar);
};

const inicializarJQUERY = () => {
  //$(document.body).append(
  $("body").append(`<button id ='btnEjecutarJquery'>Ejecutar Jquery</button>`);
};

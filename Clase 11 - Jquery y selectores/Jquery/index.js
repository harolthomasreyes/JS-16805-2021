//Vanilla script Onload
//Espera que las imagenes y/o otros CDN se carguen
//window.onload(alert("la pagina se cargo vanilla JS..."));

//Jquery Onload
//Solo espera que el body se cargue
// $(document).ready(function () {
//   alert("la pagina se cargo JQUERY...");
// });

inicializarVanillaJS();
inicializarJQUERY();

//Agregar un evento solo a los tags que implemente la clase fruta
$(".fruta").click((e) => {
  alert();
});
//Vanilla JS
// document.querySelectorAll(".fruta").forEach((element) => {
//   //magia
// });

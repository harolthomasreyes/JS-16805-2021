//TODO: existe otra forma de leer el json que esta en la carpeta DB
var products = [];
console.log(1);
//1) JS vanilla metodo GET
// fetch("./db/products.json")
//   .then((respuesta) => {
//     console.log(2);
//     console.log("respuesta:", respuesta);
//     return respuesta.json(); //respuesta.text();
//   })
//   .then((json) => {
//     console.log(json);
//     products = json; //JSON.parse(texto);
//   });
//2) JQUERY
// $.get("./db/products.json", function (datos) {
//   console.log("datos:", datos);
//console.log(2);
// });
//3) JQUERY AJAX
// $.ajax({
//   url: "./db/products.json",
//   success: function (datos) {
//     console.log(2);
//     console.log("datos ajax:", datos);
//   },
// });
//4) jquery getJSON
const keyLocalStorageProducts = "products";

$.getJSON("./db/products.json", function (datos) {
  products = datos;
  console.log("datos getJSON:", datos);
  console.log(2);

  console.log(3);

  //Guardar en memorria la lista de productos
  if (localStorage.getItem("products") == null)
    localStorage.setItem(keyLocalStorageProducts, JSON.stringify(products));

  //Carga y visualizacion de los productos
  productLoading();
  console.log(4);
});

//Usuario de la tienda
var userStore = new UserStore("marta");

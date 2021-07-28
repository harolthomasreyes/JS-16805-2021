/*RUTAS*/
const routes = [
  { path: "/index", action: "index" },
  { path: "/contact", action: "contact" },
  { path: "/about", action: "about" },
];

const router = () => {
  //Elimino el # y me queda el path que se encuentra dentro de mis rutas
  let currentPath = location.hash.slice(1);
  //Uso la funcion 'find' para capturar los datos dentro de mi route
  let pathToGo = routes.find((p) => p.path == currentPath);

  //Gracias al action sabemos que vamos a renderizar en el div #app
  switch (pathToGo.action) {
    case routes[0].action: //index
      $("#app").html("Welcome to Index");
      break;
    case routes[1].action: //contact
      $.ajax({
        url: "./views/contact.html",
        success: function (result) {
          $("#app").html(result);
        },
      });
      break;
    case routes[2].action: //about
      $("#app").html("Welcome to About");
      break;
    default:
      break;
  }
};

/*==============================*/
//Nota
//Exiten 3 formas de obtener un archivo de texto desde JS
//0) fetch('./views/contact.html').then(respuesta => respuesta.text()).then(respuesta => console.log(respuesta))
//1) $.get("./views/contact.html", function (data) {console.log(data);});
//2) $.ajax({ url: "./views/contact.html", success: function(result) { console.log(result)} })
//3) $.getJSON( "ajax/test.json", function( data ) {console.log(data)})

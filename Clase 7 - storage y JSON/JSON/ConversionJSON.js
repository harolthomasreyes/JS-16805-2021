//Personas a persistir en memoria
var maria = {
  nombre: "Maria",
  dni: 1,
  domicilio: { calle: "Panama", altura: 892 },
};

var pablo = {
  nombre: "pablo",
  dni: 2,
  domicilio: { calle: "Puerto madero", altura: 7777 },
};

//Cargamos la variable a ser persistida en memoria
var personasList = [maria, pablo];
console.log("personasList:", personasList);
//Guardamos
localStorage.setItem("personas", JSON.stringify(personasList));
console.log("localStorage:", localStorage);
//Recuperamos
var personasTexto = localStorage.getItem("personas");
//Parseamos
var objPersonas = JSON.parse(personasTexto);
//Mostramos
console.log(objPersonas);

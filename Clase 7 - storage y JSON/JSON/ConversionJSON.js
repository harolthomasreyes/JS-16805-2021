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
//1) Guardamos localStorage Siempre guarda en texto
//2) JSON.stringify(personasList)
localStorage.setItem("personas", JSON.stringify(personasList));
console.log("localStorage:", localStorage);
//3) Recuperamos - localStorage.getItem
var personasTexto = localStorage.getItem("personas");
//4) Parseamos JSON.parse
var objPersonas = JSON.parse(personasTexto);
//Mostramos
console.log(objPersonas);

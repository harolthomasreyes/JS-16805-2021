//Nos llega del backend
var persona = {
  nombre: "Maria",
  dni: 1,
  domicilio: { calle: "Panama", altura: 892 },
};
if (persona.domicilio.calle) {
  console.log("calle existe");
}
if (persona.domicilio.entrecalles) {
  console.log("existe?");
}

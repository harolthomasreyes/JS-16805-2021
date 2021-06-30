//Objeto de prueba
var persona = {
  nombre: "Maria",
  dni: 1,
  domicilio: { calle: "Panama", altura: 892 },
};
//Operador Or ||
var entrecalle = persona.domicilio.entrecalle || "Sin calle...";
//Esta operacion retorna por defecto "Sin calle..." dado que la propiedad 'persona.domicilio.entrecalle' no existe

//Operador AND &&
var entrecalle = persona.domicilio.altura && "Contiene altura cargada";
//Esta operacion retorna por defecto "Contiene altura cargada" dado que la propiedad 'persona.domicilio.altura' existe

//Version Antigua
var sonIguales = false;

if (1 == 1) {
  sonIguales = true;
} else {
  sonIguales = false;
}

//If ternario
// condicion ? camino Verdadero : camino falso
var sonIguales = 1 == 1 ? true : false;

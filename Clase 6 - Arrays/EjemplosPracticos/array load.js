var turnos = []; //array vacio

while (true) {
  var nombre = prompt("Ingresar el nombre de siguiente turno:");

  if (nombre == "") break;

  turnos.push(nombre);
}

console.log("turnos:", turnos);
turnos.pop(); //saco el ultimo dado el algoritmo FIFO
console.log("turnos:", turnos);

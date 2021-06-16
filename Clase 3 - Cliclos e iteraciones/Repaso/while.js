//ejemplo 1
var cond = true;
var acumulador = 0;

while (cond /*algo sea verdadero*/) {
  //se ejecuta de forma indeterminada un ciclo infinito d eiteraciones
  alert("publicidad");
  acumulador++;
  if (acumulador === 3) break;
}

//Ejemplo 2
var cond = true;
var index = 0;

while (index < 3 /*algo sea verdadero*/) {
  //se ejecuta de forma indeterminada un ciclo infinito d eiteraciones
  alert("publicidad");
  index++;
}

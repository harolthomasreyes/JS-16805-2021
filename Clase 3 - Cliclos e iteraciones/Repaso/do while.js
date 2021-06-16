while (true) {
  alert("publicidad");
  break; //finaliza el while
}

while (false) {
  //nunca se ejecuta dado que la condicion es falsa
  alert("publicidad");
}

/*EL IRRESPETUOSO*/
do {
  //Ejecuta SIEMPRE la primera instruccion
  alert("publicidad");
} while (false);

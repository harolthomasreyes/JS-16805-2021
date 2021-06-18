var opcion = parseInt(prompt("Que te gustaria comer:"));

switch (opcion) {
  case 1:
    console.log(`La opcion es: Papas fritas`);
    break;
  case 2:
    console.log(`La opcion es: Chocolatada`);
    break;
  case 3:
    console.log(`La opcion es: Dulce de leche`);
    break;
  case 4:
    console.log(`La opcion es: Cheesecake`);
    break;
  default:
    console.log(`La opcion es: ${opcion} y no la tenemos en el menu`);
    break;
}

//Traduc al If
var opcion = prompt(
  "Que te gustaria comer: (1 - papas fritas | 2 - papas fritas)"
);

if (opcion == "1" && opcion == "10") {
  console.log(`La opcion es: Papas fritas`);
} else if (opcion == "2") {
  console.log(`La opcion es: Chocolatada`);
} else if (opcion == "3") {
  console.log(`La opcion es: Dulce de leche`);
} else if (opcion == "4") {
  console.log(`La opcion es: Cheesecake`);
} else {
  console.log(`La opcion es: ${opcion} y no la tenemos en el menu`);
}

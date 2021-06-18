//Operaciones +-*/
var A = parseInt(prompt("Numero A:"));
var B = parseInt(prompt("Numero B:"));
var operacion = prompt("Operacion (+ | - | / | *):");

switch (operacion) {
  case "+":
    console.log(A + B);
    break;
  case "-":
    console.log(A - B);
    break;
  case "*":
    console.log(A * B);
    break;
  case "/":
    console.log(A / B);
    break;
}

// if (operacion == "+") {
//   console.log(A + B);
// }
// if (operacion == "-") {
//   console.log(A - B);
// }
// if (operacion == "*") {
//   console.log(A * B);
// }
// if (operacion == "/") {
//   console.log(A / B);
// }

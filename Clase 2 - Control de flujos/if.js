//If = Si pasa algo entonces podemos tomar dos caminos, el verdadero o el falso

var verdadero = true;
//tenemos un camino de verdad y uno de falso
if (verdadero) {
  //Camino verdadero => solo si queremos que pase algo
  console.log("es verdadero");
}

//Imaginemos que deseamos solicitar los datos del usuario solo si en nuestro
//sistema tenemos una variable global de control en verdadero
var SolicitarNombreDeUsuario = true;

if (SolicitarNombreDeUsuario) {
  var nombreDeUsuario = prompt("Ingrese su nombre:");
  alert(`ingreso el nombre: ${nombreDeUsuario}`);
} else {
  alert(`No es necesario ingresar tu nombre de usuario`);
}

// Operador igual
var A = 1;
var B = 1;

var AigualB = A == B; //Esto retorna un booleano si son iguales
//Operador distintos
var A = 1;
var B = 1;

var AdistintosB = A != B;

//Logica avazada

var respuesta = prompt("Te gusta el chocolate? (si/no):");
var siLeGusta = respuesta == "si";

if (siLeGusta) {
  alert("Felicidades, te ganaste una torta de chocolate");
} else {
  alert("Gracias por participar");
}

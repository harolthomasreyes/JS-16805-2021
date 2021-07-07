var usuarioActual;

const cargarUsuario = (event) => {
  var txtUserName = document.getElementById("txtUserName");
  let nombreDeUsuario = event.target.value;
  usuarioActual = new Usuario(nombreDeUsuario, []);

  //2) debemos cargar el usuario que usara el sistema
  mostrarNombreUsuario(usuarioActual);
};

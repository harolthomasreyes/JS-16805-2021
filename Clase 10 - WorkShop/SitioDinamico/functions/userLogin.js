const cargarUsuario = (event) => {
  let nombreDeUsuario = event.target.value;
  usuarioActual = new Usuario(nombreDeUsuario, []);

  //2) debemos cargar el usuario que usara el sistema
  mostrarNombreUsuario();
};

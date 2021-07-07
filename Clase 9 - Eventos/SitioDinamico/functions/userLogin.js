const cargarUsuario = () => {
  let nombreDeUsuario = prompt("Ingresa tu nombre:");
  let usuarioActual = new Usuario(nombreDeUsuario, []);
  return usuarioActual;
};

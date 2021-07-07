const cargarAcciones = () => {
  //1) debemos tener acciones cargadas
  let accionYPF = new Acciones("ypf", 72);
  let accionGG = new Acciones("google", 1000);
  let accionTele = new Acciones("telecentro", 80);

  return [accionYPF, accionGG, accionTele];
};

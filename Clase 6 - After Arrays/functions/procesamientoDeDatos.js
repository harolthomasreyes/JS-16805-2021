const procesarDatos = () => {
  //filtramos los esenciales
  soloPersonasEsenciales = personas.filter((p) => p.esencial);
  //filtramos los NO esenciales
  soloPersonasNOEsenciales = personas.filter((p) => !p.esencial);
};

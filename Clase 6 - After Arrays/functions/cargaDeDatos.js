const CargaDeDatos = () => {
  //Cargar personas a ser vacinadas
  while (true) {
    //Seccion de persona
    let pNombre = prompt("ingresa el nombre:");

    //Para tener un corte
    if (pNombre == "") break;

    let pDNI = parseInt(prompt("ingresa el DNI:"));
    let pEdad = parseInt(prompt("ingresa el edad:"));
    //Seccion de profesion
    let pTipo = prompt("ingresa el Tipo:");
    let pIngreso = parseInt(prompt("ingresa el Ingreso:"));
    //Seccion de domicilio
    let pCalle = prompt("ingresa el Calle:");
    let pNumero = parseInt(prompt("ingresa el Numero :"));
    let pLocalidad = prompt("ingresa el Localidad:");
    let pProvincia = prompt("ingresa el Provincia:");

    let profesion = new Profesion(pTipo, pIngreso);
    let domicilio = new Domicilio(pCalle, pNumero, pLocalidad, pProvincia);
    let persona = new Persona(pNombre, pDNI, pEdad, profesion, domicilio);
    //Guardamos la persona a ser vacunada
    personas.push(persona);
  }
};

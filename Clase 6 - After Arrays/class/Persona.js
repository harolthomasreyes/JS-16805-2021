class Persona {
  constructor(pNombre, pDNI, pEdad, pProfesionObj, pDomicilioObj) {
    this.nombre = pNombre;
    this.DNI = pDNI;
    this.edad = pEdad;
    this.profesion = pProfesionObj;
    this.domicilio = pDomicilioObj;
    this.esencial =
      redList.find((elem) => elem === this.profesion.tipo) != undefined;
  }
}

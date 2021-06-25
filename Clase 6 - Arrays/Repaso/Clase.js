var ladrilloV1 = {
  largo: 10,
  ancho: 20,
  alto: 21.33333,
  peso: 25,
  color: "Rojo",
  Tipo: true, //Macizo
};

//Moldeador de tipo clase
//1) Siempre se ejecuta el constructor primero
class LadrilloMoldeadorClass {
  constructor(pLargo, pAncho, pAlto, pPeso, pColor, pTipo) {
    this.largo = pLargo;
    this.ancho = pAncho;
    this.alto = pAlto;
    this.peso = pPeso;
    this.color = pColor;
    this.tipo = pTipo;
    this.diametro = pLargo * pAncho * pAlto;
  }

  mostrarDiametro() {
    alert(this.diametro);
  }
}

var ladrillo = new LadrilloMoldeadorClass(1, 2, 3, 4, "Verde", false);

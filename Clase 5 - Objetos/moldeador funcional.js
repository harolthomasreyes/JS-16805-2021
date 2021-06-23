//Objeto V1
var ladrilloV1 = {
  largo: 10,
  ancho: 20,
  alto: 21.33333,
  peso: 25,
  color: "Rojo",
  Tipo: true, //Macizo
};
//Moldeador
function LadrilloMoldeador(pLargo, pAncho, pAlto, pPeso, pColor, pTipo) {
  this.largo = pLargo;
  this.ancho = pAncho;
  this.alto = pAlto;
  this.peso = pPeso;
  this.color = pColor;
  this.tipo = pTipo;
  this.diametro = pLargo * pAncho * pAlto;
}

//Objeto V2
var ladrilloV2 = {
  medidas: { largo: 10, ancho: 20, alto: 21.33333 },
  peso: 25,
  color: "Rojo",
  Tipo: true, //Macizo
};

function LadrilloMoldeadorV2(pLargo, pAncho, pAlto, pPeso, pColor, pTipo) {
  this.medidas = { largo: pLargo, ancho: pAncho, alto: pAlto };
  this.peso = pPeso;
  this.color = pColor;
  this.tipo = pTipo;
  this.diametro = pLargo * pAncho * pAlto;
  //Funciones
  this.mostrarDiametro = function () {
    alert(this.diametro);
  };
}

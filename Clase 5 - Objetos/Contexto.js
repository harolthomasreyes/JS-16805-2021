function LadrilloMoldeadorV2(pLargo, pAncho, pAlto, pPeso, pColor, pTipo) {
  this.medidas = { largo: pLargo, ancho: pAncho, alto: pAlto };
  this.peso = pPeso;
  this.color = pColor;
  this.tipo = pTipo;
  this.diametro = pLargo * pAncho * pAlto;
  //Funciones
  this.mostrarThis = function () {
    //Nivel 1
    console.log("Nivel 1", this);
    return function () {
      // () => hereda el contexto
      //Nivel 2
      console.log("Nivel 2", this);
    };
  };
}

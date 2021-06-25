//V1
class Calculadora {
  constructor(pNumero1, pNumero2) {
    this.numero1 = pNumero1;
    this.numero2 = pNumero2;
  }

  suma() {
    return this.numero1 + this.numero2;
  }
  resta() {
    return this.numero1 - this.numero2;
  }
  mult() {
    return this.numero1 * this.numero2;
  }
  div() {
    return this.numero1 / this.numero2;
  }
}
//V2
class Calculadora {
  constructor() {}

  suma(pNumero1, pNumero2) {
    return pNumero1 + pNumero2;
  }
  resta(pNumero1, pNumero2) {
    return pNumero1 - pNumero2;
  }
  mult(pNumero1, pNumero2) {
    return pNumero1 * pNumero2;
  }
  div(pNumero1, pNumero2) {
    return pNumero1 / pNumero2;
  }
}

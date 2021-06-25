class SerVivo {
  constructor() {
    this.estado = "vivo";
  }

  Estado() {
    console.log(this.estado);
  }
}

class Animal extends SerVivo {
  constructor(pRaza) {
    super();
    this.raza = pRaza;
  }

  comunicar() {
    console.log(this.raza);
  }
}

class Gato extends Animal {
  constructor(pRaza) {
    super();
    this.raza = pRaza;
    this.patas = 4;
  }

  ronronear() {
    console.log("miau...");
  }
}

var garfiel = new Gato("negro");
garfiel instanceof Animal;
//true
ladrillo instanceof Animal;
//false

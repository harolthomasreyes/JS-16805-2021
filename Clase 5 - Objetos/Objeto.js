var ladrilloV1 = {
  largo: 10,
  ancho: 20,
  alto: 21.33333,
  peso: 25,
  color: "Rojo",
  Tipo: true, //Macizo
};
console.log("ladrilloV1:", ladrilloV1);
console.log("ladrilloV1 ancho:", ladrilloV1.ancho);

var ladrilloV2 = {
  medidas: { largo: 10, ancho: 20, alto: 21.33333 },
  peso: 25,
  color: "Rojo",
  Tipo: true, //Macizo
};
console.log("ladrilloV2:", ladrilloV2);
console.log("ladrilloV2 alto:", ladrilloV2.medidas.alto);

//Tipo de busquedas en las propiedades
//V1
ladrilloV1.color;
//V2
ladrilloV2["medidas"].largo;

//Como agregar propiedades de forma dinamica una vez ya creado el objeto
ladrilloV1.material = "Barro";
ladrilloV1["transporte"] = "ANSI";

//Machete spread operator
//copia todas las propiedades de ladrilloV1 en un nuevo obj literal con una propiedad mas
let ladrilloV2 = { nombre: "Mentol", ...ladrilloV1 };

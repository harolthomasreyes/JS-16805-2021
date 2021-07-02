var numero1 = document.getElementById("n1");
var numero2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");

numero1.innerHTML = "120";
numero2.innerHTML = "80";
resultado.innerHTML = `<p>${
  parseInt(numero1.innerText) + parseInt(numero2.innerText)
}</p>`;

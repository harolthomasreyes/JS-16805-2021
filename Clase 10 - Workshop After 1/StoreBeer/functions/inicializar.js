const crearSectores = () => {
  divIzquierdo.setAttribute("class", "izquierda");
  divDerecho.setAttribute("class", "derecha");

  document.body.append(divIzquierdo);
  document.body.append(divDerecho);
};

//5) cargar array proveniente de la caja de texto
const asignarValorAArray = () => {
  let txtNombre = document.getElementById("txtNombre");
  valoresDeLaLista.push(txtNombre.value);
  txtNombre.value = "";
  txtNombre.focus();
  crearListaDinamica();
};

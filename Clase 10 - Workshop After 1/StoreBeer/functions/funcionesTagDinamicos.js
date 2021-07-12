// 6) volcar en una lista todos los items cargados desde la caja de texto pero la llamamos desde el click
const crearListaDinamica = () => {
  var selectCustom = `<select id='selectLista' onchange='alert(event.target.value)' >`;
  selectCustom += `<option value='default'>(seleccione)</option>`;
  valoresDeLaLista.forEach(
    (accionAlias) =>
      (selectCustom += `<option value='${accionAlias}'>${accionAlias}</option>`)
  );
  selectCustom += `</select>`;

  divDerecho.innerHTML = selectCustom;
};

const insertarCajaDeTexto = () => {
  let nombreItem = document.createElement("input");
  nombreItem.setAttribute("type", "text");
  nombreItem.setAttribute("id", "txtNombre");
  divIzquierdo.append(nombreItem);
};

const insertarBoton = () => {
  let btnCargar = document.createElement("button");
  btnCargar.setAttribute("id", "btnCargar");
  btnCargar.innerHTML = "Cargar";
  //4) anclar envento 'click' para tomar valor de la caja de texto
  //V1
  btnCargar.onclick = asignarValorAArray;
  //V2
  //btnCargar.setAttribute("onclick", "asignarValorAArray()");
  divIzquierdo.append(btnCargar);
};

const productLoading = () => {
  let vistaProductos = "";
  let productsList = JSON.parse(localStorage.getItem(keyLocalStorageProducts));

  productsList.forEach(
    (p) =>
      (vistaProductos += `
    <div id='${p.productId}' class="card d-inline-flex p-2" style="width: 18rem;">
        <img class="card-img-top" src="${p.productImage}" alt="${p.productName}">
        <div class="card-body">
        <h5 class="card-title">${p.productName}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Stock: ${p.productStock}</li>
        <li class="list-group-item">Precio: ${p.productPrice}</li>
        <li class="list-group-item">Oferta: ${p.productSalePrice}</li>
        </ul>
        <div class="card-body">
        <button onclick="Comprar(${p.productId})" type="button" class="btn btn-info">Comprar</button> 
        </div>
    </div>`)
  );

  //document.getElementById("details").innerHTML = vistaProductos;
  $("#details").html(vistaProductos);
};

const cartLoading = () => {
  var vistaCart = "";
  userStore.products.forEach(
    (p) => (vistaCart += `<h1>${p.id}-${p.quantity}</h1>`)
  );

  //document.getElementById("detsummaryails").innerHTML = vistaCart;
  $("#summary").html(vistaCart);
};

const productLoading = () => {
  let vistaProductos = "";
  let productsList = JSON.parse(localStorage.getItem(keyLocalStorageProducts));

  $.get("../views/cardProduct.html", function (html) {
    productsList.forEach((p) => {
      let view = html;
      view = view.replaceAll("[id]", p.productId);
      view = view.replaceAll("[image]", p.productImage);
      view = view.replaceAll("[name]", p.productName);
      view = view.replaceAll("[stock]", p.productStock);
      view = view.replaceAll("[price]", p.productPrice);
      view = view.replaceAll("[salePrice]", p.productSalePrice);

      vistaProductos += view;
    });

    //document.getElementById("details").innerHTML = vistaProductos;
    $("#details").html(vistaProductos);
  });
};

const cartLoading = () => {
  var vistaCart = "";
  userStore.products.forEach(
    (p) => (vistaCart += `<h1>${p.id}-${p.quantity}</h1>`)
  );

  //document.getElementById("detsummaryails").innerHTML = vistaCart;
  $("#summary").html(vistaCart);
};

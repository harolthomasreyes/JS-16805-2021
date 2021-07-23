class UserStore {
  constructor(pName) {
    this.products = [];
    this.nombre = pName;
  }

  setProduct(pId) {
    //Buscar producto en la variable global
    let productsList = JSON.parse(
      localStorage.getItem(keyLocalStorageProducts)
    );
    let currentProduct = productsList.find((p) => p.productId === pId);

    //Disminuir el stock
    currentProduct.productStock -= 1;
    localStorage.setItem(keyLocalStorageProducts, JSON.stringify(productsList));

    //Guardar con un stock de 1 en la lista del usuario
    let newProductItem = new ProductItem(currentProduct.productId, 1);
    //Validar si existe o no en los productos del usuario
    if (this.products.find((p) => p.id === newProductItem.id) === undefined)
      this.products.push(newProductItem);
    else this.products.find((p) => p.id === newProductItem.id).quantity += 1;
  }
}

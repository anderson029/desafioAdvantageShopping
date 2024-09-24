class CartPageElements {

  shopNow = () => { return '.AddToCard > .ng-scope' };

  saveToCart = () => { return '.fixedBtn > .roboto-medium' };

  openCart = () => { return '#shoppingCartLink' };

  remove = () => { return'.remove'};

  removeDuplicate = () => { return ':nth-child(2) > :nth-child(6) > .actions > .remove'};
  
}
  
export default CartPageElements;
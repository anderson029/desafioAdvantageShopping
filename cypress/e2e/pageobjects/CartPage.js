import CartPageElements from '../elements/CartPageElements'
const cartElements = new CartPageElements

class CartPage {

  addProduct() {
    cy.get(cartElements.shopNow()).click();
    cy.get(cartElements.saveToCart()).click();
    cy.get(cartElements.openCart()).click();
  }

  removeProduct(){
    cy.get(cartElements.remove()).click();
  }

  validProductCart(title){
    cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').contains(title);
  }

  addProductDetails(){
    cy.get(cartElements.saveToCart()).click();
  }

  openCart(){
    cy.get(cartElements.openCart()).click();
  }

  addProductWhite(){
    cy.get(cartElements.shopNow()).click();
    cy.get('[ng-show="firstImageToShow"] > .WHITE').click();
    cy.get(cartElements.saveToCart()).click();
  }

  addProductRed(){
    cy.get('[ng-show="firstImageToShow"] > .RED').click();
    cy.get(cartElements.saveToCart()).click();
  }

  removeProductDuplicate(){
    cy.get(cartElements.removeDuplicate()).click();
  }

  addProductDuplicate(){
    cy.get(cartElements.shopNow()).click();
    cy.get('.plus').click();
    cy.get(cartElements.saveToCart()).click();
  }
}

export default CartPage; 
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../../pageobjects/HomePage';
const home = new HomePage;

import CartPage from '../../pageobjects/CartPage';
const cart = new CartPage;

Given("que estou autenticado com o usuário {string} e a senha {string}", (user, password) => {
  home.visitURl();

  home.login(user, password);
});

Given("tenho produtos adicionados no carrinho", () => {

  home.setProduct('HP Z3200 WIRELESS MOUSE');

  cy.get('.AddToCard > .ng-scope').click();
  cart.addProductDetails();
  cart.openCart();
});

When("vou para tela de pagamentos", () => {
  cy.get('#checkOutButton').click();
})

Then("valido a quantidade de produtos", () => {
  cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(2) > a > :nth-child(2)')
    .should('be.visible')
    .and('contain', '1');

  cart.openCart();
  cart.removeProduct();
})

Then("é exibido o endereço de entrega", () => {
  cy.get('[data-ng-show="user.address != \'\'"]')
  .should('be.visible')
  .contains('Singapura');

  cy.get('[data-ng-show="user.cityName != \'\'"]')
  .should('be.visible')
  .contains('São Paulo');

  cart.openCart();
  cart.removeProduct();

})

Then("visualizo o valor do produto, o valor do frete e o valor total da ordem", () => {
  cy.get('#userCart > #toolTipCart > :nth-child(1) > table > tbody > #product > :nth-child(3) > .price')
    .should('be.visible') 
    .and('contain', '$29.99'); 
  cy.get('#shippingCost')
    .should('be.visible') 
    .and('contain', '$0.00'); 
  

  cart.openCart();
  cart.removeProduct();
})

Given("tenho produtos adicionados no carrinho com frete pago", () => {

  home.setProduct('HP Z3200 WIRELESS MOUSE');


  cy.get('.AddToCard > .ng-scope').click();
  cy.get('.plus').click();

  cart.addProductDetails();
  cart.openCart();
});

Then("visualizo o valor do frete", () => {
  cy.get('#shippingCost')
    .should('be.visible') 
    .and('contain', '$50.00'); 
  
  cart.openCart();
  cart.removeProduct();
})
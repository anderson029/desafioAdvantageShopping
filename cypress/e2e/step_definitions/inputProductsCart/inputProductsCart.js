import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import HomePage from '../../pageobjects/HomePage';
import CartPage from '../../pageobjects/CartPage';
import RegisterUserPage from '../../pageobjects/RegisterUserPage';

const home = new HomePage;
const cart = new CartPage;
const registerUser = new RegisterUserPage;

before(() => {
  // Cria a conta do usuário
  registerUser.visitURl();
  registerUser.fillForm();
});

Given("que estou na plataforma de ecommerce advantageonlineshopping", () => {
  home.visitURl();
});

When("adiciono o produto",() => {
  home.setProduct('HP Z3200 WIRELESS MOUSE');
  cart.addProduct();
});

Then("o produto é adicionado ao carrinho", () =>{
  cart.validProductCart('HP Z3200 WIRELESS MOUSE');
  cart.removeProduct();
});

Given("autenticado com o usuário", () => {
  home.login(registerUser.getUsername(), registerUser.getPassword());
})

Given("que estou na página de uma categoria", () => {
  home.queryCategory();
});

When("escolho o produto", () => {
  home.newProduct();
});

Then("são exibidas as informações do produto permitindo adicionar ao carrinho", () => {
  cart.addProductDetails();
  cart.openCart();
  
  cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').contains('HP ELITEPAD 1000 G2 TABLET')

  cart.removeProduct();
});

Given("adiciono os produtos um de cada cor", () => {
  home.setProduct('HP Z3200 WIRELESS MOUSE');

  cart.addProductWhite();

  cart.addProductRed();
});

When("excluo um produto", () => {
  cart.openCart();

  cart.removeProductDuplicate();
})

Then("é permitido a exclusão exibindo as informações somente do produto restante", () => {
  cy.get('tr.ng-scope > :nth-child(2) > .roboto-regular').contains("HP Z3200 WIRELESS MOUSE");
  cy.get('.productColor').should('have.attr', 'title', 'RED');

  cart.removeProduct();
});

Given("adiciono os produtos iguais", () => {
  home.setProduct('HP Z3200 WIRELESS MOUSE{enter}')

  cart.addProductDuplicate();
});

When("excluo o produto",() => {
  cart.openCart();
  cart.removeProduct();
});

Then("é apresentado o carrinho vazio", () => {
  cy.get('.bigEmptyCart > .roboto-bold').contains('Your shopping cart is empty')
});

Given("que tenha um estoque de 10 itens de um produto", () => {
  home.setProduct("HP Z3200 WIRELESS MOUSE");
  cy.wait(3000);
  cy.get('.AddToCard > .ng-scope').click(); 
});

When("tento adicionar 12 itens no carrinho", () => {
  Cypress._.times(11, () => {
    cy.get('.plus').click();
  });
  
  cart.addProductDetails();
});

Then("é exibida a mensagem e o limite do estoque é adicionado no carrinho.", () => {
  cy.get('#productProperties > label.ng-binding').should('be.visible');
  cart.openCart();
  cy.get(':nth-child(5) > .ng-binding').contains(10);

  cart.removeProduct();
});




  
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../pageobjects/HomePage';
import RegisterUserPage from '../../pageobjects/RegisterUserPage';

const home = new HomePage;
const registerUser = new RegisterUserPage;

before(() => {
  // Cria a conta do usuário
  registerUser.visitURl();
  registerUser.fillForm();
});

Given("que acesso a url https://advantageonlineshopping.com/#/", () => {
  home.visitURl();
})

When("informo o produto HP Z3200 WIRELESS MOUSE", ()=> {
  home.setProduct('HP Z3200 WIRELESS MOUSE');
})

Then("é apresentado o produto correspondente", ()=> {
  home.validProduct('HP Z3200 WIRELESS MOUSE');
})

Given("autenticado com o usuário", () => {
  home.login(registerUser.getUsername(), registerUser.getPassword());
})

When("acesso a categoria Tablets", () => {
  home.queryCategory();
})

Then("é apresentada a lista de produtos relacionada à categoria tablets", () => {
  home.verifyProduct('TABLETS');
})

When("informo o nome de um produto que não existe",()=>{
  home.setProduct('xpto');
})

Then("é apresentado na tela, a mensagem de produto não encontrado", () => {
  home.productNotFound('No results for "xpto"');
})
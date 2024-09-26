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

Given("que acesso o site do e-commerce advantageonlineshopping", () => {
  home.visitURl();
})

When("informo o produto", ()=> {
  home.setProduct('HP Z3200 WIRELESS MOUSE');
})

Then("é apresentado o produto correspondente", ()=> {
  home.validProduct('HP Z3200 WIRELESS MOUSE');
})

Given("autenticado com o usuário", () => {
  home.login(registerUser.getUsername(), registerUser.getPassword());
})

When("escolho por alguma categoria", () => {
  home.queryCategory();
})

Then("é apresentada a lista de produtos relacionados à categoria correspondente", () => {
  home.verifyProduct('TABLETS');
})

When("informo o nome de um produto que não existe",()=>{
  home.setProduct('xpto');
})

Then("é apresentado na tela, a mensagem de produto não encontrado", () => {
  home.productNotFound('No results for "xpto"');
})
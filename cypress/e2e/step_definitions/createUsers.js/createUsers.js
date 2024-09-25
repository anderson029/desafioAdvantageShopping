import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import RegisterUserPage from '../../pageobjects/RegisterUserPage';
const registerUser = new RegisterUserPage;

Given("que acesso o site do ecommerce", () => {
  registerUser.visitURl();  
})

// When("preencho o formulário", () => {
//   // registerUser.fillForm();  // Preenche o formulário de registro
// })

// Then("minha conta é criada", () => {
//   // registerUser.validateAccountCreation();  // Valida se a conta foi criada
// })

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import RegisterUserPage from '../../pageobjects/RegisterUserPage';
const registerUser = new RegisterUserPage;

Given("que acesso o site do ecommerce", () =>{
  registerUser.visitURl();
})

When("preencho o formulário", () =>{
  registerUser.fillForm();
})

Then("minha conta é criada", () =>{
  cy.log('New user created successfully.');
})

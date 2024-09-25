import RegisterElements from '../elements/RegisterElements'
const registerElements = new RegisterElements
const url = Cypress.config("baseUrl")

class RegisterUserPage {
  
  visitURl() {
    cy.visit("/#/register");
  }
}

export default RegisterUserPage; 
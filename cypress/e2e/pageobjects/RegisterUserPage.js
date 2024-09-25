import RegisterElements from '../elements/RegisterElements'

const registerElements = new RegisterElements

class RegisterUserPage {

  constructor() {
    this.username = ''; 
    this.password = ''; 
  }
  
  visitURl() {
    cy.visit("/#/register");
  }

  fillForm(){
    cy.fixture('userForm').then((userData) => {
      this.username = `ADMIN${Math.floor(Math.random() * 100000)}`; 
      this.password = userData.password;

      const uniqueUsername = `ADMIN${Math.floor(Math.random() * 100000)}`;
      cy.get(registerElements.inputUsername()).type(this.username);
      cy.get(registerElements.inputEmail()).type(userData.email);
      cy.get(registerElements.inputPassword()).type(this.password);
      cy.get(registerElements.inputConfirmPassword()).type(this.password);
      cy.get(registerElements.inputFirstName()).type(userData.firstName);
      cy.get(registerElements.inputLastName()).type(userData.lastName);
      cy.get(registerElements.inputPhoneNumber()).type(userData.phoneNumber);
      cy.get(registerElements.selectCountry()).select(userData.country);
      cy.get(registerElements.inputCity()).type(userData.city);
      cy.get(registerElements.inputAddress()).type(userData.address);
      cy.get(registerElements.inputState()).type(userData.state);
      cy.get(registerElements.inputZipCode()).type(userData.zipCode);
      cy.get(registerElements.check()).click();
      cy.get(registerElements.buttonRegister()).click();
    });
  }

  getUsername() {
    return this.username; 
  }

  getPassword() {
    return this.password;
  }
}

export default RegisterUserPage; 
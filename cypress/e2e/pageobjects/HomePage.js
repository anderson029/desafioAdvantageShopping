import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
  
  visitURl() {
    cy.visit(url)
  }

  login(user, password){
    cy.get(homeElements.modalLogin()).click();
    cy.get(homeElements.inputUsername()).type(user);
    cy.get(homeElements.inputPassword()).type(password);
    cy.get(homeElements.signIn()).click();
  }

  setProduct(titleProduct){
    cy.get(homeElements.search())
      .should('be.visible')
      .type(`${titleProduct}{enter}`);
  }

  validProduct(titleProduct){
    cy.get(homeElements.selectProduct())
      .should('be.visible')
      .click();
    cy.contains(titleProduct); 
    cy.screenshot("consulta de produto");
  }

  queryCategory(){
    cy.get(homeElements.tablets()).click();
  }

  verifyProduct(type){
    cy.get(homeElements.categoryTitle()).contains(type)  
  }

  productNotFound(message){
    cy.get(homeElements.messageNotFound()).contains(message);
    cy.screenshot('produto não encontrado');
  }

  selectProduct(){
    cy.get(homeElements.selectProduct()).click();
  }

  newProduct(){
    cy.get(homeElements.newProduct()).click();
  }


}

export default HomePage; 
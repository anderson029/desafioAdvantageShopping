class HomeElements {
  
  search = () => { return '#mobileSearch > .roboto-medium' };

  selectProduct = () => {return 'li.ng-scope > :nth-child(5)'};

  newProduct = () => {return ':nth-child(1) > :nth-child(4) > .productName' }

  modalLogin = () => {return '#menuUserLink'};

  inputUsername = () => {return '[a-hint="Username"] > .inputContainer > .ng-pristine'};

  inputPassword = () => {return '[a-hint="Password"] > .inputContainer > .ng-pristine'};

  signIn = () => {return '#sign_in_btn'};

  tablets = () => {return '#tabletsImg'};

  categoryTitle = () =>{return '.categoryTitle'};

  messageNotFound = () =>{return '.noProducts > .ng-binding'};
  
}
  
export default HomeElements;
class RegisterElements {
    //Account details
    inputUsername = () => { return ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'};
    inputEmail = () => { return '[sec-name="userEmail"] > .inputContainer > .ng-pristine'};
    inputPassword = () => { return ':nth-child(3) > [a-hint="Password"] > .inputContainer > label'};
    inputConfirmPassword = () => { return '[a-hint="Confirm password"] > .inputContainer > label'};

    //Personal details
    inputFirstName = () => { return '[sec-name="userFirstName"] > .inputContainer > label' };
    inputLastName = () => { return '[sec-name="userLastName"] > .inputContainer > label'};
    inputPhoneNumber = () => { return ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label'};

    //Adress
    selectCountry = () => { return '[sec-name="userCountry"] > .inputContainer > .ng-pristine' };
    inputCity = () => { return '[sec-name="userCity"] > .inputContainer > label'};
    inputAddress = () => { return '[sec-name="userAdress"] > .inputContainer > label'};
    inputState = () => { return '[sec-name="userState"] > .inputContainer > label'};
    inputZipCode = () => { return '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label' };

    //Check
    check = () => { return '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'};
    buttonRegister = () => { return '#register_btn'}; 
  }
    
  export default RegisterElements;
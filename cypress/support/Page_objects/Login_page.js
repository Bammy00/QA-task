class Login {
    
    getEmail(){
       return  cy.get('input[type="email"]')
    }

    getPassword(){
        return cy.get('input[placeholder="Password"]')
    }

    clickLoginButton(){
        return cy.get('button[type="submit"]').click()
    }

}
export default Login;



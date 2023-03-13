import Login from '../support/page_objects/login_page';
import {randomPassword, randomEmail, Password, Email} from '../fixtures/example.json';


const loginPage = new Login();


describe('Login Test', () => {
    beforeEach(() => {
      // visit the website
      //Check cypress.config.js file for base url
      cy.visit('/')
  })

  it('Successful login with valid credentials', () => {
    // Enter a valid email
    loginPage.getEmail().type(Email)
    // Enter a valid password
    loginPage.getPassword().type(Password)
    // Click the login button
    loginPage.clickLoginButton()
    // Check that the user is logged in by checking the url
    cy.url().should('eq', 'https://qa-test.dmzrwbdiwhv33.amplifyapp.com/hmo/dashboard')
  })
  

  it('Unsuccessful login with invalid email and Invalid password', () => {
    // Enter an invalid email
    loginPage.getEmail().type(randomEmail)
      // Enter a valid Password
    loginPage.getPassword().type(randomPassword)
    loginPage.clickLoginButton()
    // Assertion: Check that an error message is displayed
    cy.get('#swal2-title').contains('Login Failed') .should('be.visible')
  })
  

  
    it('Unsuccessful login with invalid email and Valid password', () => {
      // Enter an invalid email
      loginPage.getEmail().type(randomEmail)
        // Enter a valid Password
      loginPage.getPassword().type(Password)
      loginPage.clickLoginButton()
      // Assertion: Check that an error message is displayed
      cy.get('#swal2-title').contains('Login Failed') .should('be.visible')
    })



    it('Unsuccessful login with Valid email and Invalid password', () => {
      loginPage.getEmail().type(Email)
      // Enter an invalid password
      loginPage.getPassword().type(randomPassword)
      loginPage.clickLoginButton()
      // Assertion:  Check that an error message is displayed
      cy.get('#swal2-title').contains('Login Failed') .should('be.visible')
    })


  it('Verify that invalid email input field is not displayed', () => {
    // Type email and password values into respective fields
    loginPage.getEmail().type(Email)
    loginPage.getPassword().type(randomPassword)
    // Click the login button
    loginPage.clickLoginButton()
    // Verify that there are no invalid email input fields displayed on the page
    // Here, 'cy.get' command is used to get all the input fields of type 'email' with invalid status and then 
    // 'should' command is used to assert that there are no invalid email input fields on the page
    cy.get('input[type="email"]:invalid').should('have.length', 0)
  })
  


})

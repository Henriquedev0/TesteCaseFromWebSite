
describe('Testing all the website', () => {

 beforeEach(() => {
 cy.visit('https://automationexercise.com/');
 })

  it('Test Case 1: Register User', () => {

    cy.get('body')
    .should('be.visible')
   

    cy.contains('Signup / Login').click()

    cy.get('h2').contains('New User Signup!')
    .should('be.visible')

    cy.get('[data-qa="signup-name"]').type('Henrique');

    cy.get('[data-qa="signup-email"]').type('Emailxxx1@gmail.com');
  
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('[data-qa="password"]').type('123456');
  })

})
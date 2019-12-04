//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE
//import { REG } from '../../fixtures/constants'
//import { authPage } from '../../page_object/register.page'
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE


//pocinje nas describe u koji smestamo sve testove
describe('Register', function() {
    
    beforeEach(() => {
        cy.visit('/')
        //cy.contains('Register').click()
    })

    

it('TC 1 - Visit Gradebook and check url if contains register', function() {
    //cy.visit('/')
    cy.contains ('Register').click()
    cy.url().should('include', 'register')

})



it('TC 2 - Visit Gradebook and do registration with valid data', function() {
    //cy.visit('/')
    cy.contains('Register').click()
    //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
    cy.get('input[id="firstName"]').type('ivana')
    cy.get('input[id="lastName"]').type('pejic') 
    cy.get('input[id="password"]').type('ivana1234')
    cy.get('input[id="passwordConfirmation"]').type('ivana1234')
    cy.get('input[id="email"]').type('ivana4001@gmail.com')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
})

 it('TC 3 - Visit Gradebook and Sign IN with valid data', function () {
        //cy.visit('/')
        cy.contains('Sign in').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
        //cy.contains('Register').click()
        cy.get('input[name="email"]').type('ivana4001@gmail.com')
        cy.get('input[type="password"]').type('ivana4001')
        cy.get('[type="Submit"]').click()
 })

 it.only('TC 4 - Visit Gradebook and check Home page', function () {
        //cy.visit('/')
        cy.contains('Sign in').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
        //cy.contains('Register').click()
        cy.get('input[name="email"]').type('ivana4001@gmail.com')
        cy.get('input[type="password"]').type('ivana4001')
        cy.get('[type="Submit"]').click()
        cy.contains('Next').click()
        cy.contains('Previous').click()
        //search
        cy.get('input[type="password"]').type('ivana')
        cy.contains('Search').click()
    })




})

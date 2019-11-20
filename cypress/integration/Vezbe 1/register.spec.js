import { CREDO } from '../../fixtures/constants'
import { authPage } from '../../page_object/register.page'
describe('My Second Test', function(){
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Register').click()
    })
    it('TC - 01 Gallery Register', function() {
        //cy.get('input[id="first-name"]').type('olivera')
        //cy.get('input[id="last-name"]').type('delic')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 02 GalleryApp Register', function(){
        cy.url().should('include', '/register')
    })
    it('TC - 03 Checkbox', function() {
        authPage.register(' ', ' ', ' ', ' ', ' ')
        cy.get('input[type="checkbox"]').check()
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 04 Register with valid credentials and uncheck checkbox', function() {
        authPage.register(CREDO.FIRST_NAME, CREDO.LAST_NAME, CREDO.EMAIL, CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        cy.get('button[type="submit"]').click()*/   
    })
    it('TC - 04 Register without first name, with valid credentials and uncheck checkbox', function() {
        authPage.register(' ', CREDO.LAST_NAME, CREDO.EMAIL, CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        cy.get('button[type="submit"]').click()*/   
        
    })
    it('TC - 05 Register without any credentials and without checking checkbox', function(){
        authPage.register(' ', ' ', ' ', ' ', ' ')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 06 Register without any credentials and with checked checkbox', function(){
        authPage.register(' ', ' ', ' ', ' ', ' ')
        cy.get('input[type="checkbox"]').check()
        //cy.get('button[type="submit"]').click()
        authPage.email.then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
    it('TC - 07 Register with First name', function(){
        authPage.register(CREDO.FIRST_NAME, ' ', ' ', ' ', ' ')
        //cy.get('input[id="first-name"]').type('Olivera')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 08 Register with Last name', function(){
        authPage.register(' ', CREDO.LAST_NAME, ' ', ' ', ' ')
        //cy.get('input[id="last-name"]').type('Delic')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 09 Register with Email', function(){
        authPage.register(' ', ' ', CREDO.EMAIL, ' ', ' ')
        //cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 10 Register with Password and confirmed password', function(){
        authPage.register(' ', ' ', ' ', CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        //cy.get('input[id="password"]').type('oljaiva2007')
        //cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 11 Register with Password', function(){
        authPage.register(' ', ' ', ' ', CREDO.PASSWORD, ' ')
        //cy.get('input[id="password"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 12 Register with Password:confirmed', function(){
        authPage.register(' ', ' ', ' ', ' ', CREDO.PASSWORD_CONFIRMED)
        //cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 13 Register with invalid password confirmation', function(){
        authPage.register(' ', ' ', ' ', ' ', 'jeja')
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva')
        cy.get('button[type="submit"]').click()
        cy.get('.alert-danger').should('have.text','The email has already been taken.The password confirmation does not match.')*/
    })
    
    
})




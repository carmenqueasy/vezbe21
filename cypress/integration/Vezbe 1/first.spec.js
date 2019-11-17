import { EMAIL }from '../../fixtures/constants'
import { authPage } from '../../page_object/login.page'

//push obavezan na git


describe('My First Test', function() {
    
    
    //it('Does not do much!', function() {
      //expect(true).to.equal(true)
    //})



    //it('Visits the Kitchen Sink', function() {
        //cy.visit('https://example.cypress.io')
        //cy.contains ('type').click()
        //cy.url().should('include', '/commands/actions')
    //})
//funkcija koja se poziva u testovima ispod
beforeEach(() => {
    cy.visit('/')
    cy.contains ('Login').click()
})

before(() => {
    cy.visit('/')
})




it('TC1 - Visit My Gallery Login', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    cy.url().should('include', '/login')
})


it('TC2 - Visit My Gallery Register', function() {
    cy.visit('/')
    cy.contains ('Register').click()
    cy.url().should('include', '/register')

})

it('TC3 - Visit My Gallery pozitivno', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD)
    //ova fnckija gore menja ove tri stvari ispod email, pass i submit
    //authPage.email.type(EMAIL.EXISTING)
    //authPage.password.type(EMAIL.PASSWORD)
    //authPage.submit.click()
})

it('TC4 - Visit My Gallery negativan invalid pass', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    //ubacujemo onu funckiju koja menja email i pass i submit
    authPage.login('ivana4001@gmail.com','ttttt')
    //alert smo napravili isto u page
    authPage.alert.should ('have.text' , 'Bad Credentials')
})

it('TC5 - Visit My Gallery negativan invalid email', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    cy.get('input[id="email"]').type('ivi2@gmail.com')
    cy.get('input[id="password"]').type('ivana123')
    authPage.submit.click()
    cy.get('.alert-danger').should ('have.text' , 'Bad Credentials')

})

it('TC6 - Visit My Gallery negativan prazan email', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    cy.get('input[id="email"]').type('ivakakakak@sfsf.com')
    cy.get('input[id="password"]').type('ivana123')
    authPage.submit.click()
    cy.get('.alert-danger').should ('have.text' , 'Bad Credentials')

})

it('TC7 - Visit My Gallery negativan prazan pass i email', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    cy.get('input[id="email"]').type('ivakakakak@sfsf.com')
    cy.get('input[id="password"]').type('sd')
    authPage.submit.click()
    cy.get('.alert-danger').should ('have.text' , 'Bad Credentials')

})

it('TC8 - Visit My Gallery negativan prazan pass', function() {
    //cy.visit('/')
    //cy.contains ('Login').click()
    cy.get('input[id="email"]').type('ivi@gmail.com')
    cy.get('input[id="password"]').type('ssd')
    authPage.submit.click()
    cy.get('.alert-danger').should ('have.text' , 'Bad Credentials')

})
})

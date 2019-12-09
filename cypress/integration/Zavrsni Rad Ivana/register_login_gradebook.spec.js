
import { LOG } from '../../fixtures/constants'
import { authPage } from '../../page_object/login_gradebook.page'
import { rPage } from '../../page_object/register_gradebook.page'
import { REGG } from '../../fixtures/constants'
import { createGB } from '../../page_object/create_gradebook.page'
import { GB } from '../../fixtures/constants'
import { createPR } from '../../page_object/create_professor.page'
import { PROF } from '../../fixtures/constants'
import { randomFirstN } from '../../utils'
import { randomLastN } from '../../utils'

describe('Register', function() {
    
    beforeEach(() => {
        cy.visit('/')
        
    })

    

it('TC 1 - Visit Online Gradebook and check url if contains register', function() {
  
    cy.contains ('Register').click()
    cy.url().should('include', 'register')

})



    it('TC 2 - Visit Online Gradebook and do registration with valid data', function() {
 
    cy.contains('Register').click()
    rPage.register(REGG.firstName, REGG.lastName, REGG.password, REGG.passwordConfirmation, REGG.email)
    cy.get('[type="submit"]').click()
    cy.url().should('include', 'gradebooks')
})

    it('TC 3 - Visit Online Gradebook and do registration with invalid data - wrong email', function () {

    cy.contains('Register').click()
     rPage.register(REGG.firstName, REGG.lastName, REGG.password, REGG.passwordConfirmation, 'ivana@')
     cy.wait(10000)
    cy.get('[type="submit"]').click()
    cy.url().should('not.include', 'gradebooks')


 })

    it('TC 4 - Visit Online Gradebook and do registration with invalid data - wrong password', function () {

        cy.contains('Register').click()
        rPage.register(REGG.firstName, REGG.lastName, 'ivana', 'ivana', REGG.email)
        cy.wait(10000)
        cy.get('[type="submit"]').click()
        cy.url().should('not.include', 'gradebooks')


    })

    it('TC 5 - Visit Online Gradebook and do registration with invalid data - wrong conf.password', function () {

        cy.contains('Register').click()
        rPage.register(REGG.firstName, REGG.lastName, 'ivana123456', 'ivana123', REGG.email)
        cy.wait(10000)
        cy.get('[type="submit"]').click()
        cy.url().should('not.include', 'gradebooks')


    })


    it('TC 6 - Visit Online Gradebook and Sign IN with valid data', function () {
        
     cy.contains('Sign in').click()
     authPage.login(LOG.EMAIL, LOG.PASS)
     cy.url().should('include', 'gradebooks')
        
 })


    it('TC 7- Visit Online Gradebook and test if there is Sign out button', function () {

        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
        cy.wait(10000)
        cy.get('.nav-link').should('exist');
        
    })


    it('TC 8 - Visit Online Gradebook and test if there is NO Sign In button', function () {

        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
        cy.url().should('include', 'gradebooks')
        cy.get('.Sign in').should('not.exist');

    })


    it('TC 9 - Visit Online Gradebook and Sign IN with invalid data - wrong mail', function () {

        cy.contains('Sign in').click()
        authPage.login('jajdaj@akjad.com', LOG.PASS)
        cy.wait(10000)
        cy.url().should('not.include', 'gradebooks')
    })

    it('TC 10 - Visit Online Gradebook and Sign IN with invalid data - wrong password', function () {

        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, 'jajhdadJ')
        cy.wait(10000)
        cy.url().should('not.include', 'gradebooks')
    })
})
 


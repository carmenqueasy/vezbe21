
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

describe('Home Page and Filter', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
        
    })

    

it('TC 1 - Gradebook Home - check if there are main buttons', function() {
    
    cy.get('a[href*="/gradebooks"]').should('exist');
    cy.get('a[href*="/my-gradebook/9"]').should('exist');
    cy.get('a[href*="/create-gradebook"]').should('exist');
    cy.get('a[href*="/gradebooks#"]').should('exist');
    cy.get('a[href*="#"]').should('exist');
})
   
    
it('TC 2 - Visit Gradebook and test if there is Search option', function () {

    cy.get('.mt-3').should('exist');

})

    it('TC 3 - Visit Gradebook and test Search option without entering Gradebook', function () {

       
        cy.contains('Search').click()
        cy.url().should('include', 'gradebooks')
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        
    })
    
it('TC 4 - Visit Gradebook and test Search option with entering Gradebook', function () {

    cy.wait(1000)
    cy.get('input[type=text]').type('gagdda')
    cy.contains('Search').click()
    cy.get('.table-dark').children('tbody').should('contain', "gagdda")
    
})

    it('TC 5 - Visit Gradebook and test Search option with entering not created Gradebook', function () {

        cy.wait(1000)
        cy.get('input[type=text]').type('jelena jelena')
        cy.contains('Search').click()
        cy.get('.table-dark').children('tbody').should('not.contain', "jelena jelena")

    })


})
 


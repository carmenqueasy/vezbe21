
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

describe('Home page - Pagination', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
        
    })

    


 it('TC 1 - Visit Gradebook and check Next button', function () {
        
  
     cy.url().should('include', 'gradebooks')  
     cy.contains('Next').click()
     


      
 })

    it('TC 2 - Visit Gradebook and check if button Next exist and Previous button', function () {

   

        cy.contains('Next').click()
        cy.contains('Previous').click()
        cy.url().should('include', 'gradebooks')
    })



    it('TC 3 - Visit Gradebook - Pagination - 10 enetered gradebooks', function () {

      
        cy.url().should('include', 'gradebooks')
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').should("exist")
        
    })

    it('TC 4 - Visit Gradebook - Pagination with fixuteres 10 Gradebooks', function () {

        cy.url().should('include', 'gradebooks')
        cy.wait(10000)
        cy.server()
        cy.route('GET', Cypress.config('backendURL') + '/diaries?page=1', 'fixture:gradebook10.json').as('stub')
        cy.visit('/')
        cy.get('.table-dark').children('tbody').should('have.length', 10)
        cy.contains('Next').should("exist")
        
    })



})

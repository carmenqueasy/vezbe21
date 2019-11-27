//ovde radimo mockovanje stabovanje i tabamo sa onim fixtures sto smu ubacili count

import { authPage } from '../../page_object/login.page'
import { EMAIL }from '../../fixtures/constants'



describe('Create Gallery Testovi', function() {

    
    beforeEach(() => {
        
        cy.login(EMAIL.EXISTING, EMAIL.PASSWORD)
        //cy.contains('Create Gallery').click()
        cy.visit('/')
    })




    it('TC - 01 My Gallery page - All galleries pagination load more count 9', function() {

        
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery9.json').as('stub')
        cy.visit('/')
        //proveravamo da li ima loadbotton ovde na domu
        cy.get('.cell').eq(8).should('exist')
        cy.get('.cell').eq(9).should('not.exist')
        cy.get('.btn-custom').should('not.exist')


    })

    it('TC - 02 My Gallery page - All galleries pagination load more count 10', function() {

       
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
        cy.visit('/')
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')
        cy.get('.btn-custom').should('not.exist')
    })


    it('TC - 04 My gallery pagination count 12', function(){
        cy.server()
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery11.json').as('stub')
        cy.get('.btn-custom').click()
        cy.visit('/')
        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery1.json').as('stub')
        cy.visit('/')
        cy.get('.btn-custom').click()
        cy.get('.cell').eq(10).should('exist')
    
        
        
        
       
        //cy.get('.cell').eq(10).should('not.exist')
        //cy.get('.btn-custom').should('not.exist')

    })
    
    })
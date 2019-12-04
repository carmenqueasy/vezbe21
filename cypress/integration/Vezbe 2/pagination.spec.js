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
        cy.visit('/')

        cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery1.json').as('stub')
        
        cy.get('.btn-custom').click()
    })

        //Stubovati u prvom pozivu 10 galerija i staviti count na 11 da bi se uplailo load more dugme
        //U istom testu stubiovati i poziv ka page 2 stranici i u njemu uneti 3 galerije count 13


    it.only('TC - 05 My gallery pagination page 13', function () {
         cy.server()
         cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=1&term=', 'fixture:gallery10.json').as('stub')
         cy.get('.btn-custom').click()
         cy.visit('/')
         cy.route('GET', Cypress.config('backendUrl') + 'galleries?page=2&term=', 'fixture:gallery13.json').as('stub1')
         cy.visit('/')
            //cy.get('.cell').eq(2).should('exist') -- mora ici posle testa za button Load More
         cy.get('.btn-custom').should('not.exist')
         cy.get('.cell').eq(2).should('exist')
        
        
        
        
       
        //cy.get('.cell').eq(10).should('not.exist')
        //cy.get('.btn-custom').should('not.exist')

    })
    
    })
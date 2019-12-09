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


describe('Create Gradebook', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
    })

    

it('TC 1 - Open Create Gradebook page and check url', function() {
    
    cy.contains ('Create Gradebook').click()
    cy.url().should('include', 'create-gradebook')

})

it('TC 2 - Create gradebook with random professor and static title', function () {
      

    cy.contains('Create Gradebook').click()
    cy.wait(2000)
    cy.get('input[id="title"]').type('ivanatitlepejic')
    cy.get('#professor > option').eq(0)
        .then(element => cy.get('#professor').select(element.val()))
    cy.wait(2000)
    cy.contains('Submit').click()
    cy.wait(2000)
    cy.get('.form-control').type('ivanatitlepejic')

})

    it('TC 3 - Create gradebook with Title - 1 character - negative test', function () {

        cy.contains('Create Gradebook').click()
        cy.wait(2000)
        cy.get('input[id="title"]').type('i')
        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        cy.wait(2000)
        cy.contains('Submit').click()
        cy.wait(2000)
        cy.get('.alert-danger').should('contain', 'The title must be at least 2 characters' )
        cy.get('.alert-danger').should('exist');
        
    })
    it.only('TC 4 - Create gradebook with Title - more than 255 characters - negative test', function () {

        cy.contains('Create Gradebook').click()
        cy.wait(2000)
        cy.get('input[id="title"]').type('iplllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll')
        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        cy.wait(2000)
        cy.contains('Submit').click()
        cy.wait(2000)
        cy.get('.alert-danger').should('exist');

    })

  

})

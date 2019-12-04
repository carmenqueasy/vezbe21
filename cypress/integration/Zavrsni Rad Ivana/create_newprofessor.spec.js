//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE
//import { REG } from '../../fixtures/constants'
//import { authPage } from '../../page_object/register.page'
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE


//pocinje nas describe u koji smestamo sve testove
describe('Create New Professor', function() {
    
    beforeEach(() => {
        cy.visit('/')
        //cy.contains('Register').click()
        cy.contains('Sign in').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
        //cy.contains('Register').click()
        cy.get('input[name="email"]').type('ivana4001@gmail.com')
        cy.get('input[type="password"]').type('ivana4001')
        cy.get('[type="Submit"]').click()
    })

    

it('TC 1 - Open Create Professor page', function() {
    //cy.visit('/')
    cy.contains('Create Professor').click({ force: true })
    cy.url().should('include', 'create-professor')

})

it('TC 2 - Create professor with one image', function () {
        //cy.visit('/')
    cy.contains('Create Professor').click({ force: true })
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)

    cy.get('input[id="firstName"]').type('ivana')
    cy.get('input[id="lastName"]').type('tester')
    cy.contains('Add images').click()
    cy.get('input[placeholder="Image URL"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')    
    cy.contains('Submit').click()
    
})

    /*it('TC 3 - Create professor with two images  ovo ne radi nista na sajtu', function () {
        //cy.visit('/')
        cy.contains('Create Professor').click({ force: true })
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)

        cy.get('input[id="firstName"]').type('ivana')
        cy.get('input[id="lastName"]').type('tester')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpg')
        cy.contains('Submit').click()

    })*/



})

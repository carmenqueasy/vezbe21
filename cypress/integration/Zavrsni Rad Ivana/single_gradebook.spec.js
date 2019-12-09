
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


describe('My Gradebook Page', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
        cy.contains('Create Gradebook').click()
        cy.wait(2000)
        cy.get('input[id="title"]').type('ivana ppp')
        cy.get('#professor > option').eq(0)
            .then(element => cy.get('#professor').select(element.val()))
        cy.wait(2000)
        cy.contains('Submit').click()
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
       
    })

    

    it('TC 1 - My Gradebook Page - Edit title add some text', function () {
      
        
        cy.wait(1000)
        cy.get('.btn').eq(2).click()
        cy.get('input[id="title"]').clear().type("ivana testira")
        cy.get('select').select('ivana ppp')
        cy.get('.btn').eq(0).click()
      
        cy.contains('ppp').should('be.visible')
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.table-dark').should('contain', "ivana testira")
        cy.url().should('include', 'my-gradebook')
        cy.wait(10000)
        cy.contains('Delete Gradebook').click()
        //cy.get('.btn - danger').click()
        

    })

    

    it('TC 2 - My Gradebook Page -  Add student with valid data in My Gradebook', function () {
        
        cy.wait(10000)
        cy.contains('Add Student').click()
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(0).click()

        cy.get('input[id="firstName"]').type('Ivana')
        cy.get('input[id="lastName"]').type('Pejic')
        cy.get('.btn').eq(0).click()
        cy.get('input[name="image_NaN"]').type('https://previews.123rf.com/images/ximagination/ximagination1301/ximagination130100075/17249658-young-entrepreneur-is-doing-multitasking-above-the-clouds.jpg')
        cy.get('.btn').eq(4).click()

        cy.contains('Submit').click()
        cy.wait(10000)
        cy.get('.nav-link').eq(1).click()
        cy.get('.table-dark').contains('Ivana')
        cy.get('.table-dark').should('contain', "Pejic")
        cy.wait(10000)
        cy.contains('Delete Gradebook').click()
    })

    it('TC 3 - My Gradebook Page - Add student with photo format - jpeg', function () {
       
        cy.wait(10000)
        cy.contains('Add Student').click()
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(0).click()

        cy.get('input[id="firstName"]').type('Ivana')
        cy.get('input[id="lastName"]').type('Pejic')
        cy.get('.btn').eq(0).click()
        cy.get('input[placeholder="Image URL"]').type('https://feee89b9d833da065078e/create-your-superman-superwoman-cartoon.jpeg')
        cy.contains('Submit').click()
        
        cy.url().should('include', 'single-gradebook')
        cy.wait(10000)
        cy.contains('Delete Gradebook').click()
       
    })

    it('TC 4 - My Gradebook Page - Add student with photo png', function () {
 
        cy.wait(10000)
        cy.contains('Add Student').click()
        cy.get('.nav-link').eq(1).click()
        cy.wait(1000)
        cy.get('.btn').eq(0).click()

        cy.get('input[id="firstName"]').type('Ivana')
        cy.get('input[id="lastName"]').type('Pejic')
        cy.get('.btn').eq(0).click()
        cy.get('input[placeholder="Image URL"]').type('https://feee89b9d833da065078e/create-your-superman-superwoman-cartoon.png')
        cy.contains('Submit').click()

        cy.url().should('include', 'single-gradebook')
        cy.wait(10000)
        cy.contains('Delete Gradebook').click()
        
    })

   



    it('TC 5 - My Gradebook Page - Add comment in My Gradebook page', function () {
      
        cy.wait(1000)
        cy.get('.nav-link').eq(1).click()
        cy.get('.form-control').type('ivana komentira')
        cy.get('.btn').eq(3).click()
        cy.get('.nav-link').eq(2).click()
        cy.get('.nav-link').eq(1).click()
        cy.url().should('include', 'my-gradebook')
        cy.contains('ivana komentira').should('be.visible')
        cy.wait(10000)
        cy.contains('Delete Gradebook').click()


    })


    it('TC 6 - My Gradebook Page - Delete comment from Gradebook page', function () {
        
        cy.wait(10000)
        cy.get('textarea[placeholder="Writte your comment"]').type('Ivanin prvi komentar').clear
        cy.contains('Submit Comment').click()
        cy.contains('Delete').click()
        cy.get('.comments').should('not.contain', 'Ivanin prvi komentar')
        //cy.wait(10000)
        //cy.get('.nav-link').eq(1).click()
        //cy.contains('Delete Gradebook').click()

    })


    it('TC 7 - My Gradebook Page - Delete Gradebook fali mi provera', function () {

        cy.wait(10000)
        cy.contains('Delete Gradebook').click()
        //cy.get('.btn - danger').click()
        
   })

   


 

})
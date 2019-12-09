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


describe('Create New Professor', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Sign in').click()
        authPage.login(LOG.EMAIL, LOG.PASS)
    })

    

it('TC 1 - Open Create Professor page and check url', function() {
   
    cy.contains('Create Professor').click({ force: true })
    cy.url().should('include', 'create-professor')

})

it('TC 2 - Create professor with one image', function () {
       
    cy.contains('Create Professor').click({ force: true })
    var randomFN = randomFirstN()
    var randomLN = randomLastN()
        
    createPR.createprof(randomFN, randomLN)
  
    cy.contains('Add images').click()
    cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpg')    
    cy.contains('Submit').click()
    cy.url().should('include', 'all-professors')
    cy.wait(2000)
    cy.get('input[type=text]').type(randomFN)
    cy.get('.table-dark').children('tbody').should('contain', randomFN)
    cy.get('img[src*="https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpg"]').should("exist")            
    
})


    it('TC 3 - Create professor with no images', function () {
        
        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Submit').click()
        cy.url().should('not.include', 'all-professors')
        

    })
    it('TC 4 - Create professor with one image png', function () {

        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.png')
        cy.contains('Submit').click()
        cy.url().should('include', 'all-professors')
        cy.get('.table-dark').children('tbody').should('contain', randomFN)
        cy.get('img[src*="https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.png"]').should("exist")    

    })

    it('TC 5 - Create professor with one image jpeg', function () {

        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Submit').click()
        cy.url().should('include', 'all-professors')
        cy.get('.table-dark').children('tbody').should('contain', randomFN)
        cy.get('img[src*="https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg"]').should("exist")    

    })

    it('TC 6 - Create professor with two images', function () {

        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').eq(1).type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Submit').click()
        cy.url().should('include', 'all-professors')
        
    })


    it('TC 7- Create professor with three images', function () {

        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').eq(1).type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').eq(2).type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Submit').click()
        cy.url().should('include', 'all-professors')

    })


    it('TC 8 - Create professor with two images and use UP button', function () {

        cy.contains('Create Professor').click({ force: true })
        var randomFN = randomFirstN()
        var randomLN = randomLastN()
        createPR.createprof(randomFN, randomLN)
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.jpeg')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').eq(1).type('https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.png')
        cy.wait(10000)
        cy.get('.btn-sm').eq(5).click()
        cy.wait(10000)
        cy.get('input[placeholder="Image URL"]').should('have.value', 'https://images-na.ssl-images-amazon.com/images/I/81pZyYQc7FL.png')
       
       

    })
})

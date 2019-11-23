import { EMAIL }from '../../fixtures/constants'
import { createPage } from '../../page_object/create_gallery.page'
import { authPage } from '../../page_object/login.page'
import { randomTitle } from '../../utils'



//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE
//import { REG } from '../../fixtures/constants'
//import { authPage } from '../../page_object/register.page'
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE


//pocinje nas describe u koji smestamo sve testove
describe('Create Gallery Testovi', function() {

    
    beforeEach(() => {
        cy.visit('/login')
        authPage.login('ivi@gmail.com','ivana123')
        //cy.contains('Create Gallery').click()
    })



    it('TC - 01 My Gallery page - All galleries page', function() {

        cy.contains('All Galleries').click()
    })


//treba da vidimo jel imamo 10 galerija da su nam vidljive i iscitane
    it('TC - 02 My Gallery page - ', function() {
    //ovde samo proveravamo da li je ucitao samo 10
        cy.contains('All Galleries').click()
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')
        //ovo moze da se uradi i na drugi nacin
        //cy.get('div.grid').children().should('have.lenght',10)  ili not.have.lenght

    })

    //treba da vidimo jel imamo 10 galerija da su nam vidljive i iscitane ali sa load more
    it('TC - 03 My Gallery page - All galleries pagination', function() {

        cy.contains('All Galleries').click()
        //cy.contains('Load More').click()
        cy.wait(10000)
        //da saceka 4 ms pa da vidimo jel ucitao te galerije
        //cy.get('.cell').eq(19).should('exist')
        //cy.get('.cell').eq(20).should('not.exist')
       
        cy.get('div.grid').children().should('be.gt', 5)

    })

    it.only('TC - 04 My Gallery page - Create 1 gallery', function() {
//random je varijabla gde sam ubacila string iz funckije koja je napravila nesto i tu stavila onda sam ta random postavila tamo za poziv i za proveru
        var random=randomTitle()
        cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        createPage.createfun(random,'pejic', 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg')
        

        cy.get('.box-title').eq(0).should('contain',random)
       
    })


})
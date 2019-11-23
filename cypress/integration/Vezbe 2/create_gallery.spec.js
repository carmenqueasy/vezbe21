import { EMAIL }from '../../fixtures/constants'
import { authPage } from '../../page_object/register.page'




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



    it('TC - 01 My Gallery page pagination', function() {

        cy.url().should('include', '/All Galleries')
    })
})
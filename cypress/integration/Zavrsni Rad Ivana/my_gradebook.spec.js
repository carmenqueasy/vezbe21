//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE
//import { REG } from '../../fixtures/constants'
//import { authPage } from '../../page_object/register.page'
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE


//pocinje nas describe u koji smestamo sve testove
describe('My Gradebook', function() {
    
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

    

it('TC 1 - Open My Gradebook page', function() {
    //cy.visit('/')
    cy.contains('My Gradebook').click()
    cy.url().should('include', 'my-gradebook')

})

   

it('TC 2 - Delete Gradebook', function () {
        //cy.visit('/')
    cy.contains('My Gradebook').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)

    cy.contains('Delete Gradebook').click()
    //cy.get('button[type="button"]').eq(0).click()
    //cy.get('.btn-primary').eq(0).click()

    /*cy.get('input[id="firstName"]').type('ivana studentica')
    cy.get('input[id="lastName"]').type('tester junior')
    cy.contains('Add images').click()
    cy.get('input[placeholder="Image URL"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
    cy.contains('Submit').click()*/
    
})

    it('TC 3 - Edit Gradebook - enter new title', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)

        cy.contains('Edit Gradebook').click()
        cy.get('input[id="title"]').clear()
        cy.get('input[id="title"]').type('ivana promenila')
        cy.contains('Submit').click()
        cy.contains('My Gradebook').click()
        cy.get('.table-dark').contains('ivana promenila')
      

    })

    it('TC 4 - Add student', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        cy.contains('Add Student').click()
        cy.get('.btn-primary').contains('Add Student').click()

        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)


        cy.get('input[id="firstName"]').type('ivana studentica')
        cy.get('input[id="lastName"]').type('tester junior')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
        cy.contains('Submit').click()
        cy.contains('My Gradebook').click()
       //ovo ovde mi ne radi ova provera?????>>>>>>>>>>>>>>>>>>>> cy.get('.list-style').contains('ivana studentica')
    })

    it.only('TC 5 - Add student with jpeg', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        cy.contains('Add Student').click()
        cy.get('.btn-primary').contains('Add Student').click()

        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)


        cy.get('input[id="firstName"]').type('ivana studentica')
        cy.get('input[id="lastName"]').type('tester junior')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/110448580/original/db469e1a90a0b42e37aaeee89b9d833da065078e/create-your-superman-superwoman-cartoon.jpeg')
        cy.contains('Submit').click()
        //cy.contains('My Gradebook').click()
        //ovo ovde mi ne radi ova provera?????>>>>>>>>>>>>>>>>>>>> cy.get('.list-style').contains('ivana studentica')
    })

    it('TC 5 - Add student with png', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        cy.contains('Add Student').click()
        cy.get('.btn-primary').contains('Add Student').click()

        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)


        cy.get('input[id="firstName"]').type('ivana studentica')
        cy.get('input[id="lastName"]').type('tester junior')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/110448580/original/db469e1a90a0b42e37aaeee89b9d833da065078e/create-your-superman-superwoman-cartoon.png')
        cy.contains('Submit').click()
        
    })

    it('TC 5 - Add student with two input url and pictures and delete one url ', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        cy.contains('Add Student').click()
        cy.get('.btn-primary').contains('Add Student').click()

        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)


        cy.get('input[id="firstName"]').type('ivana studentica')
        cy.get('input[id="lastName"]').type('tester junior')
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').type('https://fivoriginal/db469e1a90a0b42e37aaeee89b9d833da065078e/create-your-superman-superwoman-cartoon.png')
        
        cy.contains('Add images').click()
        cy.get('input[placeholder="Image URL"]').eq(1).type('https://fiverr-ress/110448580/original/db469e1a90a0b42e37aaeee89b9d833da065078e/create-your-superman-superwoman-cartoon.jng')
        cy.contains('Remove image').eq(0).click()
        cy.get('input[placeholder="Image URL"]').eq(0).should('exist')
       
    })


    it('TC 6 - Add comment in My Gradebook page', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
        cy.get('textarea[placeholder="Writte your comment"]').type('Ivanin prvi komentar')
        cy.contains('Submit Comment').click()
        cy.get('.comments').should('contain', 'Ivanin prvi komentar')


    })
    it.only('TC 7 - Delete comment from My Gradebook page ovo zavrsiti!!!!!!!!!!!!!!!!!!!', function () {
        //cy.visit('/')
        cy.contains('My Gradebook').click()
        //authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
        cy.get('textarea[placeholder="Writte your comment"]').type('Ivanin prvi komentar').clear
        cy.contains('Submit Comment').click()
        cy.contains('Delete').click()
        cy.get('.comments').should('not.contain', 'Ivanin prvi komentar')

        


    })


})
<<<<<<< HEAD
import { CREDO } from '../../fixtures/constants'
import { authPage } from '../../page_object/register.page'
import { randomEmail } from '../../utils'


describe('My Second Test', function(){
=======
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE
import { REG } from '../../fixtures/constants'
import { authPage } from '../../page_object/register.page'
//PISEMO STA PRVO IMPORTUJEMO IZ KONSTANTI I PAGE


//pocinje nas describe u koji smestamo sve testove
describe('Register testovi', function() {
>>>>>>> a4a72b7ccab8d6fe9e110b8d61bba976797801a7
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Register').click()
    })
<<<<<<< HEAD
    it('TC - 01 Gallery Register', function() {
        //cy.get('input[id="first-name"]').type('olivera')
        //cy.get('input[id="last-name"]').type('delic')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 02 GalleryApp Register', function(){
        cy.url().should('include', '/register')
    })
    it('TC - 03 Checkbox', function() {
        authPage.register(' ', ' ', ' ', ' ', ' ')
        cy.get('input[type="checkbox"]').check()
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 04 Register with valid credentials and uncheck checkbox', function() {
        authPage.register(CREDO.FIRST_NAME, CREDO.LAST_NAME, CREDO.EMAIL, CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        cy.get('button[type="submit"]').click()*/   
    })
    it('TC - 04 Register without first name, with valid credentials and uncheck checkbox', function() {
        authPage.register(' ', CREDO.LAST_NAME, CREDO.EMAIL, CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        cy.get('button[type="submit"]').click()*/   
        
    })
    it('TC - 05 Register without any credentials and without checking checkbox', function(){
        authPage.register(' ', ' ', ' ', ' ', ' ')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 06 Register without any credentials and with checked checkbox', function(){
        authPage.register(' ', ' ', ' ', ' ', ' ')
        cy.get('input[type="checkbox"]').check()
        //cy.get('button[type="submit"]').click()
        authPage.email.then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
    })
    it('TC - 07 Register with First name', function(){
        authPage.register(CREDO.FIRST_NAME, ' ', ' ', ' ', ' ')
        //cy.get('input[id="first-name"]').type('Olivera')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 08 Register with Last name', function(){
        authPage.register(' ', CREDO.LAST_NAME, ' ', ' ', ' ')
        //cy.get('input[id="last-name"]').type('Delic')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 09 Register with Email', function(){
        authPage.register(' ', ' ', CREDO.EMAIL, ' ', ' ')
        //cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 10 Register with Password and confirmed password', function(){
        authPage.register(' ', ' ', ' ', CREDO.PASSWORD, CREDO.PASSWORD_CONFIRMED)
        //cy.get('input[id="password"]').type('oljaiva2007')
        //cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 11 Register with Password', function(){
        authPage.register(' ', ' ', ' ', CREDO.PASSWORD, ' ')
        //cy.get('input[id="password"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 12 Register with Password:confirmed', function(){
        authPage.register(' ', ' ', ' ', ' ', CREDO.PASSWORD_CONFIRMED)
        //cy.get('input[id="password-confirmation"]').type('oljaiva2007')
        //cy.get('button[type="submit"]').click()
    })
    it('TC - 13 Register with invalid password confirmation', function(){
        authPage.register(' ', ' ', ' ', ' ', 'jeja')
        cy.get('input[type="checkbox"]').check()
        /*cy.get('input[id="first-name"]').type('Olivera')
        cy.get('input[id="last-name"]').type('Delic')
        cy.get('input[id="email"]').type('oliveradelic07@gmail.com')
        cy.get('input[id="password"]').type('oljaiva2007')
        cy.get('input[id="password-confirmation"]').type('oljaiva')
        cy.get('button[type="submit"]').click()
        cy.get('.alert-danger').should('have.text','The email has already been taken.The password confirmation does not match.')*/
    })

  it.only('tc dodatan - 01 register proba', function () {
    authPage.register({
    ime:'Olivera',
    prezime:'Delic',
    mejl:randomEmail(),
    lozinka:'oljaiva200',
    lozinka_potvrda:'oljaiva2007'
          
      })
   }) 



})



=======

    

it('TC1 - Visit My Gallery Register button', function() {
    //cy.visit('/')
    //cy.contains ('Register').click()
    cy.url().should('include', '/register')

})



it('TC2 - Visit My Gallery Register pozitivno', function() {
    //cy.visit('/')
    //cy.contains('Register').click()
    authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
    //cy.get('input[id="first-name"]').type('ivana')
    //cy.get('input[id="last-name"]').type('pejic')
    //cy.get('input[id="email"]').type('ivana@gmail.com')
    //cy.get('input[id="password"]').type('ivana1234')
    //cy.get('input[id="password-confirmation"]').type('ivana1234')
    cy.get('[type="checkbox"]').check()
    //cy.get('[type="submit"]').click()
})


it.only('TC3 - Visit My Gallery Register negativno - checkbox nije cekiran, sve uneseno', function () {
    //cy.visit('/')
    //cy.contains('Register').click()
    authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, REG.PASSCON)
    

    //cy.get('input[id="first-name"]').type('ivana')
    //cy.get('input[id="last-name"]').type('pejic')
    //cy.get('input[id="email"]').type('ivanhfha@gmail.com')
    //cy.get('input[id="password"]').type('ivana1234')
    //cy.get('input[id="password-confirmation"]').type('ivana1234')
        // izostavljamo ovo cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
 })



    it('TC4 - Visit My Gallery Register negativno - sifra nije dobra', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, 'ivi', REG.PASSCON)
        cy.get('[type="checkbox"]').check()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('ivi')
        //cy.get('input[id="last-name"]').type('pejic')
        //cy.get('input[id="email"]').type('ivanafhfh01@gmail.com')
        //cy.get('input[id="password"]').type('ivana')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        
        cy.get('[type="submit"]').click()
    })

    it('TC5 - Visit My Gallery Register negativno - confirmation sifra nije dobra', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        authPage.regfun(REG.IME, REG.PREZIME, REG.EMAILING, REG.PASSWORD, 'ivi')
        cy.get('[type="checkbox"]').check()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('ivi')
        //cy.get('input[id="last-name"]').type('pejic')
        //cy.get('input[id="email"]').type('ivana0fhfh11@gmail.com')
        //cy.get('input[id="password"]').type('ivana1234')
        //cy.get('input[id="password-confirmation"]').type('ivana12')
        cy.get('[type="submit"]').click()
    })

    it('TC6 - Visit My Gallery Register negativno - los email unesem bez @', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        authPage.regfun(REG.IME, REG.PREZIME, 'ivana.com', REG.PASSWORD, REG.PASSCON)
        cy.get('[type="checkbox"]').check()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('ivi')
        //cy.get('input[id="last-name"]').type('pejic')
        //cy.get('input[id="email"]').type('ihh.com')
        //cy.get('input[id="password"]').type('ivana1234gmail.com')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        
        cy.get('[type="submit"]').click()
    })

    it('TC7 - Visit My Gallery Register negativno - los email unesen bez .', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        authPage.regfun(REG.IME, REG.PREZIME, 'ivana@com', REG.PASSWORD, REG.PASSCON)
        cy.get('[type="checkbox"]').check()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('1')
        //cy.get('input[id="last-name"]').type('pejic')
        //cy.get('input[id="email"]').type('idnasd22hhhh2kj@gmailcom')
        //cy.get('input[id="password"]').type('ivana1234')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="submit"]').click()
    })

    it('TC8 - Visit My Gallery Register negativno - los email unesen bez com', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        authPage.regfun(REG.IME, REG.PREZIME, 'ivana@gmail.', REG.PASSWORD, REG.PASSCON)
        cy.get('[type="checkbox"]').check()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('1')
        //cy.get('input[id="last-name"]').type('pejic')
        //cy.get('input[id="email"]').type('idnasd22hhhh2kj@gmail.')
        //cy.get('input[id="password"]').type('ivana1234')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="submit"]').click()
    })

    it('TC9 - Visit My Gallery Register negativno - nista nije uneseno samo submit kliknut', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' ', ' ', ' ')
       
       
    })

    it('TC10 - Visit My Gallery Register negativno - samo checkbox i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' ', ' ', ' ')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })


    it('TC11 - Visit My Gallery Register negativno - samo uneto ime i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun('neko ime', ' ', ' ', ' ', ' ')
        //cy.get('input[id="first-name"]').type('1')
        
        cy.get('[type="submit"]').click()
    })

    it('TC12 - Visit My Gallery Register negativno - samo uneto prezime i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', 'neko prezime ', ' ', ' ', ' ')
       
        cy.get('[type="submit"]').click()
    })

    it('TC13 - Visit My Gallery Register negativno - samo uneta sifra i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' ', ' neka sifra', ' ')
        cy.get('input[id="password"]').type('ivana1234')
        
        cy.get('[type="submit"]').click()
    })


    it('TC14 - Visit My Gallery Register negativno - samo unet email i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' nekimail@gmail.com', ' ', ' ')
        //cy.get('input[id="email"]').type('idnasd22hhhh2kj@gmail.com')
       
        cy.get('[type="submit"]').click()
    })


    it('TC15 - Visit My Gallery Register negativno - samo unet confirmation pass i submit', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' ', 'nekicon', ' ')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        
        cy.get('[type="submit"]').click()
    })


    it('TC16 - Visit My Gallery Register negativno - ime checkbox i submit uneto', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        //cy.get('input[id="first-name"]').type('1')
        authPage.regfun('ime', ' ', ' ', ' ', ' ')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })
    it('TC17 - Visit My Gallery Register negativno - prezime checkbox i submit uneto', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        
        //cy.get('input[id="last-name"]').type('pejic')
        authPage.regfun(' ', 'prezime', ' ', ' ', ' ')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })
    it('TC18 - Visit My Gallery Register negativno - email checkbox i submit uneto', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
       
        //cy.get('input[id="email"]').type('idnasd22hhhh2kj@gmail.com')
        authPage.regfun(' ', ' ', 'mail@gmail.com ', ' ', ' ')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })
    it('TC19 - Visit My Gallery Register negativno - pass checkbox i submit uneto', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
       
        //cy.get('input[id="password"]').type('ivana1234')
        authPage.regfun(' ', ' ', ' ', ' password', ' ')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })

    it('TC20 - Visit My Gallery Register negativno - conff pass checkbox i submit uneto', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        //cy.url().should('include', '/register')
        authPage.regfun(' ', ' ', ' ', ' ', ' eretetet')
        //cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })
})
>>>>>>> a4a72b7ccab8d6fe9e110b8d61bba976797801a7

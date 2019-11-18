

describe('Register', function() {
    
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Register').click()
    })

    before(() => {
        cy.visit('/')
    })

it('TC1 - Visit My Gallery Register button', function() {
    //cy.visit('/')
    //cy.contains ('Register').click()
    cy.url().should('include', '/register')

})



it('TC2 - Visit My Gallery Register pozitivno', function() {
    //cy.visit('/')
    //cy.contains('Register').click()
    cy.url().should('include', '/register')
    cy.get('input[id="first-name"]').type('ivana')
    cy.get('input[id="last-name"]').type('pejic')
    cy.get('input[id="email"]').type('ivana@gmail.com')
    cy.get('input[id="password"]').type('ivana1234')
    cy.get('input[id="password-confirmation"]').type('ivana1234')
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
})


it('TC3 - Visit My Gallery Register negativno - checkbox nije cekiran, sve uneseno', function () {
    //cy.visit('/')
    //cy.contains('Register').click()
    cy.url().should('include', '/register')
    cy.get('input[id="first-name"]').type('ivana')
    cy.get('input[id="last-name"]').type('pejic')
    cy.get('input[id="email"]').type('ivanhfha@gmail.com')
    cy.get('input[id="password"]').type('ivana1234')
    cy.get('input[id="password-confirmation"]').type('ivana1234')
        // izostavljamo ovo cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
 })



    it('TC4 - Visit My Gallery Register negativno - sifra nije dobra', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        cy.url().should('include', '/register')
        cy.get('input[id="first-name"]').type('ivi')
        cy.get('input[id="last-name"]').type('pejic')
        cy.get('input[id="email"]').type('ivanafhfh01@gmail.com')
        cy.get('input[id="password"]').type('ivana')
        cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })

    it('TC5 - Visit My Gallery Register negativno - confirmation sifra nije dobra', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        cy.url().should('include', '/register')
        cy.get('input[id="first-name"]').type('ivi')
        cy.get('input[id="last-name"]').type('pejic')
        cy.get('input[id="email"]').type('ivana0fhfh11@gmail.com')
        cy.get('input[id="password"]').type('ivana1234')
        cy.get('input[id="password-confirmation"]').type('ivana12')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })

    it('TC6 - Visit My Gallery Register negativno - los email unesem', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        cy.url().should('include', '/register')
        cy.get('input[id="first-name"]').type('ivi')
        cy.get('input[id="last-name"]').type('pejic')
        cy.get('input[id="email"]').type('ihh.com')
        cy.get('input[id="password"]').type('ivana1234')
        cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })

    it('TC7 - Visit My Gallery Register negativno - lose ime', function () {
        //cy.visit('/')
        //cy.contains('Register').click()
        cy.url().should('include', '/register')
        cy.get('input[id="first-name"]').type('1')
        cy.get('input[id="last-name"]').type('pejic')
        cy.get('input[id="email"]').type('idnasd22hhhh2kj@gmail.com')
        cy.get('input[id="password"]').type('ivana1234')
        cy.get('input[id="password-confirmation"]').type('ivana1234')
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
    })




})

import { EMAIL }from '../../fixtures/constants'
import { createPage } from '../../page_object/create_gallery.page'
import { authPage } from '../../page_object/login.page'
import { randomTitle } from '../../utils'
import { randomDescription } from '../../utils'



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
        cy.contains('All Galleries').click()
    })



    it('TC - 01 My Gallery page - All galleries page', function() {

        cy.contains('All Galleries').click()
    })


//treba da vidimo jel imamo 10 galerija da su nam vidljive i iscitane
    it('TC - 02 My Gallery page - ', function() {
    //ovde samo proveravamo da li je ucitao samo 10
        //cy.contains('All Galleries').click()
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')
        //ovo moze da se uradi i na drugi nacin
        //cy.get('div.grid').children().should('have.lenght',10)  ili not.have.lenght

    })

    //treba da vidimo jel imamo 10 galerija da su nam vidljive i iscitane ali sa load more
    it('TC - 03 My Gallery page - All galleries pagination', function() {

        cy.contains('All Galleries').click()
        cy.contains('Load More').click()
        cy.wait(10000)
        //da saceka 4 ms pa da vidimo jel ucitao te galerije
        //cy.get('.cell').eq(19).should('exist')
        //cy.get('.cell').eq(20).should('not.exist')
        cy.get('.cell').eq(10).should('exist')
        //cy.get('div.cell').children().should('be.gt', 5)

    })

    it('TC - 04 My Gallery page - Create 1 gallery', function() {
//randomT je varijabla gde sam ubacila string iz funckije koja je napravila nesto (title) i tu stavila onda sam ta random postavila tamo za poziv i za proveru
        var randomT = randomTitle()
        var randomD= randomDescription()
        //cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        createPage.createfun(randomT, randomD, 'https://thebusywomanproject.com/content/images/2017/04/best-superwoman-clipart-24168-clipartion-com-1SfBTH-clipart.jpg')
        cy.get('.box-title').eq(0).should('contain',randomT)
       
    })

    it('TC - 05 My Gallery page - Create 1 gallery and click on add picture button', function () {
 
        var randomT = randomTitle()
        var randomD = randomDescription()
        //cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        createPage.createfun(randomT, randomD, 'https://pixel.nymag.com/imgs/fashion/daily/2019/01/08/8-baby-chanco.w700.h467.2x.jpg')
        cy.contains('Add image').click()
        // ovde treba nesto da napravim da proveri da li ima to polje na formi....cy.get('div.grid').children().should('be.gt', 5)??????
        //if (cy.find("button[url]").length > 0) 
    })

    it('TC - 06 My Gallery page - Create 1 gallery and click on add picture button and delete that input field', function () {
        //cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        cy.get('input[id="title"]').type('11111')
        cy.get('input[id="description"]').type('11111')
        cy.get('input[type="url"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
        cy.contains('Add image').click()
        //cy.contains('fas fa-trash').click()
        cy.get('button[type="button"]').eq(0).click()
        cy.get('input[type="url"]').eq(1).should('not.exist')
        //uradjena je i provera
     
    })

    it('TC - 07 nastavlja se na 05 My Gallery page - Create 1 gallery and click on add picture and rotate position', function () {
        //cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        cy.get('input[id="title"]').type('11111')
        cy.get('input[id="description"]').type('111111')
        cy.get('input[type="url"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
        
        cy.contains('Add image').click()
        cy.get('input[type="url"]').eq(1).should('exist')
        cy.get('button[type="button"]').eq(2).click()
        //cy.get('input[type="url"]').eq(0).eq(2).click()
    })

    it('TC - 08 - Create 1 gallery, add 2 picture and rotate position', function () {
        //cy.contains('All Galleries').click()
        cy.contains('Create Gallery').click()
        cy.get('input[id="title"]').type('Ivi')
        cy.get('input[id="description"]').type('Ivi')
        cy.get('input[type="url"]').type('https://thebusywomanproject.com/content/images/2017/04/best-superwoman-clipart-24168-clipartion-com-1SfBTH-clipart.jpg')
        cy.contains('Add image').click()
        cy.get('input[type="url"]').eq(1).type('https://cdn.imgbin.com/0/20/23/imgbin-supergirl-superman-the-new-52-superwoman-0-supergirl-MfhSyKkvXykqdcb3gnCBHdgQg.jpg')
        cy.get('button[type="button"]').eq(2).click()
        cy.get('input[type="url"]').should('have.value', 'https://cdn.imgbin.com/0/20/23/imgbin-supergirl-superman-the-new-52-superwoman-0-supergirl-MfhSyKkvXykqdcb3gnCBHdgQg.jpg')
        cy.get('.btn-custom').contains('Submit')
        
    })
//ovde cemo da testiramo MOCKovanje, stubovanje
//ovde cemo da testiramo MOCKovanje, stubovanje
//ovde cemo da testiramo MOCKovanje, stubovanje


})
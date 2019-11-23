export default class CreatePage {


    get title () {
        return cy.get('#title')
    }

    get description() {
        return cy.get('#description')
    }


    get url () {
        return cy.get('input[type="url"]')
    }



   get submitButton () {
    return cy.get('.btn-custom').contains('Submit')
   }

    /*get Add_image() {
        return cy.get('button[type="Add image"]')
    }

    get submit() {
        return cy.get('button[type="submit"]')
    }

    /*get checkbox(){
        return cy.get('input[type="checkbox"]')
      }*/
    /*get alert() {
        return cy.get('.alert-danger')
    }*/



    //ovo je funkcija gde imam sve ono sto mi treba da zamenim odjednom deo 
    createfun (title, desc, urlim) {
        this.title.type(title)
        this.description.type(desc)
        this.url.type(urlim)
        this.submitButton.click()
       
        /*this.submit.click()*/
        
    }
}


export const createPage = new CreatePage()
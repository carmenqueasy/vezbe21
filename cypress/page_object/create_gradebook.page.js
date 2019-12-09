export default class CreateGB {


    get title () {
        return cy.get('#title')
    }

    get professor() {

        return cy.get('select[type = "professor"]')
    }


    get submit() {
        return cy.get('button[type="Submit"]')
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
    creategb (title, professor) {
        this.title.type(title)
        this.professor.type(professor)
       
       
        /*this.submit.click()*/
        
    }
}


export const createGB = new CreateGB()


//ovo nam treba
//cy.get('input[id="title"]').type('ivana')
//cy.get('#professor').last()
//cy.contains('Submit').click()
export default class CreatePR {


    get firstName () {
        return cy.get('input[id="firstName"]')
    }

    get lastName () {

        return cy.get('input[id="lastName"]')
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
    createprof(firstN, lastN) {
        this.firstName.type(firstN)
        this.lastName.type(lastN)
       
       
        /*this.submit.click()*/
        
    }
}


export const createPR = new CreatePR()


//ovo nam treba
//cy.get('input[id="firstName"]').type('ivana')
//cy.get('input[id="lastName"]').type('tester')
//cy.contains('Add images').click()
//cy.get('input[placeholder="Image URL"]').type('https://previews.123rf.com/images/chrisdorney/chrisdorney1502/chrisdorney150200048/36611877-last-chance-red-rubber-stamp-over-a-white-background-.jpg')
//cy.contains('Submit').click()

export default class AuthPage {
    get first_name() {
        return cy.get('#first-name')
    }
    get last_name() {
        return cy.get('#last-name')
    }
    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#password')
    }
    get password_conf() {
        return cy.get('#password-confirmation')
    }

    /*get submit() {
        return cy.get('button[type="submit"]')
    }
    /*get checkbox(){
        return cy.get('input[type="checkbox"]')
      }*/
    get alert() {
        return cy.get('.alert-danger')
    }



    //ovo je funkcija gde imam sve ono sto mi treba da zamenim odjednom deo 
    regfun (ime, prezime, mejl, lozinka, lozinka_potvrda) {
        this.first_name.type(ime)
        this.last_name.type(prezime)
        this.email.type(mejl)
        this.password.type(lozinka)
        this.password_conf.type(lozinka_potvrda)
        /*this.submit.click()*/
        
    }
}


export const authPage = new AuthPage()
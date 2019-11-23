//definisemo klasu koja ima sledece:ime, prezime, email, pass, confimpass i submit i alert *koje jos ne znam gde da ubacim


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
<<<<<<< HEAD
        this.submit.click()
    }


}
=======
        /*this.submit.click()*/
        
    }
}


>>>>>>> a4a72b7ccab8d6fe9e110b8d61bba976797801a7
export const authPage = new AuthPage()
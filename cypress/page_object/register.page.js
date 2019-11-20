export default class AuthPage {
    get first_name(){
        return cy.get('input[id="first-name"]')
    }
    get last_name(){
        return cy.get('input[id="last-name"]')
    }
    get email(){
        return cy.get('input[id="email"]')
    }
    get password(){
        return cy.get('input[id="password"]')
    }
    get password_conf(){
        return cy.get('input[id="password-confirmation"]')
    }
    get submit(){
        return cy.get('button[type="submit"]')
    }
   /* get checkbox(){
        return cy.get('input[type="checkbox"]')
    }*/
    get alert(){
        return cy.get('.alert-danger')
    }
    register(ime, prezime, mejl, lozinka, lozinka_potvrda, checkbox){
        this.first_name.type(ime)
        this.last_name.type(prezime)
        this.email.type(mejl)
        this.password.type(lozinka)
        this.password_conf.type(lozinka_potvrda)
        this.submit.click()
    }
}
export const authPage = new AuthPage()

export default class AuthPage {


    get email() {
        return cy.get('input[name="email"]')
        
    }

    get password() {
        return cy.get('input[type="password"]')
        
    }


    get submit() {
        return cy.get('button[type=Submit]')
    }

    //get alert() {
        //return cy.get('.alert-danger')
    //}


   
    login (email, password)  {
        this.email.type(email)
        this.password.type(password)
        this.submit.click()
   
    }
}
export const authPage = new AuthPage()




//ovo je nas unos u SIGN IN
//cy.get('input[name="email"]').type('ivana4001@gmail.com')
//cy.get('input[type="password"]').type('ivana4001')
//cy.get('[type="Submit"]').click()
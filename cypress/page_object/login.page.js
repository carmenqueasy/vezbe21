
//ime klase mora biti sa velikim slovom
export default class AuthPage {


    get email() {
        return cy.get('input[id="email"]')
        
    }

    get password() {
        return cy.get('input[id="password"]')
        
    }


    get submit() {
        return cy.get('button[type=submit]')
    }

    get alert() {
        return cy.get('.alert-danger')
    }


    //pravimo funkciju koja menja citav onaj deo za mail pass  submit tj login menja
    login (email, password)  {
        this.email.type(email)
        this.password.type(password)
        this.submit.click()
   
    }
}

//malo slovo mora biti za konstantu
export const authPage = new AuthPage ()
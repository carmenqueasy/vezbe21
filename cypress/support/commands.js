Cypress.Commands.add('login', (email, password) => {
    Cypress.log({
      name: 'loginByForm',
      message: email + ' | ' + password
    })
    cy.request({
      method: 'POST',
      url: Cypress.config('backendUrl') + 'auth/login',
      form: true,
      followRedirect: true,
      body: {
        email: email,
        password: password,
      }
    }).
    then((resp)=>{
       expect(resp.body).to.have.property('access_token')
       localStorage.setItem('token', resp.body.access_token)
       cy.visit('/')
    }) 
  })





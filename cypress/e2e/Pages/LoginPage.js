

class LoginPage{
    visit(){
       cy.visit('https://procstage.drorapp.com')
    }
    typeEmail(email){
       cy.get('[name="email"]').type(email)
   }
   typePassword(password){
       cy.get('[name="password"]').type(password)
   
   }
   login(){
       cy.get('[type="submit"]').click()
   
   }
   
   }

   export default new LoginPage;
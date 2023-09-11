
import { slowCypressDown } from "cypress-slow-down";
slowCypressDown(100)


describe('Data-Driven Login Tests', () => {
   
  
    it('should login with different sets of credentials', () => {

        
      cy.fixture('testdata.json').then((testdata) => {
        cy.viewport(1200,700)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 


        testdata.forEach((data) => {
          cy.get('[name="username"]').type(data.username);
          cy.get('[name="password"]').type(data.password);
          cy.get('[type="submit"]').click();
          cy.wait(2000)
          
          
            if(data.email=="Admin" && data.password=="admin123"){
                  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', data.expected)
                  cy.wait(2000)
              cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
              cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
               }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', data.expected)
                    }
                  
                  cy.get('[name="username"]').clear();
                  cy.get('[name="password"]').clear();
                  // Add assertions to verify successful login or error message here
          // For example:
          // cy.get('.welcome-message').should('be.visible');
        //   cy.xpath('/html/body/div/div/div[1]/div/span').should('be.visible');
  
          // Clear the input fields for the next iteration

        //   cy.get('[name="email"]').clear();
        //   cy.get('[name="password"]').clear();
        });
      });
    });
  });
  
import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(200)


describe('User',()=>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        cy.visit('https://procstage.drorapp.com')
        cy.get('[name="email"]').type('ajit.kumar@dror.co.in')
        cy.get('[name="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    })
    
    // it('User Tab', ()=>{
    //   cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[4]/div[1]/p').click()

    //   cy.get('[href="/newUser"]').click() // NEW uSER SUB TAB
    //   cy.wait(3000)
    //   cy.get('#simple-search').type('sandeep')
    //   cy.wait(3000)
    //   cy.get('#simple-search').clear()
    //   cy.get('#simple-search').type('dhiraj')
    //   cy.get('#simple-search').clear()
    //   cy.get('#simple-search').type('tushar kapoor')
    //   cy.get('#simple-search').clear()
    //  })

    // it(" User tab of Existing User ", ()=>{

    //  cy.get(':nth-child(5) > .text-textColor > .text-md').click() // Click on User tab  

    //   cy.xpath("/html/body/div/div/div[2]/div[1]/div/div[4]/div[2]/a[2]").click()
    //   cy.get('tbody > :nth-child(1) > :nth-child(7) > .flex > :nth-child(1)').click()
    //   cy.xpath("/html/body/div/div/div[2]/div[2]/div[2]/dialog/div/div/form/div[5]/div/select").select('User')
    //   cy.xpath("/html/body/div/div/div[2]/div[2]/div[2]/dialog/div/div/form/div[6]/div/select").select('LYTHOUSE')
    //   cy.get('button[type="submit"]').click()
    // })

    // it('Add new User', ()=>{

    //     cy.get(':nth-child(5) > .text-textColor > .text-md').click() // Click on User tab  

    //   cy.xpath("/html/body/div/div/div[2]/div[1]/div/div[4]/div[2]/a[2]").click()

      // cy.xpath("/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/button").click()
      // cy.get('input[name="firstName"]').type('Neeraj ji')
      // cy.get('input[name="lastName"]').type('Mathur')
      // cy.get('input[name="email"]').type('neeraj.m1@dror.co.in')
      // cy.get('input[name="mobileNumber"]').type('98800000020202')
      // cy.xpath("/html/body/div/div/div[2]/div[2]/div[2]/dialog/div/div/form/div[5]/div/select").select('User')
      // cy.xpath("/html/body/div/div/div[2]/div[2]/div[2]/dialog/div/div/form/div[6]/div/select").select('LYTHOUSE')
      // cy.get('button[form="addUserForm"]').click()
      // cy.get('input[name="mobileNumber"]').clear()
      // cy.get('input[name="mobileNumber"]').type("9800303130")
      // cy.get('button[form="addUserForm"]').click()
      // cy.get('#simple-search').type("Neeraj Mathur")
      // cy.wait(3000)
      // cy.get('#simple-search').clear()
      // cy.get('#simple-search').type("Neeraj ji Mathur")
      // cy.wait(3000)
    // })

      
      
    it(' Check Deactivate User ', ()=>{

      cy.get(':nth-child(5) > .text-textColor > .text-md').click() // Click on User tab  
      cy.xpath("/html/body/div/div/div[2]/div[1]/div/div[4]/div[2]/a[3]").click() // Deactivate User tab
      cy.wait(3000)
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[4]/div[2]/a[2]').click()
      cy.get(':nth-child(8) > :nth-child(7) > .flex > .text-danger').click()
      cy.xpath("/html/body/div/div/div[2]/div[1]/div/div[4]/div[2]/a[3]").click() // Deactivate User tab
      cy.wait(3000)
      cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[8]/div[1]/p').click()
      cy.get('[name="email"]').type('tushar.sharma@drorservices.com')
      cy.get('[name="password"]').type('12345')
      cy.get('[type="submit"]').click()
      cy.wait(3000)
    })

  })



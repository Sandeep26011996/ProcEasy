

import { slowCypressDown } from "cypress-slow-down";
import { beforeEach } from "mocha";
slowCypressDown(3000)


describe(' Login flow ' , () =>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        cy.visit('https://procstage.drorapp.com')
        
    })
    
    
    it('Using Valid credentials', ()=>{

        cy.get('[name="email"]').type('ajit.kumar@dror.co.in')
        cy.get('[name="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
        cy.xpath('/html/body/div/div/div[2]/div[2]').scrollTo('bottom')
        cy.xpath('/html/body/div/div/div[2]/div[2]').scrollTo('top')
        cy.get(':nth-child(9) > .text-textColor > .text-md').click()
        // cy.scrollTo('center')
        
        

    })
})


        





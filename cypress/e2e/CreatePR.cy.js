

import { slowCypressDown } from "cypress-slow-down";
import moment from 'moment'
slowCypressDown(100)

describe(' Create PR',()=>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        cy.visit('https://procstage.drorapp.com')
        
    })

    it('PR request ', ()=>{
        cy.get('[name="email"]').type('jayesh.kale@dror.co.in')
        cy.get('[name="password"]').type('101010')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .text-textColor > .text-md').click()
        cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[2]/div[2]/a[1]').click()
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[1]/div[1]/input').type('Report testing order')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[1]/div[3]/select').select('Electrical Equipment and Supplies')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[1]/div[2]/select').select('Goods')
        cy.get('.mt-4.flex-col > .w-32 > .text-primary').click()
        cy.wait(3000)

        // check sorting of the catalog

        // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[2]/input').click()
        // cy.wait(2000)
        // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[3]/input').click()
        // cy.wait(2000)
        // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div[4]/input').click()
        // cy.wait(2000)
        // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]').scrollTo('bottom')
        // cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]').scrollTo('center')
        cy.wait(2000)
        // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]').scrollTo('top')
        // cy.wait(2000)
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div/div[2]/div[2]/button').click()
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[3]/button').click()
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[2]/button[2]').click()

        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[3]/div[1]/textarea').type('This is best rate in this price range ')

        cy.get('[type="number"]').clear().type('3')

        // cy.get('#datetime-local').click()
        
    cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[1]/div[2]/div/div[1]/table/tbody/tr/td[5]/input').click()
    const targetDate = moment('2023-08-31').format('YYYY-MM-DD')   // adjust format to suit the apps requirements
    cy.get('input[type="date"]').eq(0).type(`${targetDate}`)  // presume you need the enter key to trigger an event
    cy.wait(1000)

    cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/form/div[2]/button[2]').click()
    cy.wait(2000)
    // cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div').scrollTo('bottom')

    cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div/div[5]/button/p').click()
    
   

    })


})
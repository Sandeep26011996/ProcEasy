import { slowCypressDown } from "cypress-slow-down";
import { beforeEach } from "mocha";

import moment from "moment";


describe(' Master Data ', ()=>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        cy.visit('https://procstage.drorapp.com')
        cy.get('[name="email"]').type('ajit.kumar@dror.co.in')
        cy.get('[name="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    })
    // it('catalog',()=>{
    //     // cy.get('[name="email"]').type('ajit.kumar@dror.co.in')
    //     // cy.get('[name="password"]').type('12345')
    //     // cy.get('[type="submit"]').click()
    //     // cy.wait(3000)
    //     cy.get(':nth-child(4) > .text-textColor > .text-md').click()
    //     cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[3]/div[2]/a[1]').click()
    //     cy.wait(2000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/p').click()
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[1]/div[1]/p').click()
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[2]/input').click()
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[3]/input').click()
    //     cy.wait(3000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[4]/input').click()
    //     cy.wait(3000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div[1]/input').click()
    //     cy.wait(2000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div[2]/input').click()
    //     cy.wait(2000)


    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/p').click()
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[2]/input').click()
    //     cy.wait(4000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[3]/input').click()
    //     cy.wait(3000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[1]/div[4]/input').click()
    //     cy.wait(3000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div[1]/input').click()
    //     cy.wait(2000)
    //     cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[2]/div[2]/div[2]/div[2]/input').click()
    //     cy.wait(2000) 

    // })


     it ( ' Add new catalog ' , ()=>{
        cy.get(':nth-child(4) > .text-textColor > .text-md').click()
        cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[3]/div[2]/a[1]').click()
        cy.wait(3000)
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/div[1]/div[2]/button[3]/p').click()

        const item = 'keyboard.jpg'
        cy.get('input[id="dropzone-file"]').attachFile(item)

        cy.get('input[name="name"]').type(' Apple magic Keyboard ')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/dialog[1]/div/div/div[2]/button[1]').click()

        cy.get('select[name="brand"]').select('apple')
        cy.get('select[name="category"]').select('Goods')
        cy.get('select[name="type"]').select('Others')
        cy.get('select[name="procurementClassification"]').select('IT equipment and supplies')
        cy.get('select[name="currency"]').select('INR')
        cy.get('input[name="estimatedPrice"]').type('27000')
        cy.get('input[name="gst"]').type('20')
        cy.get('input[name="description"]').type('This is the best product in this Range')

        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[2]/div/dialog[1]/div/div/div[2]/button[1]').click()
        



     })


})
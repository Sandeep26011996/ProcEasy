
import { slowCypressDown } from "cypress-slow-down";
slowCypressDown(200)


describe(' Check Company Profile ', ()=>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        cy.visit('https://procstage.drorapp.com')
        cy.get('[name="email"]').type('ajit.kumar@dror.co.in')
        cy.get('[name="password"]').type('12345')
        cy.get('[type="submit"]').click()
        cy.wait(3000)
    })

    it(' Edit Company Profile ',()=>{
        cy.xpath('/html/body/div/div/div[2]/div[1]/div/div[5]/div[1]/p').click()
        cy.wait(3000)
        // cy.get('.relative > img').click()
        
        // const image = 'keyboard.jpg'
        // cy.get('input[id="dropzone-file"]').attachFile(image)
        cy.get('.cursor-pointer > .lucide').click() // Add new company Location 
        cy.get('input[name="name"]').type('Lythouse Dubai')
        cy.get('select[name="officeType"]').select('branch office')
        cy.get('input[name="gstNo"]').type('FKGKEEOLS3423423FG')
        cy.get('input[name="panNo"]').type('FKGKOLS3424RF')
        cy.get('input[name="website"]').type('lythouse.co')
        cy.get('input[name="noOfEmployees"]').type('2000')
        cy.get('input[name="email"]').type('contactsupport@dror.co.in')
        cy.get('input[name="phone"]').type('9122299911')
        
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/dialog/div/div/div[2]/button[1]/p').click()

        cy.get('input[name="address"]').type('Sarjah Distrcit UAE ')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/dialog/div/div/div[1]/div/div/div[1]/div/select').select('United Arab Emirates')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/dialog/div/div/div[1]/div/div/div[2]/div/select').select('Sharjah Emirate')
        cy.xpath('/html/body/div/div/div[2]/div[2]/div[2]/div[3]/dialog/div/div/div[1]/div/div/div[3]/div/select').select('Kalba')
        cy.get('input[placeholder="Please Enter pincode"]').type('344000')
        cy.get('button[form="addBranch"]').click()
        


   
    })



})



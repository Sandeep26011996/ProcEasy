
import { slowCypressDown } from "cypress-slow-down";
import LoginPage from "./Pages/LoginPage";

slowCypressDown(2000)

describe( ' Login Test ', ()=>{
    beforeEach(()=>{
        cy.viewport(1200,720)
        LoginPage.visit()
    })
    it('It should be login with Valid credentials',()=>{
        LoginPage.typeEmail('ajit.kumar@dror.co.in')
        LoginPage.typePassword('12345')
        LoginPage.login()
        cy.wait(3000)
    })

    it(' Should be displayed an Error message of invalid credentials',()=>{

        LoginPage.typeEmail('ajit.k@dror.co.in')
        LoginPage.typePassword('12334543543')
        LoginPage.login()
    })

})
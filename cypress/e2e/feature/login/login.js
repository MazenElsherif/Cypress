import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../Pages/HomePage'
import RigestrationPage from '../../../Pages/RigestrationPage'
const firstname='mazen'
const homepageobject = new HomePage()
const rigesterobje = new RigestrationPage()
beforeEach(() => {
    cy.fixture('data').as('user')

})
Given('Iam in home Page',()=>{
    cy.visit('https://demo.nopcommerce.com/')
})
When('click on register button', () => {
    homepageobject.getRigster_button().click()
})
When('fill rigestration data', () => {
    cy.get('@user').then(user => {
        rigesterobje.getgender().click()
        rigesterobje.getfirstname().type(user.Firstname)
        rigesterobje.getlastname().type(user.lastname)
        rigesterobje.getday().select('1')


    })
   

})

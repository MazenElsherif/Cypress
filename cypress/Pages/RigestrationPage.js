

const male = '#gender-male'
const firstname = '#FirstName'
const lastname = '#LastName'
const day = '[name="DateOfBirthDay"]'
const month = '[name="DateOfBirthMonth"]'
const year = '[name="DateOfBirthYear"]'
const email = '#Email'
const password = '#Password'
const conpassword = '#ConfirmPassword'
const reg_button ='#register-button'
class RigestrationPage {
    getgender() { return cy.get(male) }
    getfirstname() { return cy.get(firstname) }
    getlastname() { return cy.get(lastname) }
    getday() {return cy.get(day) }

}
export default RigestrationPage
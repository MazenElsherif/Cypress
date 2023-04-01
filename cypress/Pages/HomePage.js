const reigster_button = '.ico-register'
const login_button ='.ico-login'

class HomePage {
    getRigster_button() { return cy.get(reigster_button)}
    getlogin_button() { return cy.get(login_button)}
}
export default HomePage
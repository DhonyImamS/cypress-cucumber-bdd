class MidtransPage {

    static navigatePage(urls) {
        cy.viewport(1440, 900) 
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static doCheckout() {
        cy.get('a[class="btn buy"]').click();
        cy.get('.cart-checkout').click();
    }

    static choosePaymentMethod(option) {
        if (option === 'credit_card') cy.get('iframe[id="snap-midtrans"]').iframe().find('a[href*="credit-card"]').click();
    }

    static setCredentialPayment(cardnumber, cvv, exp) {
        cy.get('iframe[id="snap-midtrans"]').iframe().find('.card-number input[type="tel"]').clear();
        cy.get('iframe[id="snap-midtrans"]').iframe().find('.card-number input[type="tel"]').type(cardnumber);
        cy.get('iframe[id="snap-midtrans"]').iframe().find('input[id="card-expiry"][type="tel"]').type(cvv);
        cy.get('iframe[id="snap-midtrans"]').iframe().find('input[id="card-cvv"][type="tel"]').type(exp);
    }

    static submitOtpPaymentCode(otp) {
        cy.wait(3000);

        cy.get('iframe[id="snap-midtrans"]')
            .iframe()
            .find('iframe[src^="https://api.sandbox.midtrans.com/v2/token/rba/redirect"]')
            .iframe().find('input[type="password"]')
            .type(otp); 

        cy.get('iframe[id="snap-midtrans"]')
            .iframe()
            .find('iframe[src^="https://api.sandbox.midtrans.com/v2/token/rba/redirect"]')
            .iframe()
            .find('button[name="ok"]')
            .click();
    }

    static clickPayNow() {
        cy.get('iframe[id="snap-midtrans"]').iframe().find('#application .card-pay-button-part > button').click();
    }

    static getTextPaymentResult(state) {
        let element = 'div.text-failed.text-bold span';

        if ( state === 'success' ) {
            element = '#application div.final-panel.success > div:nth-child(3)';
        } 
        
        return cy.get('iframe[id="snap-midtrans"]').iframe().find(element);
    }
}

export default MidtransPage;
class MidtransPage {

    static navigatePage(urls) {
        cy.viewport(1440, 900) 
        cy.visit(`${Cypress.config().baseUrl}${urls}`);
    }

    static doCheckout() {
        cy.get('a[class="btn buy"]').click();
        cy.get('.cart-checkout').click();
        cy.get('iframe[id="snap-midtrans"]').iframe().find('a.button-main-content').click();
    }

    static choosePaymentMethod(option) {
        if (option === 'credit_card') cy.get('iframe[id="snap-midtrans"]').iframe().find('a[href*="credit-card"]').click();
    }

    static setCredentialPayment(cardnumber, cvv, exp) {
        cy.get('iframe[id="snap-midtrans"]').iframe().find('input[name=cardnumber]').type(cardnumber);
        cy.get('iframe[id="snap-midtrans"]').iframe().find('div.input-group.col-xs-7').type(cvv);
        cy.get('iframe[id="snap-midtrans"]').iframe().find('div.input-group.col-xs-5').type(exp);

        cy.get('iframe[id="snap-midtrans"]').iframe().find('#application > div.button-main.show > a').click();
    }

    static submitOtpPaymentCode(otp) {
        cy.wait(5000);

        cy.get('iframe[id="snap-midtrans"]')
            .iframe()
            .find('iframe[src^="https://api.sandbox.veritrans.co.id/v2/token/rba/redirect"]')
            .iframe().find('input[type="password"]')
            .type(otp); 

        cy.get('iframe[id="snap-midtrans"]')
            .iframe()
            .find('iframe[src^="https://api.sandbox.veritrans.co.id/v2/token/rba/redirect"]')
            .iframe()
            .find('button[name="ok"]')
            .click();
    }

    static clickPayNow() {
        cy.get('iframe[id="snap-midtrans"]').iframe().find('#application > div.button-main.show > a').click();
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
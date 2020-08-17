import { Given, When, Then, And, After } from "cypress-cucumber-preprocessor/steps";
import MidtransPage from "../../page/midtrans_page";
import Hooks from "../../hooks/hook";

Given('I Open Home Page website Midtrans', () => {
    MidtransPage.navigatePage('#');
});

Then('I do checkout Pillow for my transaction', () => {
    MidtransPage.doCheckout();
});

And('I choose Credit Card for payment method', () => {
    MidtransPage.choosePaymentMethod('credit_card');
});

And(/^I input my credit card no "(.*)" with cvv "(.*)" and expiredAt "(.*)"$/, (cardnumber, cvv, exp ) => {
    MidtransPage.setCredentialPayment(cardnumber, cvv, exp);
});

Then('I click PAY NOW', () => {
    MidtransPage.clickPayNow();
});

And('I input password for confirm my payment', () => {
    MidtransPage.submitOtpPaymentCode('112233');
});

And(/^I will see "(.*)" payment$/, (state) => {
    let message = 'Transaction failed';
    let status = 'failed';

    if ( state === 'successfull' ) {
        status = 'success';
        message = 'Transaction successfull';
        MidtransPage.getTextPaymentResult(status).should('be.visible');
    } else {
        MidtransPage.getTextPaymentResult(status).should('have.text', message);
    }
});

// After(() => {
//     Hooks.reportFunc();
// });
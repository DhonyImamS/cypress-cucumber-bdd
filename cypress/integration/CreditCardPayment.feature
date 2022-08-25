Feature: Payment for Pillow Checkout Transaction with Midtrans
    
    @creditcard @positive
    Scenario: Check Mechanism Payment transaction using Valid Credit Card
        Given I Open Home Page website Midtrans
        Then I do checkout Pillow for my transaction
            And I choose Credit Card for payment method
            And I input my credit card no "4811111111111114" with cvv "0225" and expiredAt "123"
        Then I click PAY NOW
            And I input password for confirm my payment
            And I will see "successfull" payment

    @creditcard @negative
    Scenario: Check Mechanism Payment transaction using Invalid Credit Card
        Given I Open Home Page website Midtrans
        Then I do checkout Pillow for my transaction
            And I choose Credit Card for payment method
            And I input my credit card no "4911111111111113" with cvv "0225" and expiredAt "123"
        Then I click PAY NOW
            And I input password for confirm my payment
            And I will see "failed" payment

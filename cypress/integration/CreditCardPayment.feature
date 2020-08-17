Feature: Payment for Pillow Checkout Transaction with Midtrans
    
    @creditcard @positive
    Scenario: Check Mechanism Payment transaction using Valid Credit Card
        Given I Open Home Page website Midtrans
        Then I do checkout Pillow for my transaction
            And I choose Credit Card for payment method
            And I input my credit card no with cvv and expiredAt
        Then I click PAY NOW
            And I input password for confirm my payment
            And I will see successfull payment

    @creditcard @negative
    Scenario: Check Mechanism Payment transaction using Invalid Credit Card
        Given I Open Home Page website Midtrans
        Then I do checkout Pillow for my transaction
            And I choose Credit Card for payment method
            And I input my credit card no with cvv and expiredAt
        Then I click PAY NOW
            And I input password for confirm my payment
            And I will see failed payment


    Scenario: Check Mechanism Payment transaction using Invalid Credit Card
        Given I Open Home Page website QA FABELIO
        Then I search "Cessi" from searchbox product
        And I choose product "Cessi Chair"
        And I click TambahKeranjang for AddToCart
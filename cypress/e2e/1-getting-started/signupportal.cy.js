describe('RB Portal New user', function () {
  it('Portal new user End to End Test', function () {
    // Visit the RB Portal
    cy.visit("https://portaldev.rbcore.co.uk/");

    // Click on Apply Now using force to handle visibility issues
    cy.contains('Apply Now').click({ force: true });

    // Confirm all statements are correct
    cy.get('input[type="checkbox"]').click();

    // Start the application
    cy.contains('Start application').click();

    // Click on Loan Purpose Dropdown
    cy.get('div[aria-labelledby=":r0:-label :r0:"]').click();

    // Get loan data from fixtures
    cy.fixture('RBData').then((data) => {
      // Select Loan Purpose
      cy.contains(data.Loan_Purpose).click();
      // Enter Loan Amount
      cy.get('input[name="loanAmount"]').type(data.Loan_Amount);
      // Select Loan Term Dropdown
      cy.get('div[aria-labelledby=":r2:-label :r2:"]').click();
      // Select Loan Term
      cy.contains(data.Loan_Term).click();
      // Click on Next
      cy.get('button[type="submit"]').click();
      // Enter user information
      cy.get('input[name="firstName"]').type(data.First_Name);
      cy.get('input[name="lastName"]').type(data.Last_Name);
      cy.get('input[name="emailField"]').type(data.Email);
    });

    // Check agreement checkboxes
    cy.get('input[type="checkbox"]').eq(0).click(); // Read and Acknowledge Recognise bank privacy policy
    cy.get('input[type="checkbox"]').eq(1).click(); // I agree to receive updates

    // Click on Next
    cy.get('button[type="submit"]').click();

    // Enter OTP
    cy.get('input[aria-label="Please enter OTP character 1"]').type(1);
    cy.get('input[aria-label="Please enter OTP character 2"]').type(2);
    cy.get('input[aria-label="Please enter OTP character 3"]').type(3);
    cy.get('input[aria-label="Please enter OTP character 4"]').type(4);
    cy.get('input[aria-label="Please enter OTP character 5"]').type(5);
    cy.get('input[aria-label="Please enter OTP character 6"]').type(6);

    // Click on Submit
    cy.get('button[type="submit"]').click();

    // Continue through additional steps
    //cy.get('button[type="button"]:nth-child(3):contains("Continue")').click({ force: true });

    //cy.contains('Continue').click();

    // Select Business Type
    //cy.get('svg[data-name="Limited Company"]').click();
    //cy.contains('Next').click();

    // Enter Business Name from fixture data
    //cy.fixture('RBData').then((data) => {
      //cy.get('input[type="text"]').eq(0).type(data.Business_Name);
      //cy.contains(data.Business_Name).click(); // Assuming the correct option is visible
    //});

    // Continue with additional steps if needed
 // });
});

describe("Testing all the website", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Test Case 1: Register User", () => {
    cy.get("body").should("be.visible");

    cy.contains("Signup / Login").click();

    cy.get("h2").contains("New User Signup!").should("be.visible");

    cy.get('[data-qa="signup-name"]').type("Henrique");

    cy.get('[data-qa="signup-email"]').type("Emailxxx1@gmail.com");

    cy.get('[data-qa="signup-button"]').click();

    cy.contains("Enter Account Information").should("be.visible");

    cy.get('[data-qa="password"]').type("123456");

    cy.get("#id_gender1").click();

    cy.get('[data-qa="days"]').select("30");

    cy.get('[data-qa="months"]').select("6");

    cy.get('[data-qa="first_name"]').type("Henrique");

    cy.get('[data-qa="last_name"]').type("Silva");

    cy.get('[data-qa="company"]').type("Company name");

    cy.get('[data-qa="address"]').type("Address name");

    cy.get('[data-qa="country"]').select("United States");

    cy.get('[data-qa="state"]').type("State name");

    cy.get('[data-qa="city"]').type("City name");

    cy.get('[data-qa="zipcode"]').type("12345");

    cy.get('[data-qa="mobile_number"]').type("1234567890");

    cy.get('[data-qa="create-account"]').click();

    cy.get('[data-qa="continue-button"]');

    cy.get(":nth-child(5) > a").click();

    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();

    cy.get('[data-qa="continue-button"]').click();

    cy.url().should("eq", "https://automationexercise.com/");
  });
});

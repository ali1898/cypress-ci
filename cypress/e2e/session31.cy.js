/// <reference types="cypress"/>

describe("Session 31", () => {
  it("01-Passing test", () => {
    cy.visit("https://play1.automationcamp.ir/forms.html");
    cy.get("#notes")
      .type("Automation Camp")
      .should("have.value", "Automation Camp");
  });

  it("02-Failing test", () => {
    cy.visit("https://play1.automationcamp.ir/forms.html");
    cy.get("#notes")
      .type("Automation Camp")
      .should("have.value", "AutomationCamp");
  });
});

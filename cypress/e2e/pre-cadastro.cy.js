/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");

describe("Funcionalidade: Pré-cadastro", () => {
  let name = null;
  let lastName = null;
  let email = null;
  let nickname = null;

  beforeEach(() => {
    cy.visit("/minha-conta");
    name = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email(name, lastName);
  });

  it("Pré-cadastrar com sucesso", () => {
    cy.get("#reg_email").type(email);
    cy.get("#reg_password").type("Senhateste159!");
    cy.get("[name=register]").click();
    cy.get(".woocommerce-MyAccount-navigation-link--edit-account").click();
    cy.get("#account_first_name").type(name);
    cy.get("#account_last_name").type(lastName);
    cy.get(".woocommerce-Button").click();
    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
});

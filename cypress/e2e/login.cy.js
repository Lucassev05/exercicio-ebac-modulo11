/// <reference types="cypress" />

describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("/minha-conta");
  });

  it("Login com sucesso", () => {
    cy.get("#username").type("lucasebac@ebac.com");
    cy.get("#password").type("Senhateste159!");
    cy.get("[name=login]").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, lucasebac (não é lucasebac? Sair)"
    );
  });

  it("Login com senha incorreta", () => {
    cy.get("#username").type("lucasebac@ebac.com");
    cy.get("#password").type("senhateste159!");
    cy.get("[name=login]").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: a senha fornecida para o e-mail lucasebac@ebac.com está incorreta. Perdeu a senha?"
    );
  });

  it("Login com e-mail incorreto", () => {
    cy.get("#username").type("lucaseba@ebac.com");
    cy.get("#password").type("senhateste159!");
    cy.get("[name=login]").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
  });
});

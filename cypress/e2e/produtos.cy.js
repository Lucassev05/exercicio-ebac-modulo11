/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");

describe("Funcionalidade: Produtos", () => {
  beforeEach(() => {
    cy.visit("/produtos");
  });

  it("Selecionar um produto da lista", () => {
    cy.get(".product-block").first().click();
  });

  it("Adicionar produto ao carrinho", () => {
    const qtd = faker.number.int({ min: 1, max: 10 });
    cy.get(".product-block").first().click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Green").click();
    cy.get(".input-text").clear().type(qtd);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").contains(qtd);
    cy.get(".woocommerce-message").should(
      "contain",
      `${qtd} × “Abominable Hoodie” foram adicionados no seu carrinho.`
    );
  });
});

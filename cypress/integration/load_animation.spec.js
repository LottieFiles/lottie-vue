/**
 * Copyright 2022 Design Barn Inc.
 */

context("Player component DOM check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/load");
  });

  it('Loads an animation on page.', () => {
    cy.get("#player-one").should("have.length", 1);
  });

  it('Loads an animation with empty URL and spinner displays.', function () {
    cy.get("#player-two .spinner")
      .should("have.class", "spinner");
  });

  it('Loads an animation with invalid url.', function () {
    cy.get("#player-three lottie-player")
      .shadow()
      .find(".error")
      .should("have.class", "error");
  });

  it("Looks inside shadow-dom div for animation-container class", () => {
    cy.get("#player-one lottie-player")
      .shadow()
      .find("#animation-container")
      .should("have.class", "main");
  });

  it("Looks inside shadow-dom for aria-label", () => {
    cy.get("#player-one lottie-player")
      .shadow()
      .find("#animation-container")
      .should("have.attr", "aria-label");
  });

  it("Verifies controls", () => {
    cy.get("#player-one")
      .find("#lottie-controls")
    cy.get("#player-one")
      .find("#lottie-pause-button")
    cy.get("#player-one")
      .find("#lottie-speed-button")
    cy.get("#player-one")
      .find("#lottie-seeker-input")
    cy.get("#player-one")
      .find("#lottie-toogle-loop-button")
    cy.get("#player-one")
      .find("#lottie-bg-picker-button")
    cy.get("#player-four")
      .find("#lottie-play-button")
  });
});

/**
 * Copyright 2022 Design Barn Inc.
 */

context("Player properties", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/properties");
  });

  it("Player-one Should have a green background.", () => {
    cy.get("#player-one lottie-player")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 255, 107)");
  });

  it("Player-two should play at x5 the speed", () => {
    cy.get("#player-two lottie-player").then(($el) => {
      const playerTwo = $el.get(0);

      expect(playerTwo.speed).to.eq(5);
    });
  });

  it("Player-three should autoplay and loop", function (done) {
    cy.get("#player-three lottie-player").then(($el) => {
      const playerThree = $el.get(0);

      playerThree.addEventListener("play", () => {
        expect(playerThree.loop).to.eq(true);
        done();
      });
    });
  });
});

/**
 * Copyright 2022 Design Barn Inc.
 */

context("Player state", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/methods");
  });

  it("Player-one should have play toggled.", function (done) {
    cy.get("#player-one lottie-player").then(($el) => {
      const playerOne = $el.get(0);

      playerOne.addEventListener("play", () => {
        expect(playerOne.currentState).to.eq("playing");
        done();
      });
    });
  });

  it("Player-two should have loop toggled.", function (done) {
    cy.get("#player-two lottie-player").then(($el) => {
      const playerTwo = $el.get(0);

      playerTwo.addEventListener("play", () => {
        expect(playerTwo.currentState).to.eq("playing");
        expect(playerTwo.loop).to.eq(true);
        done();
      });
    });
  });

  it("Player-three should play at x5 the speed", function(done) {
    cy.get("#player-three lottie-player").then(($el) => {
      const playerThree = $el.get(0);

      playerThree.addEventListener("play", () => {
        expect(playerThree.getLottie().playSpeed).to.eq(5);
        done();
      }, { once: true })
    });
  });

  it("Player-four Should have a green background.", () => {
    cy.get("#player-four lottie-player")
      .should("have.css", "background-color")
      .and("eq", "rgb(0, 255, 107)");
  });

  it("Player-five should be paused and loop false.", function (done) {
    cy.get("#player-five lottie-player").then(($el) => {
      const playerFive = $el.get(0);

      playerFive.addEventListener("pause", () => {
        expect(playerFive.currentState).to.eq("paused");
        expect(playerFive.loop).to.eq(false);
        done();
      });
    });
  });
});
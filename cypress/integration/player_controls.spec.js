/**
 * Copyright 2022 Design Barn Inc.
 */

context("Player controls", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/controls");
  });

  it.skip("clicks on play button and verifies animation is playing", function (done) {
    cy.get("#player-one").find("#lottie-play-button").click();

    cy.get("#player-one").find('lottie-player').then(($el) => {
      const playerOne = $el.get(0);

      console.log(playerOne);
      expect(playerOne.currentState).to.eq("playing");
      done();
    });
  });

  it("clicks on pause button and verifies animation is paused", function (done) {
    cy.get("#player-two lottie-player").then(($el) => {
      const playerTwo = $el.get(0);

      playerTwo.addEventListener("pause", () => {
        expect(playerTwo.currentState).to.eq("paused");
        done();
      });
    });
    cy.get("#player-two").find("#lottie-pause-button").click();
  });

  it("clicks on stop button and verififes animation is stopped and at frame 0", function (done) {
    cy.get("#player-three lottie-player").then(($el) => {
      const playerThree = $el.get(0);

      playerThree.addEventListener("stop", () => {
        expect(playerThree.currentState).to.eq("stopped");
        expect(playerThree.getLottie().currentFrame).to.eq(0);
        done();
      });
    });

    cy.get("#player-three").find("#lottie-stop-button").click();
  });

  it("clicks on loop button and verififes animation loops", function (done) {
    cy.get("#player-four #lottie-controls").find("#lottie-toogle-loop-button").click();
    cy.get("#player-four lottie-player").then(($el) => {
      const playerFour = $el.get(0);

      console.log(playerFour);
      expect(playerFour.loop).to.eq(true);
      done();
    });
  });

  it("clicks on color background choice and verifies background color", function () {
    cy.get("#player-five #lottie-controls").find("#lottie-bg-picker-button").click();
    cy.get("#player-five #lottie-controls").find("#lottie-color-choice-4").click();
    cy.get("#player-five lottie-player")
      .should("have.css", "background-color")
      .and("eq", "rgb(58, 146, 218)");
  });
});

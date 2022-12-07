<template>
  <div>
    <div
      style="display: flex; justify-content: center; align-content: center"
    ></div>
    <div
      style="display: flex; justify-content: center; align-content: center"
    ></div>
    <br />
    <lottie-vue-player
      ref="playerOne"
      id="player-one"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :loop="false"
      :autoplay="false"
    ></lottie-vue-player>

    <lottie-vue-player
      ref="playerTwo"
      id="player-two"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :loop="false"
      :autoplay="false"
    ></lottie-vue-player>

    <lottie-vue-player
      ref="playerThree"
      id="player-three"
      :src="`https://assets2.lottiefiles.com/private_files/lf30_qc59a1iw.json`"
      :loop="false"
      :autoplay="false"
    ></lottie-vue-player>

    <lottie-vue-player
      ref="playerFour"
      id="player-four"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :loop="false"
      :autoplay="false"
    ></lottie-vue-player>

    <lottie-vue-player
      ref="playerFive"
      id="player-five"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :loop="true"
      :autoplay="true"
    ></lottie-vue-player>
  </div>
</template>

<script>
export default {
  name: "Load",
  data() {
    return {
      playerOne: null,
      playerTwo: null,
      playerThree: null,
      playerFour: null,
      playerFive: null,

      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: "#fff",
        backgroundStyle: "color",
        theme: {
          controlsView: "standard",
          active: "light",
          light: {
            color: "#3D4852",
            backgroundColor: "#fff",
            opacity: "0.7",
          },
          dark: {
            color: "#fff",
            backgroundColor: "#202020",
            opacity: "0.7",
          },
        },
      },
    };
  },
  mounted() {
    this.playerOne = this.$refs.playerOne;
    this.playerTwo = this.$refs.playerTwo;
    this.playerThree = this.$refs.playerThree;
    this.playerFour = this.$refs.playerFour;
    this.playerFive = this.$refs.playerFive;

    setTimeout(() => {
      this.playerOne.togglePlayPause();
    }, 2000);

    setTimeout(() => {
      this.playerTwo.toggleLoop();
      this.playerTwo.togglePlayPause();
    }, 2000);

    setTimeout(() => {
      this.playerThree.setPlayerSpeed(5);
      this.playerThree.togglePlayPause();
      this.playerThree.toggleLoop();
    }, 2000);

    setTimeout(() => {
      this.playerFive.toggleLoop();
      this.playerFive.togglePlayPause();
    }, 2000);

    this.playerFour.setBackgroundColor("#00ff6b");

    console.log(this.playerOne.getVersions());
  },
};
</script>

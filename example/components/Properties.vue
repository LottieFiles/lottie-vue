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
      id="player-one"
      :background-color="'#00ff6b'"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :loop="false"
      :autoplay="false"
    ></lottie-vue-player>

    <lottie-vue-player
      id="player-two"
      :background-color="'#00ff6b'"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :speed="5"
      :loop="true"
      :autoplay="true"
    ></lottie-vue-player>

    <lottie-vue-player
      id="player-three"
      :background-color="'#00ff6b'"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :player-controls="true"
      :showColorPicker="true"
      :speed="5"
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
};
</script>

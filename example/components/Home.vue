<template>
  <div>
    <div style="display: flex; justify-content: center; align-content: center">
    </div>
    <div style="display: flex; justify-content: center; align-content: center">
      <h1>Welcome to LottieVue example</h1>
    </div>
    <br />
    <lottie-vue-player
      id="player-one"
      :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
      :theme="options.theme"
      :player-size="options.playerSize"
      :player-controls="true"
      :showColorPicker="true"
      :loop="true"
      :autoplay="true"
      style="width: 100%; height: 400px"
    ></lottie-vue-player>
  </div>
</template>

<script>
export default {
  name: "Home",
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

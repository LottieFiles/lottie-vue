<template>
    <div id="app">
        <div style="display: flex; justify-content: center; align-content: center">
            <img alt="Vue logo" src="./assets/logo.png">
        </div>
        <div style="display: flex; justify-content: center; align-content: center">
            <h1>Welcome to LottieVue example</h1>
        </div>
        <br>
      <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
                         :theme="options.theme"
                         :player-size="options.playerSize"
                         :player-controls="true"
                         :show-color-picker="true"
                         style="width: 100%; height:400px">
      </lottie-vue-player>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                options: {
                    minimizable: false,
                    playerSize: "standard",
                    backgroundColor: '#fff',
                    backgroundStyle: 'color',
                    theme: {
                        controlsView: "standard",
                        active: "light",
                        light: {
                            color: '#3D4852',
                            backgroundColor: '#fff',
                            opacity: '0.7',
                        },
                        dark: {
                            color: '#fff',
                            backgroundColor: '#202020',
                            opacity: '0.7',
                        }
                    }
                }
            }
        }
    }
</script>

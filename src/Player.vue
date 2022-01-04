<template>
    <div class="w-full relative">
        <div v-if="loading" class="w-full h-full absolute flex justify-center items-center">
            <div class="spinner"></div>
        </div>
        <lottie-player
                ref="player"
                :autoplay="autoplay"
                :src="src"
                :loop="options.loop"
                :speed="options.speed"
                :style="{height: height, background: options.backgroundColor}"
                @dblclick="toggleFullscreen"
        ></lottie-player>
        <controls
                v-if="playerControls && options.animation"
                @setBackgroundColor="setBackgroundColor"
                @setPlayerSpeed="setPlayerSpeed"
                @togglePlayPause="togglePlayPause"
                @toggleLoop="toggleLoop"
                @stop="stop"
                :show-color-picker-tool="showColorPicker"
                :player-size="playerSize"
                :player-controls-position="playerControlPosition"
                :theme="theme"
                :options="options">
        </controls>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'
    import "@lottiefiles/lottie-player";
    import Controls from "./Controls.vue";

    export default {
        components: {
            'controls': Controls
        },
      mounted() {
        this.player = this.$refs.player;
        console.log(this.player.value);

        this.player.addEventListener('ready', function() {
          console.log("Animation is ready!");
          this.options.animation = this.player.getLottie();
          this.options.currentFrame = this.options.animation.currentFrame;
          this.loading = false;

          // Otherwise the current frame doesn't get detected and computed methods
          // don't fire
          this.options.animation.addEventListener('enterFrame', function() {
            this.options.currentFrame = this.options.animation.currentFrame;
          }.bind(this));

        }.bind(this));
        this.player.addEventListener('complete', function() {
          this.stop();
        }.bind(this));

        this.options.backgroundColor = this.backgroundColor;
        this.options.speed = this.speed;
      },
        props: {
            autoplay: {
                type: Boolean,
                default: true
            },
            loop: {
                type: Boolean,
                default: true
            },
            showColorPicker: {
                type: Boolean,
                default: false
            },
            speed: {
                type: Number,
                default: 1
            },
            height: {
                type: String,
                default: '100%'
            },
            backgroundColor: {
                type: String,
                default: 'transparent'
            },
            theme: {
                type: Object,
                default: function () {
                    return {
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
            },
            src: {
                type: String
            },
            playerSize: {
                type: String,
                default: "standard" // hide, minimal, standard
            },
            playerControlPosition: {
                type: String,
                default: '',
            },
            playerControls: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                options: {
                    loop: true,
                    playing: true,
                    speed: 1,
                    animation: null,
                    currentFrame: null,
                    backgroundColor: 'transparent',
                },
                // player: null,
                loading: true
            }
        },
        methods: {
            togglePlayPause() {
                if (this.options.playing) {
                    this.player.pause();
                    this.options.playing = false;
                } else {
                    this.player.play();
                    this.options.playing = true;
                }
            },
            toggleLoop() {
                if (this.options.loop) {
                    this.player.setLooping(false);
                    this.options.loop = false;
                } else {
                    this.player.setLooping(true);
                    this.options.loop = true;
                    this.options.playing = true;
                    this.player.play();
                }
            },
            setPlayerSpeed(speed) {
                this.player.setSpeed(speed);
                this.$emit('setPlayerSpeed', speed);
            },
            stop() {
                this.player.seek(1);
                this.player.stop();
                this.options.playing = false;
            },
            setBackgroundColor(color) {
                this.options.backgroundColor = color;
                this.$emit('setBackgroundColor', color);
            },
            toggleFullscreen() {
                this.$emit('toggleFullscreen');
            },
        }
    }
</script>

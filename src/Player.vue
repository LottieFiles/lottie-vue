<template>
    <div class="w-full relative lottie-player">
        <div v-if="loading" class="w-full h-full absolute flex justify-center items-center">
            <div class="spinner"></div>
        </div>
        <div style="all: inherit">
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
    </div>
</template>
<script>
    import "@lottiefiles/lottie-player";
    import Controls from "./Controls.vue";

    export default {
        components: {
            'controls': Controls
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
                    backgroundColor: 'transparent',
                },
                player: null,
                loading: true
            }
        },
        mounted() {
            this.player = this.$refs.player;
            this.player.addEventListener('ready', function () {
                this.options.animation = this.player.getLottie();
                this.loading = false;
            }.bind(this));
            this.player.addEventListener('complete', function () {
                this.stop();
            }.bind(this));
            this.options.backgroundColor = this.backgroundColor;
            this.options.speed = this.speed;
            this.options.loop = this.loop;
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

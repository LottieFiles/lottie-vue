<template>
    <!-- track-->
    <div v-if="options.animation" class="w-86 flex flex-col justify-center">
        <input type="range"
               class="w-full mb-1"
               id="lf-range"
               step="0.5"
               min="0"
               :max="options.animation.totalFrames"
               :value="getCurrentFrame"
               v-on:input="seek"
               :style="{
                backgroundImage: [
                    '-webkit-gradient(linear, left top, right top, color-stop('+playedPercent+', rgba(15, 204, 206, 1)), color-stop('+playedPercent+', #DAE1E7))',
                    '-moz-linear-gradient(left center, rgba(15, 204, 206, 1) 0%, rgba(15, 204, 206, 1) '+playedPercent+', #DAE1E7 '+playedPercent+', #DAE1E7 100%)'
                ]
            }"
        />
        <div class="w-full relative" :style="{top: '10px'}">
            <span :class="theme.active ? 'bg-white' : ''"
                  class="min-w-6 absolute pin-l border border-grey-light px-1 py-2px rounded-md text-grey-darkest text-xs text-center font-lf">{{ getCurrentFrame }}</span>
            <span :class="theme.active ? 'bg-white' : ''"
                  class="min-w-6 absolute pin-r border border-grey-light px-1 py-2px rounded-md text-grey-darkest text-xs text-center font-lf">{{ options.animation.totalFrames }}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'options', 'theme'
        ],
        data() {
            return {
                max: 100,
                value: 100,
                current: 0,
                seekerRangeFillTimer: null,
            }
        },
        computed: {
            getCurrentFrame() {
                return Math.round(this.options.animation.currentFrame);
            },
            playedPercent() {
                return Math.round(this.options.animation.currentFrame / this.options.animation.getDuration(true) * 100) + '%';
            }
        },
        destroyed() {
            clearInterval(this.seekerRangeFillTimer);
        },
        methods: {
            seek(e) {
                if (this.options.playing) {
                    this.options.animation.goToAndPlay(parseFloat(e.target.value), true);
                } else {
                    this.options.animation.goToAndStop(parseFloat(e.target.value), true);
                }
            },
        }
    }
</script>

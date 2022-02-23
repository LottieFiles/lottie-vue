<template>
  <!-- track-->
  <div
    v-if="options.animation"
    class="lf-w-86 lf-flex lf-flex-col lf-justify-center"
  >
    <input
      type="range"
      class="w-full lf-mb-1"
      id="lf-range"
      step="0.5"
      min="0"
      :max="options.animation.totalFrames"
      :value="getCurrentFrame"
      v-on:input="seek"
      :style="{
        backgroundImage: [
          '-webkit-gradient(linear, left top, right top, color-stop(' +
            playedPercent +
            ', rgba(15, 204, 206, 1)), color-stop(' +
            playedPercent +
            ', #DAE1E7))',
          '-moz-linear-gradient(left center, rgba(15, 204, 206, 1) 0%, rgba(15, 204, 206, 1) ' +
            playedPercent +
            ', #DAE1E7 ' +
            playedPercent +
            ', #DAE1E7 100%)',
        ],
      }"
    />
    <div class="w-full lf-relative" :style="{ top: '10px' }">
      <span
        :class="theme.active ? 'bg-white' : ''"
        class="lf-min-w-6 lf-absolute lf-pin-l lf-border lf-border-grey-light lf-px-1 lf-py-2px lf-rounded-md text-grey-darkest lf-text-xs lf-text-center font-lf"
        >{{ getCurrentFrame }}</span
      >
      <span
        :class="theme.active ? 'bg-white' : ''"
        class="lf-min-w-6 lf-absolute lf-pin-r lf-border lf-border-grey-light lf-px-1 lf-py-2px lf-rounded-md text-grey-darkest lf-text-xs lf-text-center font-lf"
        >{{ options.animation.totalFrames }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["options", "theme"],
  data() {
    return {
      max: 100,
      value: 100,
      current: 0,
      seekerRangeFillTimer: null,
    };
  },
  computed: {
    getCurrentFrame() {
      return Math.round(this.options.animation.currentFrame);
    },
    playedPercent() {
      return (
        Math.round(
          (this.options.animation.currentFrame /
            this.options.animation.getDuration(true)) *
            100
        ) + "%"
      );
    },
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
  },
};
</script>

<template>
  <div
    id="lottie-controls"
    v-if="playerSize !== 'hide'"
    :class="
      playerControlsPosition === 'lf-fixed'
        ? 'lf-fixed lf-mb-18 lf-sm:mb-0'
        : ''
    "
    class="lf-w-full lf-pin-b lf-pin-l lf-px-3 lf-py-6"
  >
    <div class="lf-flex lf-justify-center lf-items-center lf-text-center">
      <!-- stop-->
      <div
        id="lottie-stop-button"
        v-if="playerSize === 'minimal'"
        @click="stop"
        :class="
          (options.playing === true ? 'lf-opacity-50' : '') +
          ' ' +
          (theme.active === 'dark' && options.playing === false
            ? 'lf-opacity-70'
            : '')
        "
        class="lf-trans-fast lf-mx-3 lf-flex lf-items-center cursor-pointer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.49939 2.16654C0.49939 1.24607 1.24558 0.499878 2.16606 0.499878H13.8327C14.7532 0.499878 15.4994 1.24607 15.4994 2.16654V13.8332C15.4994 14.7537 14.7532 15.4999 13.8327 15.4999H2.16606C1.24558 15.4999 0.49939 14.7537 0.49939 13.8332V2.16654Z"
            :fill="theme[theme.active].color"
          />
        </svg>
      </div>

      <!-- play-->
      <div
        id="lottie-play-button"
        v-if="!options.playing"
        @click="togglePlayPause"
        :class="
          (theme.active === 'dark' ? 'lf-opacity-70' : '') +
          (playerSize === 'minimal' ? ' lf-mx-3' : ' lf-mx-2')
        "
        class="lf-flex lf-items-center lf-justify-center lf-w-8 lf-h-8 cursor-pointer"
      >
        <svg
          width="25"
          height="28"
          viewBox="0 0 25 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.337646 2.1919C0.337646 0.77695 1.87254 -0.104646 3.09474 0.608306L23.3372 12.4164C24.55 13.1238 24.55 14.8762 23.3372 15.5836L3.09474 27.3917C1.87254 28.1046 0.337646 27.223 0.337646 25.8081V2.1919Z"
            :fill="theme[theme.active].color"
          />
        </svg>
      </div>

      <!-- pause-->
      <div
        id="lottie-pause-button"
        v-if="options.playing"
        @click="togglePlayPause"
        :class="
          (theme.active === 'dark' ? 'lf-opacity-70' : '') +
          (playerSize === 'minimal' ? ' lf-mx-3' : ' lf-mx-2')
        "
        class="lf-trans-fast lf-flex lf-items-center lf-justify-center lf-w-8 lf-h-8 cursor-pointer"
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="0.545471"
            width="7.63636"
            height="22.9091"
            rx="1.90909"
            :fill="theme[theme.active].color"
          />
          <rect
            y="0.545471"
            width="7.63636"
            height="22.9091"
            rx="1.90909"
            :fill="theme[theme.active].color"
          />
        </svg>
      </div>

      <!--  speed-->
      <div
        id="lottie-speed-button"
        v-if="playerSize === 'standard'"
        @click="setPlayerSpeed"
        class="lf-mx-2 lf-flex lf-items-center cursor-pointer"
      >
        <span
          class="lf-min-w-8 bg-white lf-border lf-border-grey-light lf-px-1 lf-py-1 lf-rounded-md text-grey-darkest lf-text-xs lf-text-center font-lf"
          >{{ speeds[activeSpeedIndex] }}x</span
        >
      </div>

      <seeker
        id="lottie-seeker-input"
        class="lf-mx-2"
        v-if="playerSize === 'standard'"
        :theme="theme"
        :options="options"
      ></seeker>

      <!-- loop-->
      <div
        id="lottie-toogle-loop-button"
        @click="toggleLoop"
        :class="
          (options.loop === false ? 'lf-opacity-50' : '') +
          ' ' +
          (theme.active === 'dark' && options.loop === true
            ? 'lf-opacity-70'
            : '') +
          (playerSize === 'minimal' ? ' lf-mx-3' : ' lf-mx-2')
        "
        class="lf-relative cursor-pointer"
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7587 3.8343H2.79288C2.35552 3.8343 2.00104 4.18877 2.00104 4.62613V9.73548C2.00104 10.1728 2.35552 10.5273 2.79288 10.5273C3.23024 10.5273 3.58471 10.1728 3.58471 9.73548V5.418H14.7587C15.1961 5.418 15.5505 5.06352 15.5505 4.62616C15.5506 4.18882 15.1961 3.8343 14.7587 3.8343Z"
            :fill="theme[theme.active].color"
            :stroke="theme[theme.active].color"
            stroke-width="0.262318"
          />
          <path
            d="M15.3 4.06877L15.2999 4.06874L12.503 1.24981L12.503 1.2498C12.1948 0.939196 11.6935 0.93729 11.3831 1.24535C11.0727 1.55335 11.0706 2.0546 11.3786 2.36505C11.3786 2.36506 11.3786 2.36506 11.3786 2.36507L13.62 4.62417L11.3808 6.86334C11.0714 7.17246 11.0714 7.67403 11.3808 7.98315C11.5354 8.13773 11.7381 8.21512 11.9406 8.21512C12.1431 8.21512 12.346 8.13776 12.5006 7.98343L12.5007 7.98335L15.2976 5.18642C15.6062 4.87801 15.6069 4.37835 15.3 4.06877Z"
            :fill="theme[theme.active].color"
            :stoke="theme[theme.active].color"
            stroke-width="0.262318"
          />
          <mask
            id="path-3-outside-1"
            maskUnits="userSpaceOnUse"
            x="1.57104"
            y="8.24951"
            width="14"
            height="11"
            fill="black"
          >
            <rect fill="white" x="1.57104" y="8.24951" width="14" height="11" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.68456 14.3588L6.24808 12.6899C6.4899 12.432 6.4899 12.0136 6.24808 11.7557C6.12717 11.6266 5.96893 11.5621 5.81047 11.5621C5.652 11.5621 5.49357 11.6266 5.37266 11.7554L2.75237 14.5524C2.51123 14.8097 2.51058 15.2266 2.75056 15.4849L5.37082 18.3038C5.6118 18.563 6.0036 18.5646 6.24623 18.3076C6.48887 18.0506 6.49052 17.6323 6.24973 17.3734L4.67601 15.6802H14.3798C14.7217 15.6802 14.9988 15.3845 14.9988 15.0195V9.91019C14.9988 9.54527 14.7217 9.24951 14.3798 9.24951C14.038 9.24951 13.7609 9.54527 13.7609 9.91019V14.3588H4.68456Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.68456 14.3588L6.24808 12.6899C6.4899 12.432 6.4899 12.0136 6.24808 11.7557C6.12717 11.6266 5.96893 11.5621 5.81047 11.5621C5.652 11.5621 5.49357 11.6266 5.37266 11.7554L2.75237 14.5524C2.51123 14.8097 2.51058 15.2266 2.75056 15.4849L5.37082 18.3038C5.6118 18.563 6.0036 18.5646 6.24623 18.3076C6.48887 18.0506 6.49052 17.6323 6.24973 17.3734L4.67601 15.6802H14.3798C14.7217 15.6802 14.9988 15.3845 14.9988 15.0195V9.91019C14.9988 9.54527 14.7217 9.24951 14.3798 9.24951C14.038 9.24951 13.7609 9.54527 13.7609 9.91019V14.3588H4.68456Z"
            :fill="theme[theme.active].color"
          />
          <path
            d="M4.68456 14.3588L4.49313 14.1795L4.07936 14.6211H4.68456V14.3588ZM6.24808 12.6899L6.05673 12.5105L6.05664 12.5106L6.24808 12.6899ZM6.24808 11.7557L6.05664 11.935L6.05673 11.9351L6.24808 11.7557ZM5.37266 11.7554L5.1814 11.5759L5.18123 11.5761L5.37266 11.7554ZM2.75237 14.5524L2.94377 14.7318L2.94381 14.7317L2.75237 14.5524ZM2.75056 15.4849L2.55837 15.6634L2.55843 15.6635L2.75056 15.4849ZM5.37082 18.3038L5.17868 18.4824L5.1787 18.4825L5.37082 18.3038ZM6.24973 17.3734L6.05759 17.5519L6.05761 17.552L6.24973 17.3734ZM4.67601 15.6802V15.4179H4.07406L4.48387 15.8588L4.67601 15.6802ZM13.7609 14.3588V14.6211H14.0232V14.3588H13.7609ZM4.876 14.5382L6.43951 12.8692L6.05664 12.5106L4.49313 14.1795L4.876 14.5382ZM6.43943 12.8693C6.77588 12.5105 6.77588 11.935 6.43943 11.5762L6.05673 11.9351C6.20393 12.0921 6.20393 12.3535 6.05673 12.5105L6.43943 12.8693ZM6.43951 11.5763C6.26895 11.3943 6.04139 11.2998 5.81047 11.2998V11.8244C5.89646 11.8244 5.98538 11.8589 6.05664 11.935L6.43951 11.5763ZM5.81047 11.2998C5.57967 11.2998 5.35197 11.3942 5.1814 11.5759L5.56393 11.9349C5.63517 11.859 5.72434 11.8244 5.81047 11.8244V11.2998ZM5.18123 11.5761L2.56094 14.373L2.94381 14.7317L5.56409 11.9348L5.18123 11.5761ZM2.56098 14.373C2.22545 14.731 2.22471 15.3043 2.55837 15.6634L2.94275 15.3064C2.79645 15.1489 2.79701 14.8883 2.94377 14.7318L2.56098 14.373ZM2.55843 15.6635L5.17868 18.4824L5.56295 18.1253L2.94269 15.3063L2.55843 15.6635ZM5.1787 18.4825C5.52278 18.8525 6.09015 18.855 6.43698 18.4876L6.05548 18.1275C5.91704 18.2742 5.70082 18.2735 5.56293 18.1252L5.1787 18.4825ZM6.43698 18.4876C6.77451 18.1301 6.77676 17.555 6.44185 17.1947L6.05761 17.552C6.20428 17.7097 6.20322 17.971 6.05548 18.1275L6.43698 18.4876ZM6.44187 17.1948L4.86815 15.5016L4.48387 15.8588L6.05759 17.5519L6.44187 17.1948ZM4.67601 15.9425H14.3798V15.4179H4.67601V15.9425ZM14.3798 15.9425C14.8824 15.9425 15.2611 15.5129 15.2611 15.0195H14.7365C14.7365 15.256 14.561 15.4179 14.3798 15.4179V15.9425ZM15.2611 15.0195V9.91019H14.7365V15.0195H15.2611ZM15.2611 9.91019C15.2611 9.41678 14.8824 8.98719 14.3798 8.98719V9.51183C14.561 9.51183 14.7365 9.67376 14.7365 9.91019H15.2611ZM14.3798 8.98719C13.8772 8.98719 13.4986 9.41678 13.4986 9.91019H14.0232C14.0232 9.67376 14.1987 9.51183 14.3798 9.51183V8.98719ZM13.4986 9.91019V14.3588H14.0232V9.91019H13.4986ZM13.7609 14.0965H4.68456V14.6211H13.7609V14.0965Z"
            :fill="theme[theme.active].color"
            mask="url(#path-3-outside-1)"
          />
        </svg>
      </div>

      <!-- background-color-->
      <div
        id="lottie-bg-picker-button"
        class="tools lf-relative"
        v-on-clickaway="hideColorPicker"
        v-if="showColorPickerTool"
        @click="showColorPicker"
      >
        <svg
          :class="theme.active === 'dark' ? 'lf-opacity-70' : ''"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2.34279L3.6 6.44351C2.72987 7.25453 2.13733 8.28782 1.89729 9.41269C1.65726 10.5376 1.78052 11.7035 2.25148 12.7631C2.72244 13.8227 3.51996 14.7284 4.54319 15.3655C5.56641 16.0027 6.76939 16.3428 8 16.3428C9.23061 16.3428 10.4336 16.0027 11.4568 15.3655C12.48 14.7284 13.2776 13.8227 13.7485 12.7631C14.2195 11.7035 14.3427 10.5376 14.1027 9.41269C13.8627 8.28782 13.2701 7.25453 12.4 6.44351L8 2.34279ZM8 0L13.6569 5.27211C14.7757 6.31483 15.5376 7.64334 15.8463 9.08963C16.155 10.5359 15.9965 12.035 15.391 13.3974C14.7855 14.7598 13.7601 15.9242 12.4445 16.7435C11.129 17.5627 9.58224 18 8 18C6.41775 18 4.87104 17.5627 3.55545 16.7435C2.23986 15.9242 1.21448 14.7598 0.608976 13.3974C0.00347275 12.035 -0.15496 10.5359 0.153714 9.08963C0.462388 7.64334 1.2243 6.31483 2.34311 5.27211L8 0ZM3.55556 10.5442H12.4444C12.4444 11.6428 11.9762 12.6964 11.1427 13.4732C10.3092 14.25 9.17874 14.6864 8 14.6864C6.82126 14.6864 5.6908 14.25 4.8573 13.4732C4.02381 12.6964 3.55556 11.6428 3.55556 10.5442Z"
            :fill="theme[theme.active].color"
          />
        </svg>
        <div
          v-show="colorPickerStatus"
          class="lf-absolute lf-pin-b lf-pin-r lf-bg-grey-lightest lf-border lf-border-grey-light lf-rounded-md lf-p-3"
          style="margin-right: -9px; margin-bottom: 50px"
        >
          <div>
            <div
              class="lf-w-4 lf-h-4 lf-absolute lf-bg-grey-lightest lf-border-r lf-border-t lf-border-grey-light lf-triangle-border"
            ></div>
            <div class="lf-p-2">
              <p class="font-lf-bold text-grey-darkest lf-mb-4">
                Background Color
              </p>
              <p class="font-lf text-grey-darkest lf-text-sm lf-mb-3">
                Enter Hex or select.
              </p>
              <input
                @keyup="updateBackgroundColor"
                v-model="backgroundColor"
                class="lf-w-full text-grey-dark lf-border lf-border-grey-light bg-white lf-px-3 lf-py-2 lf-rounded-md outline-none"
                style="font-size: 100%; box-sizing: border-box"
                type="text"
              />
            </div>
            <div class="lf-flex lf-p-2" style="margin: 0px -5px">
              <div
                v-for="(color, index) in colorPickerColors"
                :id="'lottie-color-choice-' + index"
                @click="setBackgroundColor(color)"
                class="lf-w-5 lf-h-5 lf-rounded-full cursor-pointer"
                :key="index"
                :style="{
                  backgroundColor: color.hex,
                  margin: '0px 5px',
                  border: 'solid 1px ' + color.border,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Seeker from "./Seeker.vue";
import { directive as onClickaway } from "vue-clickaway";

export default {
  directives: {
    onClickaway: onClickaway,
  },
  components: {
    seeker: Seeker,
  },
  props: [
    "options",
    "theme",
    "playerSize",
    "playerControlsPosition",
    "showColorPickerTool",
  ],
  data() {
    return {
      activeSpeedIndex: 2,
      speeds: [0.5, 0.75, 1, 1.5, 2, 2.5],
      backgroundColor: "#FFFFFF",
      picker: null,
      colorPickerStatus: false,
      colorPickerColors: [
        {
          border: "#DAE1E7",
          hex: "#FFFFFF",
        },
        {
          border: "#22292F",
          hex: "#22292F",
        },
        {
          border: "#E13636",
          hex: "#E13636",
        },
        {
          border: "#40C075",
          hex: "#40C075",
        },
        {
          border: "#3A92DA",
          hex: "#3A92DA",
        },
      ],
    };
  },
  created() {
    window.addEventListener(
      "keydown",
      function (e) {
        this.handleKeyboardShortcuts(e);
      }.bind(this)
    );
  },
  destroyed() {
    window.removeEventListener(
      "keydown",
      function (e) {
        this.handleKeyboardShortcuts(e);
      }.bind(this)
    );
  },
  mounted() {
    for (let i in this.speeds) {
      if (+this.options.speed === this.speeds[i]) {
        this.activeSpeedIndex = i;
      }
    }
    this.backgroundColor = this.options.backgroundColor;
  },
  methods: {
    togglePlayPause() {
      this.$emit("togglePlayPause");
    },
    toggleLoop() {
      this.$emit("toggleLoop");
    },
    setPlayerSpeed() {
      this.activeSpeedIndex =
        +this.activeSpeedIndex === 5 ? 0 : +this.activeSpeedIndex + 1;
      this.$emit("setPlayerSpeed", this.speeds[this.activeSpeedIndex]);
    },
    stop() {
      this.$emit("stop");
    },
    setBackgroundColor(color) {
      this.backgroundColor = color.hex;
      this.$emit("setBackgroundColor", color.hex);
    },
    updateBackgroundColor() {
      this.setBackgroundColor({ hex: this.backgroundColor });
    },
    showColorPicker() {
      this.colorPickerStatus = true;
    },
    hideColorPicker() {
      this.colorPickerStatus = false;
    },
    handleKeyboardShortcuts(e) {
      if (e.target.nodeName !== "INPUT") {
        switch (e.key) {
          case " ":
            this.togglePlayPause();
            break;
        }
      }
    },
  },
};
</script>

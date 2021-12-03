## LottiePlayer Vue Component

This is a Vue component for the Lottie Web Player. This library is a vue wrapper around the LottieFiles Lottie Web Player

![screencast](https://github.com/LottieFiles/lottie-vue/blob/master/demo.gif)

#### In Javascript or TypeScript:

1. Install package using npm or yarn.

```shell
npm install --save @lottiefiles/vue-lottie-player
```

2. Import package in your code.

```javascript
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
```

3. Add the player as a plugin to Vue
``` javascript
Vue.use(LottieVuePlayer);
```

#### With Nuxt:

1. Install package using npm or yarn.

```shell
npm install --save @lottiefiles/vue-lottie-player
```

2. Create a folder called 'plugins' at the root of your project

3. Create a file named 'lottie-vue-player.client.js' inside the 'plugins' directory

4. Inside this file put :

```javascript

import Vue from 'vue';

import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

Vue.use(LottieVuePlayer);

```

5. Add to nuxt.config.js:

```javascript

 plugins: [
    "~/plugins/lottie-vue-player.client.js"
  ]

```

---

## Example/Development

1. Clone repo

2. run yarn install

## Usage

### Player component

Add the element `lottie-vue-player` and set the `src` prop to a URL pointing to a valid Lottie JSON. Full example of an App.vue file is shown below.

```vue
<template>
    <div id="app">
        <lottie-vue-player :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
                           :theme="options.theme"
                           :player-size="options.playerSize"
                           :player-controls="true"
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

```

## Props

| Prop                 | Description                                                            | Type               | Default     |
| -------------------- | ---------------------------------------------------------------------- | ------------------ | ----------- |
| `autoplay`           | Autoplay animation on load.                                            | `boolean`          | `false`     |
| `backgroundColor`    | Background color.                                                      | `string`           | `undefined` |
| `playerControls`     | Show controls.                                                         | `boolean`          | `false`     |
| `showColorPicker`    | Show color picker                                                      | `boolean`          | `false`     |
| `playerSize`         | Player set size  (hide, minimal, standard)                             | `string`           | `standard`  |
| `loop`               | Whether to loop animation.                                             | `boolean`          | `false`     |
| `speed`              | Animation speed.                                                       | `number`           | `1`         |
| `style`              | The style for the container.                                           | `object`           | `undefined` |
| `src` _(required)_   | Bodymovin JSON data or URL to JSON.                                    | `object` | `string`| `undefined` |

## Methods

### `togglePlayPause() => void`

Toggle animation play pause.

#### Returns

Type: `void`

### `toggleFullscreen() => void`

Toggle full screen player.

#### Returns

Type: `void`
### `toggleLoop() => void`

Toggle animation loop.

#### Returns

Type: `void`

### `setPlayerSpeed(speed?: number) => void`

Sets animation play speed.

#### Parameters

| Name    | Type     | Description     |
| ------- | -------- | --------------- |
| `value` | `number` | Playback speed. |

#### Returns

Type: `void`

### `stop() => void`

Stops animation play.

#### Returns

Type: `void`

### `setBackgroundColor(color: string) => void`

set background color.

#### Returns

Type: `void`
## License

MIT License © LottieFiles.com

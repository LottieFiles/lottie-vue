## LottiePlayer Vue Component

This is a Vue component for the Lottie Web Player

## Documentation

- [View documentation](https://github.com/LottieFiles/lottie-vue)

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
## Events

The following events are exposed and can be listened to via `addEventListener` calls.

| Name       | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| `load`     | Animation data is loaded.                                                 |
| `error`    | An animation source cannot be parsed, fails to load or has format errors. |
| `ready`    | Animation data is loaded and player is ready.                             |
| `play`     | Animation starts playing.                                                 |
| `pause`    | Animation is paused.                                                      |
| `stop`     | Animation is stopped.                                                     |
| `freeze`   | Animation is paused due to player being invisible.                        |
| `loop`     | An animation loop is completed.                                           |
| `complete` | Animation is complete (all loops completed).                              |
| `frame`    | A new frame is entered.                                                   |

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

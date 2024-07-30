import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  theme: {
    colors: {
      primary: '#F99'
    }
  },
  presets: [
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    })
  ],
})

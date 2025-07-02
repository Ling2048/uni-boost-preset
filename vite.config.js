import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { createUniBoostPlugins } from 'uni-boost-module';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    createUniBoostPlugins({ src: 'src', modulePath: 'src/modules' })
  ],
})

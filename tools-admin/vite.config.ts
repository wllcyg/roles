import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'
export default defineConfig(({command, mode, ssrBuild}) => {
  eslintPlugin({include: ['src/**/*.ts', 'src/**/*.vue']}) // 临时去调后续再加上
  const baseConfig = {
    plugins: [vue(), AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
  if (command === 'serve') {
    return {
      // dev 独有配置
      ...baseConfig
    }
  } else {
    return {
      // build 独有配置
      ...baseConfig,
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        cssMinify: true,
        sourcemap: 'hidden'
      }
    }
  }
})

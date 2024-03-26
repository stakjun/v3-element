import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    /** 在命令行提示 eslint 问题 */
    eslint(),
    /** 这里必须引入vite-plugin-dts插件，否则不会生成d.ts文件 */
    dts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 打包配置
  build: {
    lib: {
      // 指定组件编译入口文件
      entry: resolve(__dirname, 'src/index.ts'),
      // 组件库名称
      name: 'Vue3Element',
      // 文件名称
      fileName: 'vue3-element'
    },
    rollupOptions: {
      /** 确保外部化处理那些你不想打包进库的依赖 */ 
      external: ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    }
  }
})

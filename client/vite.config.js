import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

const dirname = resolve()
console.log('dirname', dirname)
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    root: './client',
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      proxy: {},
    },
    resolve: {
      alias: {
        '@': resolve(dirname, './client/src'),
        views: resolve(dirname, './client/src/views'),
        api: resolve(dirname, './client/src/api'),
        hooks: resolve(dirname, './client/src/hooks'),
        store: resolve(dirname, './client/src/store'),
      },
      extensions: ['.js', '.vue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import './src/style/variables.scss';`,
        },
      },
    },
  }
})

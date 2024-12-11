import { resolve } from 'path'
import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';

export default defineConfig({
  base: './',
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      })
  ],
  build: {
    modulePreload: false,
    // cssCodeSplit: true,
    minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        not_found: resolve(__dirname, 'pages/not_found/index.html'),
        expert: resolve(__dirname, 'pages/expert/index.html'),
        workgroup: resolve(__dirname, 'pages/workgroup/index.html'),
        events: resolve(__dirname, 'pages/events/index.html'),
        events_archive: resolve(__dirname, 'pages/events_archive/index.html'),
        text_page: resolve(__dirname, 'pages/text_page/index.html'),
        reestr: resolve(__dirname, 'pages/reestr/index.html'),
        governing: resolve(__dirname, 'pages/governing/index.html'),
        history: resolve(__dirname, 'pages/history/index.html'),
        pdc: resolve(__dirname, 'pages/pdc/index.html'),
        contacts: resolve(__dirname, 'pages/contacts/index.html'),
        indicators: resolve(__dirname, 'pages/indicators/index.html'),
        mailings: resolve(__dirname, 'pages/mailings/index.html'),
        mail_edit: resolve(__dirname, 'pages/mail_edit/index.html'),
        mail_user: resolve(__dirname, 'pages/mail_user/index.html'),
      },
      treeshake: true,
      output: {
        entryFileNames: `assets/[name]/[name].js`,
        chunkFileNames: `assets/[name]/[name].js`,
        assetFileNames: `assets/[name]/[name].[ext]`
      }
    },
  },
})
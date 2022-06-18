const { resolve } = require('path')
const { defineConfig } = require('vite')

const pages = ['01', '02', '03']
const pagesInput = {}
pages.forEach((p) => {
  pagesInput[p] = resolve(__dirname, `pages/${p}/index.html`)
})

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...pagesInput,
      }
    }
  }
})

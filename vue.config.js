const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//Para não dar o erro do eslint
  publicPath:'/pomoCore/'
})

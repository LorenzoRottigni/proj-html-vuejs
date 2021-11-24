module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './src/'
    }
  },
  devServer: {
    proxy: 'http://localhost:4000'
  }
}

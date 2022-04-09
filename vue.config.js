module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    // proxy: "https://hot-rollers.herokuapp.com/"
    proxy: "http://localhost:3000"

  }
}

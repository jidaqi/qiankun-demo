module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8081',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        }
      },
      '/hotpot': {
        target: 'localhost:3001',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/hotpot': '',
        }
      }
    },
  }
}
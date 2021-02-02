module.exports = {
  configureWebpack: {
    // title: 'superMall',
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        content: 'components/content',
        common: 'components/common',
        network: '@/network',
        views: '@/views'
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'superMall'
        return args
      })
  },


}

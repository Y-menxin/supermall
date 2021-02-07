module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // 视窗的宽度 对应的是我们设计稿的宽度
      viewportWidth: 375,
      // 视窗的高度 对应的是我们设计稿的高度 (可以不配置)
      viewportHeight: 667,
      // 指定 ‘px’ 转换为视窗单位值的小数位数 (很多时候无法整除)
      unitPrecision: 5,
      // 指定需要转换成的视窗单位 建议使用 vw 
      viewportUnit: 'vw',
      // 指定不需要转换的类  
      selectorBlackList: ['ignore', 'tab-bar'],
      // 小于或者等于 '1px' 不转换为视窗单位
      minPixelValue: 1,
      // 允许在媒体查询中转换 'px'
      mediaQuery: false,
      // 指定被转换的 单位
      unitToConvert: 'px',
      // 指定字体转换的 单位
      fontViewportUnit: 'vw',
      // 必须是正则 匹配文件的 
      exclude: [/TabBar/]
    }
  }
}
/* diabled-eslint */
module.exports = {
  // 打包输出文件夹
  outputDir: 'dist',
  // 部署应用包时的基本 URL
  // publicPath:  process.env.NODE_ENV === 'production' ? 'http://47.96.2.170/dist/' : './',
  publicPath: './',
  // server 配置
  devServer: {
      host: '0.0.0.0',
      port: 9000,
      open: false,
      // proxy: {
      //   '/public': {
      //     target: 'https://static.yancey.app',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/public/images': '/'
      //     }
      //   }
      // }
  },
  chainWebpack: config => {
    // alias
    config.resolve.alias
      .set('fabric', 'fabric-pure-browser');

    // 定义全局变量，项目中可通过 process.env 获取到
    config.plugin('define').tap(definitions => {
        Object.assign(definitions[0]['process.env'], {
            build_timestamp: (new Date()).getTime(),
            version: 1.0
        });
        return definitions;
    });
  }
}
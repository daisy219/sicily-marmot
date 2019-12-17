/* diabled-eslint */
module.exports = {
  // 打包输出文件夹
  outputDir: 'dist',
  // server 配置
  devServer: {
      host: '0.0.0.0',
      port: 9000,
      open: false,
      // proxy: {
      //   '/ewebeditor': {
      //     target: 'http://www.ischool365.com:10882',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/ewebeditor': '/ewebeditor'
      //     }
      //   },
      //   '/group': {
      //     target: 'http://www.ischool365.com:10882',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/group': '/group'
      //     }
      //   },
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
            // 9: 201909 版本 (学生端、网络课程)
            // 901: 新版网络课程、课堂报告移动端、省平台资源
            version: 2.1
        });
        return definitions;
    });
  }
}
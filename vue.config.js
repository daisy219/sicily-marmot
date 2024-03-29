const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|html)(\?.*)?$/i; //匹配格式
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
    proxy: {
      '/api': {
        target: 'http://47.96.2.170:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
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


  },

  configureWebpack: config => {
    config.plugins = [
      ...config.plugins,
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        analyzerPort: 8091, // 运行后的端口号 可以修改
        generateStatsFile: true,
        statsOptions: { source: false }
      }),
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp(
          '\\.(' +['js','css'].join('|') +')$'
        ),
        threshold: 10240,// 大于10kb的才被压缩
        minRatio: 0.8//压缩比例
      })

    ]
  }
}
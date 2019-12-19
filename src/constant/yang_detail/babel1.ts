export const DESCRIPTION_TEXT = {
  ONE: `开始有自己配置一个简单架子的想法源头是想用用react，起步就发现用惯了vue脚手架，再用react脚手架很多东西显得不那么方便了，于是就不如直接自己配置一个带react框架的架子。
  这篇文章会从只有babel开始，一点一点扩展到你想用什么都可以自己随心所欲的添加。`,
  TWO: `打包工具版本和babel版本不匹配或者babel自身插件版本不匹配运行项目的时候都会报错。所以更新babel的话是要把babel下所有插件都更新至匹配版本才行。`,
  THREE: `这里安装的都是基于babel7.0以上的
          从搭建开始
          1、新建项目文件夹，运行npm init，目录内会创建package.json文件，输入命令`,
  FORE: `创建src文件夹，在src内创建index.js入口文件，里面写点es6语法，如：`,
  FIVE: `2、根目录下创建.babelrc配置文件`,
  SIX: `presets为语法配置,plugins为插件配置，刚刚配的@babel/env就是把最新的es规则转换成浏览器可接受的版本。用babel转译代码的时候用到的插件一般名字里面带preset的都写在presets里，带plugin的就写在plugins里。例如：`,
  SEVEN: `3、package.json-scripts配置内加入`,
  EIGHT: `最后命令行执行`,
  NIGHT: `会发现根目录下多出一个叫lib的文件夹里面有个js文件，里面的代码已经转译完成了。`,
  TEN: `顺便说一下babel6的时候webpack要匹配3点几的版本，webpack-dev-server要匹配2点几的版本之前试过可搭配版本（webpack 3.8.0/webpack-dev-server 2.9.7）`,
  ELEVEN: `这里说的依旧是babel7,对应的webpack版本应该是webpack4，webpack-dev-server3（webpack 4.35.2 / webpack-dev-server 3.7.2）`,
  TWELVE: `安装好上面这些东西之后，把刚才src里面的index.js移到根目录作为入口js文件，根目录创建index.html作为入口html文件，里面可以随便写点什么，
  再把js文件引进来，然后在根目录创建build文件夹，里面创建一个webpack配置文件-webpack.config.js，下面是webpack.config.js简单配置`,
  THIRTEEN: `然后把package.json-scripts内改为下面的内容`,
  FORETEEN: `至此，简单配置已完毕，终端执行npm run dev即可开启本地服务运行项目，访问地址是http://localhost:1208/，执行npm run build 即可编译打包项目至dist文件夹`,
  FIFTEEN: `附本文所用的babel/webpack组合版本，试过没问题的奥`,
  SIXTEEN: `写到这里其实包含的东西还很少，比如css、css预处理语言、本地图片的引入、支持ts等功能目前还不支持，这些东西会在下一篇文章中介绍。`,
};

export const SMALL_TITLE = {
  ONE: `（一）搭建项目，安装babel（不用打包工具的话，走到这一步就可以了）`,
  TWO: `（二）配合webpack`,
};
// const string = '\\'
export const DESCRIPTION_CODE = {
  ONE: [{
    code: 'npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/polyfill',
    notes: '前面三个东西是必须的，具体啥功能可以百度，@babel/polyfill是兼容ie用的',
  }],
  TWO: [
    {
      code:
`<span class="variable">window</span>.<span class="function">onload</span> = <span class="statement">function</span> () {
    <span class="statement">const</span> <span class="variable">aaa</span> = [1, 2, 3, 4];
      <span class="variable">aaa</span>.<span class="function">forEach</span>((<span class="variable">item, index</span>) <span class="statement">=></span> {
        <span class="object">console</span>.<span class="function">log</span>(<span class="variable">item</span>);
      });
};`,
    },
  ],
  THREE: [
    {
      code:
`{
    <span class="string">"presets"</span>: ["@babel/env"],
    <span class="string">"plugins"</span>: []
}`,
    },
  ],
  FORE: [
    {
      code: `npm install --save-dev @babel/preset-react @babel/plugin-proposal-class-properties`,
    },
  ],
  FIVE: [
    {
      code:
`{
  <span class="string">"presets"</span>: ["@babel/env", "@babel/preset-react"],
  <span class="string">"plugins"</span>: ["@babel/plugin-proposal-class-properties"]
}`,
    },
  ],
  SIX: [
    {
      code: `"build": "babel src -d lib"`,
    },
  ],
  SEVEN: [
    {
      code: `npm run build`,
    },
  ],
  EIGHT: [
    {
      code: `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader`,
    },
  ],
  NIGHT: [
    {
      code:
`<span class="statement">const</span> <span class="variable">path</span> = <span class="function">require</span>(<span class="string">'path'</span>);
<span class="statement">const</span> <span class="variable">HtmlWebpackPlugin</span> = <span class="function">require</span>(<span class="string">'html-webpack-plugin'</span>);

<span class="code_notes">// 负责将html文档虚拟到根目录下</span>
<span class="statement">let</span> <span class="variable">htmlWebpackPlugin</span> = <span class="object">new</span> <span class="function">HtmlWebpackPlugin</span>({
    <span class="code_notes">// 虚拟的html文件名 index.html</span>
    filename: <span class="string">'index.html'</span>,
    <span class="code_notes">// 虚拟html的模板为根目录下的index.html</span>
    template: <span class="variable">path</span>.<span class="function">resolve</span>(__dirname, <span class="string">'../index.html'</span>)
})

<span class="object">module</span>.<span class="object">exports</span> = {
    <span class="code_notes">// 开发模式</span>
    mode: <span class="string">'development'</span>,
    <span class="code_notes">// 配置入口文件</span>
    entry: <span class="string">'./index.js'</span>,
    <span class="code_notes">// 出口文件目录为根目录下dist, 输出的文件名为dist</span>
    output: {
        path: <span class="variable">path</span>.<span class="function">resolve</span>(__dirname, <span class="string">'dist'</span>),
        filename: <span class="string">'dist.js'</span>
    },
    <span class="code_notes">// 配置开发服务器, 并配置自动刷新</span>
    devServer: {
      <span class="code_notes">// 根目录下dist为基本目录</span>
      contentBase: <span class="variable">path</span>.<span class="function">join</span>(__dirname, <span class="string">'dist'</span>),
      <span class="code_notes">// 自动压缩代码</span>
      compress: <span class="value">true</span>,
      <span class="code_notes">// 服务端口为1208</span>
      port: <span class="value">1208</span>,
      <span class="code_notes">// 自动打开浏览器</span>
      open: <span class="value">false</span>
    },
    resolve: {
      <span class="code_notes">// 需要进行编译的文件后缀名</span>
      extensions: [<span class="string">'.js'</span>, <span class="string">'.jsx'</span>, <span class="string">'.ts'</span>, <span class="string">'.tsx'</span>, <span class="string">'.json'</span>],
      alias: {
        <span class="code_notes">// 给src文件夹设置别名</span>
        <span class="string">'@'</span>: <span class="variable">path</span>.<span class="function">join</span>(__dirname, <span class="string">'..'</span>, <span class="string">'src'</span>),
      }
    },
    <span class="code_notes">// 配置loader</span>
    module: {
<span class="code_notes">// 根据文件后缀匹配规则，也就是哪些文件需要用哪个loader解析，这里我们暂时只匹配了babel-loader，后面加入ts或者css预处理语言都要在这里配置</span>
        rules: [
          { <span class="code_notes">// 配置js/jsx语法解析</span>
            test: /<span class="value">\\.</span>(<span class="value">jsx</span>|<span class="value">js</span>)<span class="statement">$</span>/,
            exclude: /node_modules/,
            use: {
              loader: <span class="string">'babel-loader'</span>,
            },
          },
        ]
    },
    <span class="code_notes">// 装载虚拟目录插件</span>
    plugins: [<span class="variable">htmlWebpackPlugin</span>],
}
`,
    },
  ],
  TEN: [
    {
      code:
`"scripts": {
  "dev": <span class="string">"webpack-dev-server --config build/webpack.config.js"</span>,
  "build": <span class="string">"webpack --config build/webpack.config.js"</span>
} <span class="code_notes">// --config后面加的是执行的配置文件位置</span>
`,
    },
  ],
  ELEVEN: [
    {
      code:
`"@babel/cli": <span class="string">"^7.7.5"</span>,
"@babel/core": <span class="string">"^7.7.5"</span>,
"@babel/polyfill": <span class="string">"^7.7.0"</span>,
"@babel/preset-env": <span class="string">"^7.7.6"</span>,
"babel-loader": <span class="string">"^8.0.6"</span>,
"html-webpack-plugin": <span class="string">"^3.2.0"</span>,
"webpack": <span class="string">"^4.41.3"</span>,
"webpack-cli": <span class="string">"^3.3.10"</span>,
"webpack-dev-server": <span class="string">"^3.9.0"</span>
`,
    },
  ],
};


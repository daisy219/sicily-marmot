export const DESCRIPTION_TEXT = {
  ONE: `webpack.config.js配置：`,
  TWO: `webpack-plugins项：`,
  THREE: `配置完成后重启项目，在index.js中写点jquery语法，就可以生效了`,
  FORE: `接着试试让我们的项目支持typescript语法。首先将入口文件后缀改为.ts，webpack.config.js中入口文件名随之作相应修改。重启后你会你发现你的项目并没有什么异常，照常运行，
  但如果在index.ts中写点ts语法，就会报错了。如：`,
  FIVE: `babel和typescript的合作是有不同种方法的，这边介绍两种`,
  SIX: `1、通过webpack配置ts-loader，安装：`,
  SEVEN: `修改webpack规则：`,
  EIGHT: `重启项目，刚刚写的ts语法就不会报错了，代码也可以正常执行。`,
  NIGHT: `2、通过babel配置，安装：`,
  TEN: `安装完成后，修改.babelrc文件，把@babel/preset-typescript加进presets内即可：`,
  ELEVEN: `这两种方法选择其中一种就可以了。`,
};

export const SMALL_TITLE = {
  ONE: `（五）jquery`,
  TWO: `（六）typescript`,
  THREE: `（七）axiso`,
  FORE: `（八）react`,
};

export const DESCRIPTION_CODE = {
  ONE: [
    {
      code: `npm install jquery`,
    },
  ],
  TWO: [
    {
      code: `<span class="statement">const</span> <span class="variable">webpack</span> = <span class="function">require</span>(<span class="string">'webpack'</span>);`,
      notes: `定义在文件最上面的`,
    },
  ],
  THREE: [
    {
      code:
`plugins: [
  <span class="variable">htmlWebpackPlugin</span>,
  <span class="value">new</span> <span class="object">webpack</span>.<span class="function">ProvidePlugin</span>({
    $: <span class="string">'jquery'</span>,
    jQuery: <span class="string">'jquery'</span>
  })
],`,
    },
  ],
  FORE: [
    {
      code:
`<span class="statement">function</span> <span class="function">test</span>(<span class="variable">aa</span>: number) {
  <span class="object">console</span>.<span class="function">log</span>(<span class="variable">aa</span>);
}`,
    },
  ],
  FIVE: [
    {
      code: `npm install typescript ts-loader`,
    },
  ],
  SIX: [
    {
      code:
`{ <span class="code_notes">// 配置ts语法解析(如果需要解析tsx以|分隔，加在ts后面即可)</span>
  test: /<span class="value">\\</span>.(<span class="value">ts</span>)<span class="statement">$</span>/,
  exclude: <span class="value">/node_modules/</span>,
  use: [
    {
      loader: <span class="string">'babel-loader'</span>,
    },
    {
      loader: <span class="string">"ts-loader"</span>,
      options: {
        transpileOnly: <span class="value">true</span>,  <span class="code_notes">// 只进行编译</span>
      }
    },
  ]
},`,
    },
  ],
  SEVEN: [
    {
      code: `npm install typescript @babel/preset-typescript`,
    },
  ],
  EIGHT: [
    {
      code: `"presets": [<span class="string">"@babel/env"</span>, <span class="string">"@babel/preset-typescript"</span>],`,
    },
  ],
};

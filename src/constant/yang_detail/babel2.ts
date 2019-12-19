export const DESCRIPTION_TEXT = {
  ONE: `终端执行`,
  TWO: `src内新建assets文件夹，里面新建index.css文件，针对html随便写点样式，在入口js文件中引入css文件：`,
  THREE: `webpack配置文件module-rules加入一项：`,
  FORE: `此时你的样式应该生效了。接下来是需要样式预处理语言的情况，其实每种预处理语言配置方法都差不多，这边以less为例展示一下完整步骤，
  sass和stylus会附上需要安装的东西，接着相应的修改webpack配置就可以了。`,
  FIVE: `终端执行`,
  SIX: `把刚刚的css文件后缀名改为less文件，入口文件引入路径相应修改，把刚刚webpack配置的修改一下：`,
  SEVEN: `stylus, 对应文件名后缀（.styl）`,
  EIGHT: `sass, 对应文件名后缀（.scss）`,
};
export const SMALL_TITLE = {
  ONE: `（三）样式问题`,
  TWO: `（四）引入typescript`,
};

export const DESCRIPTION_CODE = {
  ONE: [
    {
      code: `npm install style-loader css-loader`,
    },
  ],
  TWO: [
    {
      code: `<span class="statement">import</span> <span class="string">'@/assets/index.css'</span>;`,
    },
  ],
  THREE: [
    {
      code:
`{
  test: /<span class="value">\\</span>.<span class="variable">css</span><span class="statement">$</span>/,
  use: [
      <span class="string">"style-loader"</span>,
      <span class="string">"css-loader"</span>,
  ]
},`,
    },
  ],
  FORE: [
    {
      code: `npm install less less-loader`,
    },
  ],
  FIVE: [
    {
      code:
`{
  test: /<span class="value">\\</span>.<span class="string">less</span><span class="statement">$</span>/,
  use: [
      <span class="string">'style-loader'</span>,
      <span class="string">'css-loader'</span>,
      <span class="string">'less-loader'</span>
  ]
},
`,
    },
  ],
  SIX: [
    {
      code: `npm install stylus stylus-loader`,
    },
  ],
  SEVEN: [
    {
      code: `npm install node-sass sass-loader`,
    },
  ],
};

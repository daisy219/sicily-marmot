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
  NIGHT: `现在如果试试引入本地图片的话应该是不能正常展示的，不论html、css或js，要想在js和css中正常使用图片，
  我们要安装：`,
  TEN: `安装完成后，webpack.config.js中加入规则：`,
  EVELEN: `这样就可以在js和css中引入本地图片了，可以写点代码测试一下`,
  TWELVE: `css`,
  THIRTEEN: `js`,
  FORETEEN: `html中引入图片还需要一个工具`,
  FIFTEEN: `相应webpack规则：`,
  SIXTEEN: `现在试试在html文件里引入本地图片应该可以正常显示了，我试了一下在js和css里，相对路径写成我们配置的别名是没问题的，但是在html里用别名会报错，
  可能是webpack对html编译能力表现不是太好吧，所以在html中引入文件的话，就不要使用别名了。`,
  SEVENTEEN: `到这里，基本的东西都已经配置完毕了，如果你厌倦了依赖成熟框架开发，想锻炼一下原生思维能力，就可以在此基础上开发了，可以试试配合模板引擎，
  模拟路由跳转实现单页面应用效果等等功能。`,
  EIGHTTEEN: `下一篇我们会继续介绍项目中加入jquery、typescript、tslint、axios、react，有需要的话可以继续看下一篇的内容。`,
};
export const SMALL_TITLE = {
  ONE: `（三）样式问题`,
  TWO: `（四）图片问题`,
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
  test: /<span class="value">\\</span>.<span class="value">css</span><span class="statement">$</span>/,
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
  <span class="">test</span>: /<span class="value">\\</span>.<span class="value">less</span><span class="statement">$</span>/,
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
  EIGHT: [
    {
      code: `npm install url-loader@2.2.0 file-loader@4.2.0`,
      notes: `(如果你的node版本是10以上，可以试试直接安装不加版本是否可用，我的node是8.2，下载最新版本的话不生效，所以这边加了版本号)`,
    },
  ],
  NIGHT: [
    {
      code:
`{ <span class="code_notes">// 解析图片如果需要引入本地图片的话此处的配置是必须的，同时要npm install url-loader以及npm install file-loader，有git格式的话，加在后面就可以了。</span>
  test: /<span class="value">\\</span>.(<span class="value">jpg</span>|<span class="value">png</span>)<span class="statement">$</span>/,
  use: {
    loader: <span class="string">'url-loader'</span>
  },
},`,
    },
  ],
  TEN: [
    {
      code: `background: <span class="function">url</span>(<span class="string">'./images/a.jpg'</span>) no-repeat;`,
      notes: `相对路径自己换一下就行`,
    },
  ],
  ELEVEN: [
    {
      code:
`<span class="statement">const</span> <span class="variable">img</span> = <span class="function">require</span>(<span class="string">'./src/assets/images/a.jpg'</span>);
<span class="object">window</span>.<span class="variable">onload</span> = <span class="statement">function</span>() {
  <span class="statement">const</span> <span class="variable">$img</span> = <span class="string">'&#60;img src="'+img+'" />'</span>
  <span class="object">document</span>.<span class="function">getElementById</span>(<span class="string">'img'</span>).innerHTML = <span class="variable">$img</span>;
}
`,
    },
  ],
  TWELVE: [
    {
      code: `npm install html-withimg-loader`,
    },
  ],
  THIRTEEN: [
    {
      code:
`{
  test: /<span class="value">\\</span>.<span class="value">html</span><span class="statement">$</span>/,
  use: {
    loader: <span class="string">'html-withimg-loader'</span>,
  }
},`,
    },
  ],
};

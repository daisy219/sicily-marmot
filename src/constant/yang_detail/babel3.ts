export const DESCRIPTION_TEXT = {
  ONE: `webpack.config.js配置：`,
  TWO: `webpack-plugins项：`,
  THREE: `配置完成后重启项目，在index.js中写点jquery语法，就可以生效了`,
  FORE: `接着试试让我们的项目支持typescript语法。首先将入口文件后缀改为.ts，webpack.config.js中入口文件名随之作相应修改。重启后你会你发现你的项目并没有什么异常，照常运行，
  但如果在index.ts中写点ts语法，就会报错了。如：`,
  FORE1: `现在让我们解决它，加入ts，首先根目录新建tsconfig.json，可以到typescript官网查看配置选项<a target="_blank" class="link" href="https://www.tslang.cn/docs/handbook/tsconfig-json.html">(点我传送你去那)</a>，下面是一个tsconfig.json的例子：`,
  FIVE: `babel和typescript的合作是有不同种方法的，这边介绍两种`,
  SIX: `1、通过webpack配置ts-loader，安装：`,
  SEVEN: `修改webpack规则：`,
  EIGHT: `重启项目，刚刚写的ts语法就不会报错了，代码也可以正常执行。`,
  NINE: `2、通过babel配置，安装：`,
  TEN: `安装完成后，修改.babelrc文件，把@babel/preset-typescript加进presets内即可：`,
  ELEVEN: `这两种方法选择其中一种就可以了。`,
  TWELVE: `顺便加个tslint`,
  THIRTEEN: `根目录新建tslint.json，同样可以去官网查看配置项<a target="_blank" class="link" href="https://palantir.github.io/tslint/rules/">(点我传送你去那)</a>，下面是一个tslint.json的例子。`,
  FORETEEN: `src目录下新建services文件夹，里面新建一个index.ts文件（这里的例子是ts的，如果不需要ts，把文件改为js后缀，里面涉及到类型的代码去掉就可以了。），
  下面是index.ts简单实现的例子。`,
  FIFTEEN: `模拟调用的话，我们不能用真实的接口地址，这里利用本地json来模拟接口地址，访问本地json的话，会涉及到一个新的问题，
  就是如何配置webpack处理静态文件，所以在模拟之前我们先配置一下静态文件输出。首先需要一个依赖：`,
  SIXTEEN: `根目录新建public文件夹，里面新建一个example.json文件，写点数据如：`,
  SEVENTEEN: `webpack.config.js配置：`,
  EIGHTTEEN: `重启项目，静态资源即可打包至目标文件夹。然后我们来模拟调用一下刚刚的sevices，src/services目录下新建example.ts文件，写入如下代码：`,
  NITTEEN: `入口文件index.ts中调用一下这个函数，应该是可以访问数据了，调用post是相同原理。`,
  TWENTY: `到这里，我们就完成了一些常用的基础配置，后面需要webpack完成一些其他功能，上网搜一下需要装的依赖和webpack配置，套路应该都是差不多的。`,
};

export const SMALL_TITLE = {
  ONE: `（五）jquery`,
  TWO: `（六）typescript`,
  THREE: `（七）axiso`,
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
  FORE1: [
    {
      code:
`{
  "compilerOptions": {
    "target": <span class="string">"es5"</span>,
    "module": <span class="string">"esnext"</span>,
    "jsx": <span class="string">"react"</span>,
    "importHelpers": <span class="value">true</span>,
    "moduleResolution": <span class="string">"node"</span>,
    "experimentalDecorators": <span class="value">true</span>,
    "emitDecoratorMetadata": <span class="value">true</span>,
    "allowSyntheticDefaultImports": <span class="value">true</span>,
    "strictPropertyInitialization": <span class="value">false</span>,
    "sourceMap": <span class="value">true</span>,
    "baseUrl": <span class="string">"."</span>,
    "lib": [<span class="stirng">"es6"</span>, <span class="string">"dom"</span>],
    "allowJs": <span class="value">true</span>,
    "rootDir": <span class="string">"src"</span>,
    "forceConsistentCasingInFileNames": <span class="value">true</span>,
    "noImplicitReturns": <span class="value">true</span>,
    "noImplicitThis": <span class="value">true</span>,
    "noImplicitAny": <span class="value">true</span>,
    "strictNullChecks": <span class="value">true</span>,
    "suppressImplicitAnyIndexErrors": <span class="value">true</span>,
    "paths": {
      "@/*": [
        <span class="string">"src/*"</span>
      ]
    }
  },
  "include": [
    <span class="string">"src/**/*.ts"</span>,
  ],
  "exclude": [
    <span class="string">"node_modules"</span>,
    <span class="string">"config"</span>
  ]
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
  NINE: [
    {
      code: `npm install tslint`,
    },
  ],
  TEN: [
    {
      code:
`{
  "defaultSeverity": <span class="string">"warning"</span>,
  "extends": [
    <span class="string">"tslint:recommended"</span>
  ],
  "linterOptions": {
    "exclude": [
      <span class="string">"node_modules/**"</span>
    ]
  },
  "rules": {
    "no-bitwise": [<span class="value">false</span>],
    "no-angle-bracket-type-assertion": [<span class="value">false</span>],
    "member-ordering": [<span class="value">false</span>],
    "variable-name": [<span class="value">false</span>],
    "no-console": [<span class="value">false</span>],
    "no-empty": [<span class="value">false</span>],
    "max-line-length": [<span class="value">false</span>],
    "quotemark": [<span class="value">true</span>, <span class="string">"single"</span>],
    "indent": [<span class="value">false</span>, <span class="string">"tabs"</span>, <span class="value">4</span>],
    "interface-name": <span class="value">false</span>,
    "ordered-imports": <span class="value">false</span>,
    "object-literal-sort-keys": <span class="value">false</span>,
    "no-consecutive-blank-lines": <span class="value">false</span>,
    "prefer-for-of": <span class="value">false</span>,
    "max-classes-per-file": <span class="value">false</span>
  }
}`,
    },
  ],
  ELEVEN: [
    {
      code: `npm install axios qs`,
    },
  ],
  TWELVE: [
    {
      code:
`<span class="statement">import</span> <span class="variable">axios</span> <span class="statement">from</span> <span class="string">'axios'</span>;
<span class="statement">import</span> <span class="variable">qs</span> <span class="statement">from</span> <span class="string">'qs'</span>;
<span class="statement">interface</span> <span class="object">PostConfigType</span> {
  <span class="variable">api</span>: string;
  <span class="variable">data?</span>: any;
  <span class="variable">json?</span>: boolean;
  <span class="variable">form_data?</span>: boolean;
}
<span class="statement">interface</span> <span class="object">GetConfigType</span> {
  <span class="variable">api</span>: string;
  <span class="variable">params?</span>: any;
}
<span class="statement">export</span> <span class="statement">function</span> <span class="function">http_post</span>(<span class="variable">config</span>: PostConfigType): Promise&#60;any&#62; {
  <span class="statement">const</span> <span class="variable">_data</span>: any = <span class="variable">config.data</span>;
  <span class="statement">if</span> (<span class="variable">config.form_data</span>) { <span class="code_notes">// 这一步是加了post方法传参使用form data传参方式</span>
    <span class="statement">return</span> <span class="value">new</span> <span class="object">Promise</span>((<span class="variable">resolve</span>, <span class="variable">rerject</span>) => {
      <span class="variable">axios</span>.<span class="function">post</span>(<span class="variable">config.api</span>,
        (<span class="variable">qs</span> as any).<span class="string">stringify</span>(<span class="variable">_data</span>, { headers: { <span class="string">'Content-Type'</span>: <span class="string">'application/x-www-form-urlencoded'</span> } })).<span class="function">then</span>((<span class="variable">res</span>) => {
          <span class="function">resolve</span>(<span class="variable">res</span>);
        });
    });
  } <span class="statement">else</span> {
    <span class="statement">return</span> <span class="value">new</span> <span class="object">Promise</span>((<span class="variable">resolve</span>, <span class="variable">rerject</span>) => {
      <span class="variable">axios</span>.<span class="function">post</span>(<span class="variable">config.api</span>, <span class="variable">_data</span>).<span class="function">then</span>((<span class="variable">res</span>) => {
        <span class="function">resolve</span>(<span class="variable">res</span>);
      });
    });
  }
}


<span class="statement">export</span> <span class="statement">function</span> <span class="function">http_get</span>(<span class="variable">config</span>: GetConfigType): Promise&#60;any&#62 {
  <span class="statement">let</span> <span class="variable">_data</span>: any = <span class="value">null</span>;
  if (<span class="variable">config.params</span>) {
    <span class="variable">_data</span> = <span class="variable">config.params</span>;
  }
  <span class="statement">return</span> <span class="value">new</span> <span class="object">Promise</span>((<span class="variable">resolve</span>, <span class="variable">reject</span>) => {
    <span class="variable">axios</span>.<span class="function">get</span>(<span class="variable">config.api</span>, <span class="variable">_data</span>).<span class="function">then</span>((<span class="variable">res</span>) => {
      <span class="function">resolve</span>(<span class="variable">res</span>);
    });
  });
}`,
    },
  ],
  THIRTEEN: [
    {
      code: `npm install --save copy-webpack-plugin`,
    },
  ],
  FORETEEN: [
    {
      code:
`{
  "list": [
    {"name": <span class="string">"小明"</span>, "age": <span class="string">"11"</span> },
    {"name": <span class="string">"小红"</span>, "age": <span class="string">"11"</span> },
    {"name": <span class="string">"小华"</span>, "age": <span class="string">"11"</span> }
  ]
}`,
    },
  ],
  FIFTEEN: [
    {
      code:
`<span class="statement">const</span> <span class="variable">copyWebpackPlugin</span> = <span class="function">require</span>(<span class="string">'copy-webpack-plugin'</span>);
plugins: [
  <span class="value">new</span> <span class="object">copyWebpackPlugin</span>([{
    from: <span class="object">path</span>.<span class="function">join</span>(__dirname, <span class="string">'..'</span>, <span class="string">'public'</span>), <span class="code_notes">// 这里写的是要打包的静态资源的地址</span>
    to: <span class="string">'./public'</span> <span class="code_notes">// 这里写的是输出的目录</span>
  }])
]
`,
    },
  ],
  SIXTEEN: [
    {
      code:
`<span class="statement">import</span> { <span class="variable">http_get</span> } <span class="statement">from</span> <span class="string">'./index'</span>;

<span class="statement">export default class</span> <span class="object">Service</span> {
  <span class="statement">public static async</span> <span class="function">get_list</span>() {
    <span class="code_notes">// 这里api我们写的是静态json文件，实际业务中写后端给的接口地址即可。</span>
    <span class="statement">const</span> <span class="variable">result</span> = <span class="statement">await</span> <span class="function">http_get</span>({api: <span class="string">'./public/example.json'</span>});
    <span class="statement">return</span> <span class="variable">result.data</span>;
  }
}
`,
    },
  ],
  SEVENTEEN: [
    {
      code:
`<span class="statement">import</span> <span class="variable">Services</span> <span class="statement">from</span> <span class="string">'@/services/example'</span>;
<span class="statement">function</span> <span class="function">test</span>() {
  <span class="object">Services</span>.<span class="function">get_list</span>();
}
<span class="function">test</span>();
`,
    },
  ],
};

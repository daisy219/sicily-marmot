export const DESCRIPTION_TEXT = {
  ONE: `webpack.config.js配置：`,
  TWO: `webpack-plugins项：`,
  THREE: `配置完成后重启项目，在index.js中写点jquery语法，就可以生效了`,
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
};

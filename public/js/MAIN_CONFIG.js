;(function (name, definition, context) {
  if ((typeof module !== 'undefined') && module.exports)
    module.exports = definition() // node 环境
  else if ((typeof context['define'] === 'function') && (context['define']['amd'] || context['define']['cmd']))
    define(definition)            // amd cmd 规范环境，如 seajs requirejs
  else
    context[name] = definition()  // 浏览器环境
})('MAIN_CONFIG', function () {
  return {
    BASE_API_ROOT: 'http://47.96.2.170:3000',
    // BASE_API_ROOT: 'http://127.0.0.1:3000',
    __DEV__: false, // 是否为开发环境
  }
}, this);

1. `require('xx').default` 
2. `import { button } from 'xx-ui'` 这样会引入所有组件内容，需要添加额外的 babel 配置，比如 `babel-plugin-component`
3. ES6的import可以引入commonjs的模块，require也可以引入export的模块
4. 我们在浏览一些 npm 下载下来的 UI 组件模块时（比如说 element-ui 的 lib 文件下），看到的都是 webpack 编译好的 js 文件，可以使用 import 或 require 再去引用。但是我们平时编译好的 js 是无法再被其他模块 import 的，这是为什么？
5. babel在模块化场景中充当什么角色，以及webpack，哪个启到关键作用
6. tree-shaking 需要是es6的情况下才可以使用，这是为什么？

webpack本身维护一套模块系统，这个系统兼容所有前端的模块规范，包括amd，commonjs，es6. 模块化的实现在最后编译的文件内。

https://juejin.im/post/5a2e5f0851882575d42f5609


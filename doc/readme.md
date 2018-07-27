#### 此文件来记录分析源码过程，以及知识点

#### 目录
1. 项目结构分析
2. 入口文件

#### 知识点
1. logger中间件 `var logger = require('./common/logger');`
2. response-time 性能分析 简单的方式是记录每个http请求的处理时间，直接在http response header中返回。
3. passport： node集成权限认证中间件, 登录的用户信息存在服务器的session中，然后访问时从session中获取用户信息，如果没有获取到用户信息，则认为该请求非法。
4. auth中间件：`../middlewares/auth.js`, 
  验证用户是否登录： authUser
5. eventproxy：解决异步回调的问题，可以使嵌套的方式变为并行的方式
```javascript
// 基本使用
var ep = new EventProxy()
// 在所有事件都被触发之后，再触发回调
ep.all('tpl', 'data', function(tpl, data) {

})
fs.readFile('template.tpl', 'utf-8', function(err, function) {
  ep.emit('tpl', content)
})
db.get('some sql', function(err, result) {
  ep.emit('data', result)
})

// 重复异步协作
var ep = new EventProxy()
ep.after('got_file', )
```
  
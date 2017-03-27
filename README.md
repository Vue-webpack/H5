# Easyplay H5

金蛛移动H5端

## Environment


* node
* nginx


## Technologys

* webpack
* vue
* lodash
* es6
* vuex
* sass
* vue-resource


#### 安装

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```

启动服务(http://localhost:8000)

```
cnpm run dev
```

发布代码
```
cnpm run build
```

## Config

* 生产配置 build.js
* 开发配置 dev-server.js
* webpack打包编译配置 webpack.config.js
* 路由配置 route-config.js
* 入口配置 main.js, app-config.js


###目录结构
<pre>
.
├── build                  // 构建服务和webpack配置
├── dist                   // 项目输出文件
├── node_modules           // 各种依赖包
├── src                    // 生产目录
│   ├── assets             // css js 和图片资源
│   │   ├── images         // 图片资源
│   │   ├── scss           // scss资源
│   ├── components         // 各种组件
│   │   ├── direction      // 通用指令
│   │   ├── mixins         // 混合组件
│   │   │  ├── wxConfig    // 微信配置
│   │   ├── globalmodal    // 蒙版
│   │   ├── header         // 头部
│   │   ├── nav            // 顶部下拉菜单
│   │   ├── navset         // 顶部下拉菜单
│   │   ├── tab            // 切换tab
│   │   ├── tabset         // 切换tab
│   │   ├── toast          // 弹出框
│   ├── config             // 入口初始化配置
│   ├── filters            // 各种过滤器
│   ├── route              // 路由配置
│   ├── utils              // 工具类
│   ├── views              // 各种页面
│   ├── vuex               // vuex状态管理器
│   └── index.html         //页面入口
│   └── main.js            // Webpack 预编译入口
├── package.json           // 项目配置文件
</pre>

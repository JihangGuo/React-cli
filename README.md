# React-cli    (npm i react-simple-cli)
+ React项目自动部署脚手架


+ 特点：
    1. 配置简单，几行命令即可搭建完毕
    2. webpack配置明了，可大范围自我定制
    3. 项目目录结构清晰，有利于快速开始react开发


+ 使用说明：
    + npm全局安装此项目:
    >    1. `npm i react-simple-cli -g`
    >    2. `react-cli <project-name>`    __默认生成项目名为project__

    + github克隆此项目（可自定义生成文件目录）
    >    1. git clone下此项目
    >    2. 进入项目根目录，运行`node react-cli.js`进行搭建项目脚手架即可
    >    3. 进入生成的React项目根目录，执行
    >        + `npm run init `   初始化脚手架
    >        + `npm run start `  启动开发服务器（支持热加载）
    >        + `npm run build `  进行源码打包（默认为watch模式）
    >        + `npm run server`  启动数据模拟服务(建议开两个终端, 一个用于监视开发服务, 一个用于监视数据模拟服务)


+ 默认绑定开发组件:
    + [react-router](http://reacttraining.cn/web/guides/quick-start)    // React官方路由库 >v4.0
    + [Mobx](https://cn.mobx.js.org/)    // 状态管理库
    + [axios](https://www.kancloud.cn/yunye/axios/234845)    // 基于 promise 的 HTTP 库
    + [json-server](https://github.com/typicode/json-server)    // 后端数据模拟服务器, 配合mockjs使用
    + [mockjs](http://mockjs.com/examples.html)    // 数据模拟库


+ 目录结构（脚本配置完毕后）：
> + node_mudules          // npm包管理目录
> + script                // npm相关脚本文件
> + script/init           // 脚手架初始化
> + script/build          // 打包生产环境
> + script/start          // 使用开发环境
> + config                // webpack配置相关目录
> + config/webpack.config.dev.js      // webpack开发配置文件
> + config/webpack.config.pro.js      // webpack生产配置文件
> + static                // 项目静态文件目录
> + static/template.html  // html挂载模版
> + mock                  // 后端数据模拟文件夹
> + mock/db.js            // 模拟数据存放文件
> + mock/routes.json      // 模拟路由配置文件
> + package.json          // npm相关配文件置
> + src                   // 开发代码目录
> + src/components        // 公用组件开发目录
> + src/container         // 模板组件开发目录
> + src/app.jsx           // 组件入口文件
> + src/index.js          // 项目入口文件
> + README.md             // 文档说明啦

> + build                 // __打包后新增__目录，用于服务器环境运行
> + index.html            // 总入口文件
> + js             // 打包后js文件夹
> + static          // 打包后其余静态文件夹

+ 其它说明:
    1. 模拟数据功能的使用:
        + 开启数据模拟服务 `npm run server`
        + 前端请求路径为 '/api/xxx'
        + 在mock/db.js 添加相应路径的模拟数据

+ 特别说明:
    1. 为了使脚手架更加稳定, 易用, 对webpack及其相关的工具进行了版本固定
    2. 部分绑定的开发组件已进行了默认配置, 直接可用. 如需进行自定义根据目录结构找到相关文件更改即可

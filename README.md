# React-cli
+ React项目自动部署脚手架
+ 特点：
    1. 配置简单，几行命令即可搭建完毕
    2. webpack配置明了，可大范围自我定制
    3. 项目目录结构清晰，有利于快速开始react开发
+ 目录结构（脚本配置完毕后）：
> node_mudules          //npm包管理目录
> script                //npm相关脚本文件
> script/build          //打包生产环境
> script/start          //使用生产环境
> config                //webpack配置相关目录
> config/webpack.config.dev.js      //webpack开发配置文件
> config/webpack.config.pro.js      //webpack生产配置文件
> static                //项目静态文件目录
> package.json          //npm相关配文件置
> src                   //开发代码目录
> src/components        //公用组件开发目录
> src/container         //模板组件开发目录
> app.jsx               //组件入口文件
> index.jsx             //项目入口文件
> index.html            //项目挂载模版
> README.md             //文档说明啦

> build                 //__打包后新增__目录，用于服务器环境运行
> index.html            //总入口文件
> static                //总资源目录
> static/css            //打包后css文件
> static/js             //打包后js文件
> static/other          //打包后其余静态文件
# React-cli (npm i react-simple-cli)
+ React项目自动部署脚手架


+ 特点：
    1. 配置简单，几行命令即可搭建完毕
    2. webpack配置明了，可大范围自我定制
    3. 项目目录结构清晰，有利于快速开始react开发


+ 使用说明（现阶段默认文件夹名称为app）：
    + npm全局安装此项目(不能自定义脚手架生成文件目录)
    >    1. `npm i react-simple-cli -g`
    >    2. `react-cli`

    + github克隆此项目（可自定义生成文件目录）
    >    1. git clone下此项目
    >    2. 进入项目根目录，运行`node react-cli.js`进行搭建项目脚手架即可
    >    3. 进入生成的React项目根目录，执行
    >        + `npm run init `   初始化脚手架
    >        + `npm run start `  启动开发服务器（支持热加载）
    >        + `npm run build `  进行源码打包（默认为watch模式）

+ 目录结构（脚本配置完毕后）：
> + node_mudules          //npm包管理目录
> + script                //npm相关脚本文件
> + script/init           //脚手架初始化
> + script/build          //打包生产环境
> + script/start          //使用开发环境
> + config                //webpack配置相关目录
> + config/webpack.config.dev.js      //webpack开发配置文件
> + config/webpack.config.pro.js      //webpack生产配置文件
> + static                //项目静态文件目录
> + static/template.html  //html挂载模版
> + package.json          //npm相关配文件置
> + src                   //开发代码目录
> + src/components        //公用组件开发目录
> + src/container         //模板组件开发目录
> + src/app.jsx           //组件入口文件
> + src/index.js          //项目入口文件
> + README.md             //文档说明啦

> + build                 //__打包后新增__目录，用于服务器环境运行
> + index.html            //总入口文件
> + js             //打包后js文件夹
> + static          //打包后其余静态文件夹


+ 后期改进：
1. 对jsx印用添加省略后缀功能
2. 增加简易小项目脚手架选择功能

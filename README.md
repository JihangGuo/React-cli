# React-cli
+ React项目自动部署脚手架


+ 特点：
    1. 配置简单，几行命令即可搭建完毕
    2. webpack配置明了，可大范围自我定制
    3. 项目目录结构清晰，有利于快速开始react开发


+ 使用说明：
    1. clone下此项目
    2. 进入项目根目录，运行node react-cli.js进行搭建项目脚手架即可
    3. 进入生成的React项目根目录，执行
        + `npm run init `   初始化脚手架
        + `npm run start `  启动开发服务器
        + `npm run build `  进行打包


+ 目录结构（脚本配置完毕后）：
> + node_mudules          //npm包管理目录
> + script                //npm相关脚本文件
> + script/build          //打包生产环境(尚未启用，后期改进)
> + script/start          //使用生产环境(尚未启用，后期改进)
> + config                //webpack配置相关目录
> + config/webpack.config.dev.js      //webpack开发配置文件
> + config/webpack.config.pro.js      //webpack生产配置文件
> + static                //项目静态文件目录
> + static/template       //打包项目挂载模版
> + package.json          //npm相关配文件置
> + src                   //开发代码目录
> + src/components        //公用组件开发目录
> + src/container         //模板组件开发目录
> + app.jsx               //组件入口文件
> + index.js              //项目入口文件
> + index.html            //开发项目挂载模版
> + README.md             //文档说明啦

> + build                 //__打包后新增__目录，用于服务器环境运行
> + index.html            //总入口文件
> + css            //打包后css文件夹
> + js             //打包后js文件夹
> + pic          //打包后其余静态文件夹


+ 后期改进：
1. 对项目路径进行配置改进，由一个总路径文件对所有配置进行控制修改
2. 对scripts文件夹进行使用，实现由脚本文件进行项目控制
3. 对jsx印用添加省略后缀功能
4. 深入了解node的文件控制机制
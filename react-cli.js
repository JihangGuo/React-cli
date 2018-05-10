#!/usr/bin/env node

/**
 * @file: 文件 
 * @author: JihangGuo 
 * @last Modified time: 2018-02-02 14:15:11 
 * @email: guojihang@baidu.com 
 */

// 引入node自带的相关模块
const fs = require('fs')
const path = require('path')
const project_name = process.argv[2] || "project";
const dev_path = process.cwd() + '/' + project_name;
// 文件目录配置
const dir_arr = [
    'scripts/',
    'config/',
    'static/',
    'mock/',
    'src/',
    'src/components/',
    'src/containers/'
]
//文件配置
const file_arr = [
    '.babelrc',
    'src/app.jsx',
    'src/index.js',
    'package.json',
    'static/template.html',
    'mock/db.js',
    'mock/routes.json',
    'scripts/init.js',
    'scripts/build.js',
    'scripts/start.js',
    'config/webpack.config.dev.js',
    'config/webpack.config.prod.js',
    'src/containers/Main.jsx',
    'src/components/NotFound.jsx'
];

//递归清空目录
function delAll(path) {
    var files_list = [];
    files_list = fs.readdirSync(path);
    files_list.forEach(function (file, index) {
        var next = path + '/' + file;
        if (fs.statSync(next).isDirectory()) {
            delAll(next);
        } else {
            fs.unlinkSync(next);
        }
    })
    fs.rmdirSync(path);
}

//设置相关目录
function createDir() {

    //检查是否已创建
    var check_exis = fs.existsSync(dev_path);
    if (check_exis) {
        console.log('清空残留开发文档');
        delAll(dev_path);
    }
    //创建开发目录
    fs.mkdirSync(dev_path);
    for (var i = 0; i < dir_arr.length; i++) {
        fs.mkdirSync(dev_path + '/' + dir_arr[i]);
    }
    console.log('项目文件夹创建完毕');
}

//创建开发文件
function createFile() {
    for (var i = 0; i < file_arr.length; i++) {
        fs.openSync(dev_path + '/' + file_arr[i], 'w');
    }
    console.log('项目文件创建完毕');
}

//配置开发文件
function fillText(filled) {
    switch (filled) {
        case 'static/template.html':
            var write_text =
                `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>React-cli</title>
</head>
<body>
    <noscript>
        您的浏览器不支持JS脚本的运行！
    </noscript>
    <div id="root" style="height:100%"></div>
</body>
</html>
`;
            return write_text;
            break;
        case 'mock/db.js':
            var write_text =
                `
const Mock = require('mockjs');

module.exports = function() {
    let data = {
        'index': [
            {
                id: 0,
                title: Mock.mock({
                    "string|1-10": "★"
                    }),
                img:  Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
            }
        ],
        'home': [
            {
                id: 1,
                title: Mock.mock({
                    "string|1-10": "!"
                    }),
                img:  Mock.Random.image('200x100', '#50B347', '#FFF', 'Mock.js')
            }
        ]
    }
    return data
}    
`
            return write_text;
            break;
            case 'mock/routes.json':
            var write_text =
                `
{
    "/api/*": "/$1"
}
`
            return write_text;
            break;
        case 'src/containers/Main.jsx':
            var write_text =
                `
/**
 * @file: 文件 
 * @author: JihangGuo 
 * @last Modified time: 2018-02-02 14:19:02 
 * @email: guojihang@baidu.com 
 */
import React, { Component } from 'react';
class defaultExport extends Component {
    render() {
        return (
            <h1>Hello World！</h1>
        )
    }
}
export default defaultExport; 
`;
            return write_text;
            break;
        case 'src/components/NotFound.jsx':
            var write_text =
                `
/**
 * @file: 文件 
 * @author: JihangGuo 
 * @last Modified time: 2018-02-02 14:19:50 
 * @email: guojihang@baidu.com 
 */
import React, { Component } from 'react';
class defaultExport extends Component {
    render() {
        return (
            <h1>找不到页面啦</h1>
        )
    }
}
export default defaultExport;
`;
            return write_text;
            break;
        case 'src/app.jsx':
            var write_text =
                `
/**
 * @file: 文件 
 * @author: JihangGuo 
 * @last Modified time: 2018-02-02 14:20:20 
 * @email: guojihang@baidu.com 
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './containers/Main.jsx'
import NotFound from './components/NotFound.jsx'
class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}
export default App;
`
            return write_text;
            break;
        case 'src/index.js':
            var write_text =
                `
/**
 * @file: 文件 
 * @author: JihangGuo 
 * @last Modified time: 2018-02-02 14:21:26 
 * @email: guojihang@baidu.com 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app.jsx'
ReactDOM.render(<Root />, document.getElementById('root'));

`;
            return write_text;
            break;
        case 'package.json':
            var write_text =
                `
{
    "name": "react-simple-cli",
    "version": "1.1.7",
    "description": "The most simple of react project",
    "main": "index.js",
    "scripts": {
        "start": "node ./scripts/start.js",
        "build": "node ./scripts/build.js",
        "init": "node ./scripts/init.js",
        "server": "json-server --watch mock/db.js --routes mock/routes.json --port 9999"
    },
    "dependencies": {
        "antd": "^3.2.0",
        "axios": "^0.17.1",
        "mobx": "^3.5.1",
        "mobx-react": "^4.4.2",
        "moment": "^2.20.1",
        "react": "^16.2.0",
        "react-dom": "^16.2.0",
        "react-router-dom": "^4.2.2",
        "json-server": "^0.12.2",
        "mockjs": "^1.0.1-beta3"
    },
    "devDependencies": {
        "babel": "^6.23.0",
        "babel-core": "^6.26.0",
        "babel-loader": "^7.1.2",
        "babel-plugin-transform-decorators-legacy": "^1.3.4",
        "babel-preset-latest": "^6.24.1",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "css-loader": "^0.28.9",
        "file-loader": "^1.1.6",
        "html-webpack-plugin": "^2.30.1",
        "less": "^2.7.3",
        "less-loader": "^4.0.5",
        "style-loader": "^0.20.1",
        "url-loader": "^0.6.2",
        "webpack": "^3.10.0",
        "webpack-dev-server": "^2.11.1"
    },
    "author": "JihangGuo",
    "license": "ISC"
}
`;
            return write_text;
            break;
        case 'scripts/build.js':
            var write_text =
                `
/**
 * @file: 文件
 * @author: JihangGuo
 * @last Modified time: 2018-02-02 13:19:37
 * @email: guojihang@baidu.com
 */
const process = require('child_process');
let watchProd = process.spawn('webpack', ['--config', './config/webpack.config.prod.js', '--watch']);
watchProd.stdout.on('data', (data) => {
    console.log('打包监听 : \\n' + data);
});
watchProd.on('close', (data) => {
    console.log('关闭打包模式 : \\n');
});
`;
            return write_text;
            break;
        case 'scripts/init.js':
            var write_text =
                `

/**
 * @file: 项目初始化文件
 * @author: JihangGuo
 * @last Modified time: 2018-02-02 11:28:46
 * @email: guojihang@baidu.com
 */
const process = require('child_process');

// npm源设置
const npmRegistry = 'https://registry.npm.taobao.org';
// 安装的运行依赖模块
const devModules = [
  'babel',
  'babel-core',
  'babel-loader',
  'babel-preset-latest',
  'babel-preset-react',
  'babel-preset-stage-0',
  'css-loader',
  'file-loader',
  'html-webpack-plugin',
  'style-loader','url-loader',
  'webpack',
  'less-loader',
  'less',
  'webpack-dev-server'
];

// 安装的开发依赖模块
const prodModules = [
  'react',
  'react-dom',
  'react-router-dom',
  'axios',
  'antd',
  'moment',
  'mobx',
  'json-server',
  'mockjs'
];

// 由于spawn命令参数传递的特殊性 故在数组[0][-1]加入额外参数
// let commontProd = prodModules.map((item) => {
//   return item;
// });
// let commontDev = devModules.map((item) => {
//   return item;
// });
// commontProd.push('--save');
// commontProd.unshift('i');
// commontDev.push('--save-dev');
// commontDev.unshift('i');

// 运行线程任务
// process.execSync(\`npm config set registry \${npmRegistry}\`);
// console.log("设置npm源为淘宝源成功");

// let runShellTwo = process.spawn('npm',commontProd);
// runShellTwo.stdout.on('data', (data) => {
//   console.log("正在下载依赖模块 : \\n" + data);
// });
// runShellTwo.on('close', (data) => {
//   console.log("依赖模块安装成功\\n");
// });

// let runShellThree = process.spawn('npm',commontDev);
// runShellThree.stdout.on('data', (data) => {
//   console.log("正在下载开发依赖模块 : \\n" + data);
// });
// runShellThree.on('close', (data) => {
//   console.log("开发依赖模块安装成功\\n项目初始化完成");
// });

let runShellAll = process.spawn('npm',['install']);
runShellAll.stdout.on('data', (data) => {
  console.log("正在下载开发依赖模块 : \\n" + data);
});
runShellAll.on('close', (data) => {
  console.log("开发依赖模块安装成功\\n项目初始化完成");
});
`;
            return write_text;
            break;
        case 'scripts/start.js':
            var write_text =
                `
/**
 * @file: 文件
 * @author: JihangGuo
 * @last Modified time: 2018-02-02 13:19:37
 * @email: guojihang@baidu.com
 */
const process = require('child_process');
let watchDev = process.spawn('webpack-dev-server', ['--config', './config/webpack.config.dev.js', '--inline']);
watchDev.stdout.on('data', (data) => {
    console.log('开发模式 : \\n' + data);
});
watchDev.stderr.on('data', (data) => {
    console.log('开发模式 : \\n' + data);
});
watchDev.on('close', (data) => {
    console.log('关闭开发模式 : \\n');
});
`;
            return write_text;
            break;

        case '.babelrc':
            var write_text =
                `
{
    "presets": [
        "latest",
        "react",
        "stage-0"
    ],
    "plugins": ["transform-decorators-legacy"]
}
`;
            return write_text;
            break;
        case 'config/webpack.config.dev.js':
            var write_text =
                `
/**
 * @file: 文件
 * @author: JihangGuo
 * @last Modified time: 2018-02-02 13:28:35
 * @email: guojihang@baidu.com
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    // 打包入口文件
    entry: ['webpack-dev-server/client?http://localhost:8080/', __dirname + '/../src/index.js',  __dirname + '/../node_modules/antd/dist/antd.css'],
    // 打包出口文件
    output: {
        path: __dirname + '/../src/',
        filename: 'bundle.js'
    },
    // loader 进行非js文件的转换打包
    // loader进行非js文件的转换打包
    module: {
        // loaders加载器使用外部配置的.babelrc进行配置
        loaders: [
            {
                test: /\\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\\.(png|jpg)$/,
                loader: 'url-loader?limit=40000&outputPath=./img/'
            },
            {
                test: /\\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    // 外置插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),// 热模块替换插件
        new HtmlWebpackPlugin({
            filename: __dirname + '/../src/index.html',
            template: __dirname + '/../static/template.html',
            inject: 'body',
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ],
    // webpack-dev-server配置
    devServer: {
        contentBase: __dirname + '/../src/', // 只能精确到根文件夹 默认文件为index.html
        historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,// 设置为true，当源文件改变时会自动刷新页面
        port: 8080,// 设置默认监听端口，如果省略，默认为"8080"
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:9999/',
                changeOrigin: true,
                secure: false
            }
        }
    }
}
`;
            return write_text;
            break;
        case 'config/webpack.config.prod.js':
            var write_text =
                `
/**
 * @file: 文件
 * @author: JihangGuo
 * @last Modified time: 2018-02-02 14:05:30
 * @email: guojihang@baidu.com
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
    devtool: 'cheap-module-source-map',
    //打包入口文件
    entry: [__dirname + '/../src/index.js',  __dirname + '/../node_modules/antd/dist/antd.css'],
    //打包出口文件
    output: {
        path: __dirname + '/../build/js/',
        filename: 'bundle.min.js',
    },
    //loader 进行非js文件的转换打包
    module: {
        //loaders加载器 使用外部配置的 .babelrc进行配置
        loaders: [
            {
                test: /\\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\\.(png|jpg)$/,
                loader: 'url-loader?limit=40000&outputPath=./img/'
            },
            {
                test: /\\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    //外置插件
    plugins: [
        new HtmlWebpackPlugin({
            title:'react-app',
            filename: '../index.html',
            template:__dirname + '/../static/template.html',
            inject: 'body',
            hash: true,
            minify: {
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: false    //删除空白符与换行符
            }
        }),
        new UglifyJsPlugin
    ]
}
`;
            return write_text;
            break;
        default:
            //抛出错误
            try {
                throw "找不到配置文件 : " + filled;
            }
            catch (err) {
                console.log('Error:' + err);
            }
    }
}

//填充开发文件
function fillFile() {
    //填充package.json
    for (var i = 0; i < file_arr.length; i++) {
        fs.writeFileSync(dev_path + '/' + file_arr[i], fillText(file_arr[i]));
    }
    console.log('项目文件配置完毕');
}


(function () {
    console.log('初始化脚本');
    createDir();
    createFile();
    fillFile();
    console.log('搭建完毕，enjoy it！');
})();



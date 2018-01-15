//引入node自带的相关模块
const fs = require('fs')
const path = require('path')

const dev_path = __dirname+'/demo'
//文件目录配置
var dir_arr = [
    'scripts/',
    'config/',
    'static/',
    'src/',
    'src/components/',
    'src/containers/'
]
//文件配置
var file_arr = [
    '.babelrc',
    'app.jsx',
    'index.js',
    'index.html',
    'package.json',
    'static/template.html',
    'scripts/build.js',
    'scripts/start.js',
    'config/webpack.config.dev.js',
    'config/webpack.config.prod.js',
    'src/containers/main.jsx',
    'src/components/notFound.jsx'
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
    if (check_exis)
    {
        console.log('清空残留开发文档');
        delAll(dev_path);
    }   
    //创建开发目录
    fs.mkdirSync(dev_path);
    for (var i = 0; i < dir_arr.length; i++)
    {
        fs.mkdirSync(dev_path + '/' + dir_arr[i]);
    }    
        console.log('项目文件夹创建完毕');
}

//创建开发文件
function createFile() {
    for (var i = 0; i < file_arr.length; i++)
    {
        fs.openSync(dev_path+'/'+file_arr[i],'w');
    }
    console.log('项目文件创建完毕');
}

//配置开发文件
function fillText(filled) {
    switch (filled)
    {
        case 'static/template.html':
            var write_text = `
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
    <div id="root"></div>

    
<script type="text/javascript" src="js/bundle.js?7aca2699e85608e4334e"></script></body>

</html>
            `;
            return write_text;
            break;
        case 'src/containers/main.jsx':
            var write_text = `
                import React, { Component } from 'react';
                class notFound extends Component {
                    render() { 
                        return (
                            <h1>Hello World！</h1>
                        )
                    }
                }
                export default notFound 
            `;
            return write_text;
            break;
        case 'src/components/notFound.jsx':
            var write_text = `
                import React, { Component } from 'react';
                class notFound extends Component {
                    render() { 
                        return (
                            <h1>找不到页面啦</h1>
                        )
                    }
                }
                export default notFound 
            `;
            return write_text;
            break;
        case 'app.jsx':
            var write_text = `
                import React, { Component } from 'react';
                import { HashRouter as Router, Route, Switch} from 'react-router-dom'
                import main from './src/containers/main.jsx'
                import notFound from './src/components/notFound.jsx'
                
                class App extends Component {
                    render() {
                        return (
                            <Router>
                                <div>
                                    <Switch>
                                        <Route exact path="/" component={main} />
                                        <Route path="/" component={notFound} />
                                    </Switch>
                                </div>
                            </Router>
                        );
                    }
                }
                export default App;
            `    
            return write_text;
            break;
        case 'index.js':
            var write_text = `
                import React from 'react';
                import ReactDOM from 'react-dom';
                import Root from './app.jsx'
                ReactDOM.render(<Root />, document.getElementById('root'));
            `
            return write_text;
            break;    
        case 'index.html':
            var write_text = `
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                        <title>React-cli</title>
                    </head>
                    <body>
                        <noscript>
                            您的浏览器不支持JS脚本的运行！
                        </noscript>
                        <div id="root"></div>
                        <script src='bundle.js'></script>
                    </body>
                </html>
            `;
            return write_text;
            break;    
        case 'package.json':
            var write_text = `
            {
    "name": "react-demo",
    "version": "1.0.0",
    "description": "react-cli",
    "main": "index.js",
    "scripts": {
        "start": "webpack-dev-server --config ./config/webpack.config.dev.js --inline",
        "build": "webpack --config ./config/webpack.config.prod.js --watch",
        "init": "npm config set registry https://registry.npm.taobao.org | npm i babel babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server html-webpack-plugin css-loader style-loader url-loader file-loader --save-dev | npm i react react-dom react-router-dom --save "
    },
    "dependencies": {
        
    },
    "devDependencies": {
        
    },
    "author": "JihangGuo",
    "license": "ISC"
}

            `;
            return write_text;
            break;    
        case 'scripts/build.js':
            return '123';
            break;    
        case 'scripts/start.js':
            var write_text = `
                const process = require('child_process')
                
                var do_shell = [
                    'webpack-dev-server'
                ]
                for(var i=0;i<do_shell.length;i++)
                {
                   process.exec(do_shell[i]); 
                }
            `
            return write_text;
            break;    
    
        case '.babelrc':
            var write_text = `
            {
                "presets": [
                    "react",
                    "es2015"
                ]
            }
            `;
            return write_text;
            break;
        case 'config/webpack.config.dev.js':
            var write_text = `

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    //打包入口文件
    entry: ['webpack/hot/dev-server', __dirname + '/../index.js'],
    //打包出口文件
    output: {
        path: __dirname + '/../',
        filename: 'bundle.js',
    },
    //loader 进行非js文件的转换打包
    module: {
        //loaders加载器 使用外部配置的 .babelrc进行配置
        loaders: [{
            test: /\\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    //外置插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    //webpack-dev-server配置
    devServer: {
        contentBase: __dirname + '/../', //只能精确到根文件夹 默认文件为index.html
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8080,//设置默认监听端口，如果省略，默认为"8080"
        open:true
    }
}

            `;
            return write_text;
            break;    
        case 'config/webpack.config.prod.js':
            var write_text = `

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    //打包入口文件
    entry: [__dirname + '/../index.js'],
    //打包出口文件
    output: {
        path: __dirname + '/../build/js/',
        filename: 'bundle.js',
    },
    //loader 进行非js文件的转换打包
    module: {
        //loaders加载器 使用外部配置的 .babelrc进行配置
        loaders: [
            {
                test: /\\.css$/,
                loaders: ['style-loader?outputPath=../css/', 'css-loader?outputPath=../css/']         
            },
            {
                test: /\\.(png|jpg)$/,
                loader: 'url-loader?limit=40000&outputPath=../img/'
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
            inject: 'body', //打包之后的js插入的位置，true/'head'/'body'/false,
            hash: true,
            minify: {
                    removeComments: true,    //移除HTML中的注释
                    collapseWhitespace: false    //删除空白符与换行符
             }
        })
    ]
}

            `
            return write_text;
            break;    
        default:
            //抛出错误
            try {
                throw "找不到配置文件";
            }
            catch (err) {
                console.log('Error:' + err);
            }
    }
}

//填充开发文件
function fillFile() {
    //填充package.json
    for (var i = 0; i < file_arr.length; i++)
    {
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



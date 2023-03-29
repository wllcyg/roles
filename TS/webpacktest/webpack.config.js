const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        // 指定loader规则
        rules: [{
            test: /\.ts$/,
            use: [{
                loader:'babel-loader',
                options:{
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                targets:{
                                    'chrome':'30'
                                },
                                'corejs':'3',
                                'useBuiltIns':'usage'
                            }
                        ]
                    ]
                }
            },'ts-loader'],
            exclude: /node_modules/
        }]
    },
    devServer: {
        static: './dist',
        open: true,
      },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html'
        })
    ],
    // 定义哪些模块可以是引入的
    resolve:{
        extensions:['.ts','.js']
    }
}
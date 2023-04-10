const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        // 不使用webpack
        environment:{
            arrowFunction:false
        }
    },

    module: {
        // 指定loader规则
        rules: [
            {
            test: /\.ts$/,
            use: [{
                loader:'babel-loader',
                options:{
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                targets:{
                                    'chrome':'30',
                                    'ie':'8'
                                },
                                'corejs':'3',
                                'useBuiltIns':'usage'
                            }
                        ]
                    ]
                }
            },'ts-loader'],
            exclude: /node_modules/
        },
        {
            test:/\.(le|sa|sc|c)ss$/,
            use:[
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            pligins:[
                                [
                                    "postcss-preset-env",
                                    {
                                      browsers:'last 2 versions',  
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }
    ]
    },
    devServer: {
        static: './dist',
        open: true,
      },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    // 定义哪些模块可以是引入的
    resolve:{
        extensions:['.ts','.js']
    }
}
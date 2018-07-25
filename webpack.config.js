const path = require('path')
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    //入口文件的路径
    entry: "./src/index.tsx",
    output: {
        //打包的输出路径
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    // 添加需要解析的文件格式
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.scss'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'learn-react',
            template: './index.html',
        }),
        new ExtractTextWebpackPlugin({
            filename: 'app.css',
            allChunks: true
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, './src')
            ],
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"],
                plugins: [
                    ["import", { libraryName: "antd", style: 'css' }] // antd按需加载
                ]
            },
        },
            {
                test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 5 * 1024,
                    //指定拷贝文件的输出目录
                    outputPath: 'images/'
                }
            }]
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader?modules",
            exclude: /node_modules/,
        },
        {//antd样式处理
            test: /\.css$/,
            exclude: /src/,
            use: [
                { loader: "style-loader", },
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                }
            ]
        },
        {
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"],
                publicPath: "/dist"
            }),
            include: path.join(__dirname, './src'),
            exclude: /node_modules/
        },
        {
            test: /\.(html|htm)/,
            use: 'html-withimg-loader'
        },
        {
            test: /\.tsx?$/,
            use: ['ts-loader']
        }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        // colors: true,  //终端中输出结果为彩色
        historyApiFallback: true,  //不跳转
        inline: true,  //实时刷新
        port: 8080
    },
    // 启用sourceMap
    devtool: "source-map",
}
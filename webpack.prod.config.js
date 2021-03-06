var webpack = require("webpack");
var path = require('path');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);
var config = {
    node: {
        __dirname: false,
        __filename: false
    },
    plugins: [
        // minify
        new webpack.optimize.UglifyJsPlugin({
            // 変数を省略しない
            mangle:false,
            // ライセンスコメントは残す
            output:{comments: require('uglify-save-license')}
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vender.js')
    ],
    entry: {
        // build対象
        //main: APP_DIR + "/main.ts",
        index: APP_DIR + "/index.ts",
        vendor: ['jquery']
    },
    output: {
        // 出力先のディレクトリを指定する
        path: BUILD_DIR,
        // 出力するファイル名
        filename: "[name].js",
    },
    resolve: {
        // requireやimportしたときに省略を自動的に補完してくれる拡張子の一覧
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.css$/, loaders: ['style', 'css?modules'], },
        ],
    },
};

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
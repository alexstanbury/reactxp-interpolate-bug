const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const {buildConfig, APP_PATH, WEB_PATH} = require('./common');

module.exports = (env, argv) => {
    // console.log('env', env.platform);
    // console.log('argv', JSON.stringify(argv, null, 2));
    return (

        merge(buildConfig(env, argv), {
            entry: path.join(WEB_PATH, 'index.hmr.js'),
            devtool: 'inline-source-map',

            plugins: [
                new webpack.HotModuleReplacementPlugin(),
            ],

            devServer: {
                contentBase: APP_PATH,
                openPage: '',
                inline: true,
                stats: 'minimal',
                open: true,
                port: 9999,
                hot: true,
                compress: true
            },
        })
    )
}
;

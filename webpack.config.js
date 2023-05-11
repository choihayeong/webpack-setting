// import
const path = require('path'),
      HtmlPlugin =require('html-webpack-plugin');

// export
module.exports = {
    entry: './js/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html'
        })
    ],

    devServer: {
        host: 'localhost',
    }
}
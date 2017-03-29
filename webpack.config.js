var path = require('path');

module.exports = {
    entry: './app/App.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
      contentBase: './public',
      inline: true,
      port: 9000
    }
}

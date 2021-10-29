const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: {
            name: '@webpack-demo/components',
            type: 'umd'
        }
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            defaultWebpack: ['webpack/lib/'],
            config: [__filename],
        }
    },
};

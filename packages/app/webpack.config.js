const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            defaultWebpack: ['webpack/lib/'],
            config: [__filename],
        }
    },
};

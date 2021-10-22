const webpack = require('webpack');
const { join } = require('path');

/**
 * 
 * @param {string} target Build target
 * @returns {import('webpack').Configuration}
 */
function getConfig(target = 'web') {
    return {
        target,
        entry: './src/main.js',
        mode: 'development',
        devServer: {
            static: {
                directory: join(__dirname, 'dist'),
            },
            port: 3001,
        },
        output: {
            publicPath: '/main2',
        },
        module: {},
    };
};

module.epxorts = getConfig();

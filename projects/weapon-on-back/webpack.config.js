const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const buildPath = './dist';

const weaponOnBack = {
    entry: {
        client: path.resolve(__dirname, 'src/client/client.ts'),
        server: path.resolve(__dirname, 'src/server/server.ts')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new ESLintPlugin(),
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, 'weapon-on-back')
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, 'weapon-on-back')
                ]
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'fxmanifest.lua'),
                    to: './'
                }
            ]
        })
    ],
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[contenthash].[name].js',
        path: path.resolve(buildPath, 'weapon-on-back'),
    },
};

module.exports = [weaponOnBack];

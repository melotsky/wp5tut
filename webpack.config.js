const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  mode: "development",

  entry: './src/index.js',

  devServer: {
    static: './dist'
  },

  module: {
    rules: [
        //RULES FOR JS, CHECK THE BABEL.CONFIG.JSON AS WELL
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        },

        //RULES FOR CSS SASS
        {
            test: /\.s?css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader",
                
            ]
        }
    ]
  },


  plugins: [

    new HtmlWebpackPlugin({
        title: 'Dev!!! WebPACK!'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),


  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
};
import {BuildPaths} from "./types/config";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {VueLoaderPlugin} from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const plugins = (paths: BuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "__VUE_PROD_DEVTOOLS__": true,
            "__VUE_OPTIONS_API__": true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[name][id].[contenthash].css'
        })
    ]
}

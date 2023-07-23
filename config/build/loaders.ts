import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const loaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { appendTsSuffixTo: [/\.vue$/] }
    }

    const vueLoader =       {
        test: /\.vue$/,
        loader: 'vue-loader'
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        vueLoader,
        styleLoader
    ]
}

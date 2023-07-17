import webpack from "webpack";
import {BuildPaths} from "./types/config";
import {plugins} from "./plugins";

export const webpackConfig = (paths: BuildPaths): webpack.Configuration => {
    return {
        mode: 'development',
        entry: paths.entry,
        output: {
            filename: 'main.[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: plugins(paths),
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
    }
}

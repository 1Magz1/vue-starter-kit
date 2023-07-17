import webpack from "webpack";
import {BuildPaths} from "./types/config";
import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolves} from "./resolves";

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
        resolve: resolves(),
        module: {
            rules: loaders(),
        },
    }
}

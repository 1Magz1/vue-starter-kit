import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolves} from "./resolves";

export const webpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {
        paths,
        mode
    } = options;

    return {
        mode,
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

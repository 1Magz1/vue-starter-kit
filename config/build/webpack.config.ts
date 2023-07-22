import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {plugins} from "./plugins";
import {loaders} from "./loaders";
import {resolves} from "./resolves";
import {devServer} from "./devServer";

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
        module: {
            rules: loaders(),
        },
        resolve: resolves(),
        devtool: 'inline-source-map',
        devServer: devServer(options)
    }
}

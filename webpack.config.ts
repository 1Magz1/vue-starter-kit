import path from "path";
import webpack from "webpack";
import {webpackConfig} from "./config/build/webpack.config";
import {BuildEnv, BuildMode, BuildOptions} from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const port = env.port || 3000;
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port
    }

    const config: webpack.Configuration = webpackConfig(options);

    return config;
}

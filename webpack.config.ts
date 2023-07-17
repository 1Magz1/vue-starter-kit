import path from "path";
import webpack from "webpack";
import {webpackConfig} from "./config/build/webpack.config";
import {BuildMode, BuildOptions} from "./config/build/types/config";

export default () => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode: BuildMode = 'development';
    const isDev = mode === 'development';

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
    }

    const config: webpack.Configuration = webpackConfig(options);

    return config;
}

import path from "path";
import webpack from "webpack";
import {webpackConfig} from "./config/build/webpack.config";

export default () => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const config: webpack.Configuration = webpackConfig(paths);

    return config;
}

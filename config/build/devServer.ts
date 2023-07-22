import {BuildOptions} from "./types/config";
import type {Configuration} from "webpack-dev-server";

export const devServer = (options: BuildOptions): Configuration => {
    const {port} = options;
    return {
        port,
        open: true,
    }
}

import webpack from "webpack";

export const loaders = (): webpack.RuleSetRule[] => {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const vueLoader =       {
        test: /\.vue$/,
        loader: 'vue-loader'
    }

    return [
        typeScriptLoader,
        vueLoader
    ]
}

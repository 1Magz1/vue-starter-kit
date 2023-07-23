import webpack from "webpack";

export const loaders = (): webpack.RuleSetRule[] => {
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
            "style-loader",
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

import webpack from "webpack";

export const loaders = (): webpack.RuleSetRule[] => {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typeScriptLoader
    ]
}

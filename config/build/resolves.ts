import {ResolveOptions} from "webpack";

export const resolves = (): ResolveOptions => {
    return {
        extensions: ['.ts', '.js', '.vue'],
        preferAbsolute: true,
    }
}

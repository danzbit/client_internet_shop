module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    mode: "development",
    entry: './src/index.tsx',
    devServer: {
        static: "./development"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            }
        ]
    }
}
module.exports = {
    publicPath: '/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: [
                        "vue-style-loader",
                        "css-loader"
                    ]
                }
            ]
        }
    },
    devServer: {
        disableHostCheck: true,
        proxy: 'http://localhost:4300'
    }
}

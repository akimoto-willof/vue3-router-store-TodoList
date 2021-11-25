const path = require('path')

module.exports = {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'index.js'
        },
        module: {
            rules: [
                {
                    test: /\.css/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        }
                    ]
                }
            ]
        }
}
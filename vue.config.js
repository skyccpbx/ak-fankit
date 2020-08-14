const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    productionSourceMap: false,
    lintOnSave: false,
    //outputDir: '/Users/txwy/Documents/wwwweb/static.txwy.tw/ak/stickers',

    configureWebpack: config => {
        config.module
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new CompressionPlugin({
                        filename: '[path].gz[query]',
                        algorithm: 'gzip',
                        test: /\.(js|css|html|svg)$/, // 匹配文件名
                        threshold: 10240, // 对超过10k的数据压缩
                        deleteOriginalAssets: false, // 不删除源文件
                        minRatio: 0.8, // 压缩比
                    }),
                ],
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .test(/\.(jpg|png|gif)$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10,
                // 以下配置项用于配置file-loader
                // 根据环境使用cdn或相对路径
                publicPath: process.env.NODE_ENV === 'production' ? 'https://rescdn.imtxwy.com/ak/stickers/img' : '',
                // 将图片打包到dist/img文件夹下, 不配置则打包到dist文件夹下
                outputPath: 'img',
                // 配置打包后图片文件名
                name: '[hash:7].[ext]',
            })
            .end()
    },
}

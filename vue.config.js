/**
 * @type import('@vue/cli-service').ProjectOptions
 */
const config = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-demo/': '/'
}

module.exports = config
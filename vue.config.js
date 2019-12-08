const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('prerender-spa-plugin')
        .use(PrerenderSPAPlugin, [
          {
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/about', '/adventures', '/info', '/article', '/sweden', '/get-here', '/accommodation', '/video', '/contact',
              '/adventures/skating/private',
              '/adventures/skating/weekend',
              '/adventures/kayak/private',
              '/adventures/kayak/weekend',
              '/adventures/hiking/private',
              '/adventures/hiking/eightdays',
              '/adventures/skiing/private',
              '/adventures/skiing/weekend',
              '/adventures/skiing/adventures'
            ], // List of routes to prerender.
            renderer: new PrerenderSPAPlugin.PuppeteerRenderer({headless: false}) // without this line does not work in my case
          }
        ])
    } else {
      // ...
    }

    transpileDependencies: [
      'vue-echarts',
      'resize-detector',
      'vuetify'
    ]

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end()


  }
}
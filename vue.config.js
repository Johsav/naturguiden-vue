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
            routes: [ '/', '/about', '/one', '/great', '/portfolio/two', '/portfolio/three'], // List of routes to prerender.
            renderer: new PrerenderSPAPlugin.PuppeteerRenderer() // without this line does not work in my case
          }
        ])
    } else {
      // ...
    }
  }
}
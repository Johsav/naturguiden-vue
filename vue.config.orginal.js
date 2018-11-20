var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
    configureWebpack: config => {
        if (process.env.MODE_ENV !== 'production') return

        return {
            plugins: [
                new PrerenderSpaPlugin(
                    path.join(__dirname, 'dist'),
                    [ '/', '/about', '/one'],
                    {
                        
                    }
                )
            ]
       }
    }
}
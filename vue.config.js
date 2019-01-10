module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/adventure',
        '/info'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

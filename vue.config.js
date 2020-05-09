module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '//cdn520.malianghang.com/' : '/',
  css: {
    sourceMap: true,
  },
  pwa: {
    themeColor: '#ff65b6',
    startUrl: 'https://520.malianghang.com/',
    workboxOptions: {
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true,
      // exclude: [/runtime\/.*\.(?:png)$/, /\.(?:html)$/],
      runtimeCaching: [
        {
          // To match cross-origin requests, use a RegExp that matches
          // the start of the origin:
          urlPattern: /^http.*\/runtime\/.*\.(?:png)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'runtime-image',
            // expiration: {
            //   maxAgeSeconds: 10,
            // },
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /\/$||\.(?:html)$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'index',
            // Configure which responses are considered cacheable.
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
};

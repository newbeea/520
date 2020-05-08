module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '//cdn520.malianghang.com/' : '/',
  css: {
    sourceMap: true,
  },
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true,
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      runtimeCaching: [
        {
          // To match cross-origin requests, use a RegExp that matches
          // the start of the origin:
          urlPattern: /^http.*\.(?:png|jpg|jpeg|svg)$/,
          handler: 'staleWhileRevalidate',
          options: {
            // cacheName: 'image',
            // expiration: {
            //   maxAgeSeconds: 10,
            // },
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

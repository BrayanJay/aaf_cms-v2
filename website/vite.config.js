import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages';
import legacy from '@vitejs/plugin-legacy';

const legacyMediaRedirectMiddleware = (req, res, next) => {
  if (!req.url) { next(); return }
  const [pathname, query = ''] = req.url.split('?')
  if (pathname.startsWith('/src/media/')) {
    const newPathname = pathname.replace('/src/media/', '/media/')
    const target = query ? `${newPathname}?${query}` : newPathname
    res.statusCode = 301
    res.setHeader('Location', target)
    res.end()
    return
  }
  next()
}

const legacyPdfRedirectPlugin = {
  name: 'legacy-pdf-redirect',
  configureServer(server) {
    server.middlewares.use(legacyMediaRedirectMiddleware)
  },
  configurePreviewServer(server) {
    server.middlewares.use(legacyMediaRedirectMiddleware)
  },
}

export default defineConfig({
  base: '/',
  server: {
    https: {
      key: './key.pem',
      cert: './cert.pem',
    },
  },
  plugins: [
    legacyPdfRedirectPlugin,
    react(),
    Pages(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Target older browsers
    }),
  ],
  build: {
    target: 'es2015',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-swiper': ['swiper'],
          'vendor-i18n': ['i18next', 'react-i18next'],
          'vendor-fontawesome': ['@fortawesome/fontawesome-svg-core', '@fortawesome/react-fontawesome'],
          'vendor-aos': ['aos'],
        },
      },
    },
  },
})

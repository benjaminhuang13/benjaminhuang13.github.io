import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    {
      name: 'serve-public-html-dirs',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0]
          if (url === '/') return next()
          const dir = url.endsWith('/') ? url : url + '/'
          const htmlPath = path.join(process.cwd(), 'public', dir, 'index.html')
          if (fs.existsSync(htmlPath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(fs.readFileSync(htmlPath, 'utf-8'))
            return
          }
          next()
        })
      },
    },
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    outDir: 'build',
  },
})

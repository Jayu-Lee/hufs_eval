// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
import dbEndpoint from './db';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
     // target: 'http://localhost:8080',	// 서버 URL or localhost:설정한포트번호
        target: 'http://13.124.72.3:8080',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );
};
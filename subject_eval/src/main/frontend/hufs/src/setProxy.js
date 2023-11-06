// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
import dbEndpoint from './db';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: dbEndpoint,	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );
};
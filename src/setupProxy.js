/* eslint-disable */

// https://github.com/chimurai/http-proxy-middleware

const { createProxyMiddleware } = require('http-proxy-middleware');
const pkg = require("../package.json");

module.exports = function(app) {
  // not currently hydrating process.env, but would be better
  // to take it from there instead of package.json
  const target = process.env.PROXY || pkg.defaultProxy;
  const user = process.env.USER || pkg.defaultUser;

  const apiProxy = createProxyMiddleware('/api', {
    target,
    changeOrigin: true,
    onProxyReq: req => {
      req.setHeader("X-Forwarded-User", user);
    }
  });

  // all requests with /api at the beginning of their route
  // will be forwarded to this target
  if (target) {
    app.use(
      "/api",
      apiProxy
    );
  }
};
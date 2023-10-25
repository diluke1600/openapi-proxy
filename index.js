var express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware');


var app = express();



app.use('/', createProxyMiddleware({

  target: 'https://api.openai.com',

  changeOrigin: true,

  onProxyRes: function (proxyRes, req, res) {

    proxyRes.headers['Access-Control-Allow-Origin'] = '*';

  }

}));



app.listen(9000, () => {

    console.log('start success.');

}).on('error', (e) => {

    console.error(e.code, e.message)

})

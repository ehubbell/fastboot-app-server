require('dotenv').config();
const FastBootAppServer = require('fastboot-app-server');

let server = new FastBootAppServer({
  distPath: '../bb-web/dist',
  gzip: true,
  host: '0.0.0.0',
  port: 4000,
  chunkedResponse: true
});

server.start();
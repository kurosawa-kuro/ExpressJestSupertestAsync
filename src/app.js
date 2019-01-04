//app.js
const express = require('express')
const app = express()

app.use('/', (() => {
    const router = express.Router();
    router.use('/async', require('../routes/async'));
  
    return router;
  })());

module.exports = app
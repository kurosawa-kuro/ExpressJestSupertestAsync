//app.js
const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World!')
// })

app.use('/', (() => {
    const router = express.Router();
    router.use('/async', require('../routes/async'));
  
    return router;
  })());

module.exports = app
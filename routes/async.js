const router = require('express-promise-router')();
const commonModule = require('../lib/commonModule');


router.get('/', async function (req, res) {
  const param = { 'result': 'async' };      // レスポンスで返す値。JSON形式。

  console.log('Oh time flies so fast...');
  await commonModule.sleep(6000);
  console.log('10 seconds passed.');

  res.header('Content-Type', 'application/json; charset=utf-8'); // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
});

module.exports = router;
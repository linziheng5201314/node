
const router = require('koa-router')();

const shop = require('./api/shop.js');

router.use('/shop',shop);

module.exports = router.routes();
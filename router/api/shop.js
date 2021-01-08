const router = require('koa-router')();

var shopController= require('../../controllers/api/shop.js')

router.get('/',(ctx)=>{
	/* console.time('s')
	shop.find((err,res)=>{
		console.timeEnd('s')
		console.log(res)
	}) */
	
	ctx.body='店铺列表';
});

router.get('/a',ctx=>shopController.add(ctx));
router.get('/b',(ctx)=>{
	ctx.body='b';
});
router.get('/c',(ctx)=>{
	ctx.body='c';
});
router.get('/d',(ctx)=>{
	ctx.body='d';
});

module.exports=router.routes();


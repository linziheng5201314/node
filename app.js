//获取env变量
const dotenv = require("dotenv")
dotenv.config()
//引入koa框架
const Koa = require('koa');
//引入静态资源解析库
const koaStaticCache=require('koa-static-cache');
//引入处理post数据的库
const bodyParser = require('koa-bodyparser');
//引入路由
const router=require('koa-router')();
//引入api文件
const api =require('./router/api.js');

const http=require('./util/http.js');
//跨域
var cors = require('koa2-cors');
// 创建一个Koa对象表示web app本身:
const app = new Koa();

//处理post
app.use(bodyParser());

app.use(cors())

app.use(async(ctx, next) => {
  
  try {
     
    await next();
	
  } catch (e) {
    
	ctx.body = { 
		code : http.code.error,
		data :'',
		msg : e.message || http.msg.error
	};
    ctx.status =e.status || 500;

  }
});

//api路由绑定
router.use('/api',api);

//处理静态资源
app.use(koaStaticCache(),__dirname+'/static');

//注册路由，并验证请求类型
app.use(router.routes()).use(router.allowedMethods());

// 在端口3000监听:
app.listen(3000);

console.log('app started at port 3000...'); 
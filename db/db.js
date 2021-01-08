//数据库连接

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
var dbUrl=process.env.DB_URL+process.env.DB_NAME;

mongoose.connect(dbUrl,{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
	if(err){
		throw new Error('数据库连接失败');
	}
	console.log('数据库连接成功')
});

module.exports=mongoose

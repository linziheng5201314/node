
var Base = require('../base.js')
const shopService = require('../../service/api/shop.js')
class Shop extends Base{
	
	 async add(ctx){
		 
		let id="5ff66394e5d96d8b779575de";
		
		let data={a:1,b:2}
		
		let httpRes=this.httpRes()
		
		let [code,msg]=[httpRes.code.success,httpRes.msg.success]
		
		var res=await shopService.createCat(id,data)
		
		if(!res){
			[code,msg]=[httpRes.code.fail,httpRes.msg.setFail]
		}
		
		ctx.body=this.res('',msg,code);
	}
	
	a(){
		return 456;
	}
	
}
module.exports=new Shop();
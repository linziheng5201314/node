var shopModel=require('../../model/api/shop.js')

class Shop{
	
	createCat(id,data){
		//return new Promise((resolve,retject)=>{})
		return shopModel.findOneAndUpdate( {_id:id},{$push:{aa:data}});
		
	}
}
module.exports=new Shop()
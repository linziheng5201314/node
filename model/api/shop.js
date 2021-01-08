var mongoose=require('../../db/db.js');

var shopSchema = mongoose.Schema({
  shopName: String,
  age:Number,
  aa:Array
});

module.exports=mongoose.model('Shop',shopSchema,'shop');

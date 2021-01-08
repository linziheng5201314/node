var http =require('../util/http.js')
class Base{
	//结果返回
	res(data,msg,code){
		data=data || '',
		msg=msg || http.msg.success
		code=code || http.code.success
		return {
			code,
			data,
			msg
		}
	}
	//业务状态码和提示信息
	httpRes(){
		return http
	}
	
}

module.exports=Base;
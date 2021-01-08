module.exports={
	//状态码
	code:{
		success:1,//请求成功
		fail:0,//请求失败
		error:-1,//请求错误
	},
	//业务提醒
	msg:{
		tokenNot:'缺少token参数',
		tokenError:'token验证错误',
		fail:'fail',
		success:'ok',
		setFail:'操作失败，请稍后再试',
		error:'服务器错误'
	}
}
import Http from '../../axios/index.js'
/**
 * 用户登录 
 */
export const  $Login = async (data) => {
	try{
		let res = await Http.post('/managecenter/api/v1/User/Login',data)
		return res
	}catch(err){
		return Promise.reject(err)
	}
}

/**
 * 发送手机验证码
 */

export const $SendVerifyCode = async (data) => {
	try{
		let res = await Http.get('/managecenter/api/v1/User/SendVerifyCode',data)
		return res
	}catch(err){
		return Promise.reject(err)
	}
}
/**
 * 获取登录用户信息
 */

export const $GetUserInfo = async (data) => {
	try{
		let res = await Http.get('/managecenter/api/v1/User/GetUserInfo',data)
		return res
	}catch(err){
		return Promise.reject(err)
	}
}
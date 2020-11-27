import Request from '@/js_sdk/luch-request/index.js'
import {baseURL} from '../config/environment.js'
import Store from '@/store/index.js'
console.log(Store)
const http = new Request()
http.setConfig((config) => { /* config 为默认全局配置*/
    //#ifndef H5
	config.baseURL = baseURL
	//#endif
    config.timeout = 120000
	config.header = {'Content-type':'application/json;charset=UTF-8'}
    return config
})

//请求拦截
http.interceptors.request.use((config) => { // 可使用async await 做异步操作

  config.header = {
    ...config.header,
    Authorization: Store.getters['user/get_token']
  }

   if (!Store.state.user.token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
      return Promise.reject(config)
    }
   
  return config
}, config => { // 可使用async await 做异步操作
  return Promise.reject(config)
})

/**
 * 错误状态码处理
 */
 const errorHander = (err) => {
	 if(err && err.response){
		 switch (err.response.status){
			 case 400:
			 err.message = '错误请求'
			 break;
			 case 401:
			 err.message = '登录权限过期，请重新登录'
			 break;
			 case 403:
			 err.message = '拒绝访问'
			 break;
			 case 404:
			 err.message = '请求错误，未找到该资源'
			 break;
			 case 405:
			 err.message = '请求方法未允许'
			 break;
			 case 408:
			 err.message = '请求超时'
			 break;
			 case 500:
			 err.message = '服务器错误'
			 break;
			 case 501:
			 err.message = '网络未实现'
			 break;
			 case 502:
			 err.message = '网络错误'
			 case 503:
			 err.message = '服务不可用'
			 break;
			 case 504:
			 err.message = '网络超时'
			 break;
			 case 505:
			 err.message = 'http版本不支持该请求'
			 break;
			 default:
			 err.message = `链接错误${err.response.status}`
		 }
	 }
	 if(err.message){
		 uni.showToast({
		 	title:err.message,
			duration:2000
		 })
	 }
	 
 }
//请求响应
http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
   if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
     return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
	 }
  console.log(response)
  return response
}, (error) => { /*  对响应错误做点什么 （statusCode !== 200）*/
  errorHander(error)
  return Promise.reject(error)
})

export default http

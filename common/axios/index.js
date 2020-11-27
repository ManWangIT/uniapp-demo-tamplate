import http from './axios.js'

class Http {
	async get(url,params,options = {}){
		try{
			let res = await http.get(url, {params,...options})
			return res
		}catch(err){
			return Promise.reject(err)
		}
	}
	async post(url,data,options = {}){
		try{
		let res = await http.post(url,data,options)
		return res
		}catch(err){
			return Promise.reject(err)
		}
	}
	async upload(url,options){
		try{
			let res = await http.upload(url,options)
			return res
		}catch(err){
			//TODO handle the exception
			return Promise.reject(err)
		}
		  
	}
}
export default new Http()

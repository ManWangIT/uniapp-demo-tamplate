import { $GetUserInfo } from '@/common/apis/user/index.js'
/**
 * 用户信息，角色 ，权限
 */

const state = {
	userInfo:null,
	token:uni.getStorageSync('token')
}

const getters = {
	get_token(state){
		return 'Bearer ' + state.token
	}
}

const mutations = {
	GET_USERINFO(state,params){
		state.userInfo = params
	},
	SET_TOKEN(state,params){
		state.token = params
	}
}

const acitons = {
	async get_userInfo({commit},params){
		//获取用户信息
		try{
			let res = await $GetUserInfo()
					
			commit('GET_USERINFO',params)
		}catch(err){
			
		}
		
	},

}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	acitons
}
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import modules from './modules/index.js'
 const Store = new Vuex.Store({
	 modules
	
})

export default Store


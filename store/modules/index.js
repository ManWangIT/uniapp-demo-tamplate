// router/modules/index.js
// const files = require.context('.', true, /\.js$/)
// const modules = []

// files.keys().forEach(key => {
//   if (key === './index.js') return
//   const item = files(key).default
//   modules.push(...item)
// })

import user from './user/index.js'


export default {
	user
}
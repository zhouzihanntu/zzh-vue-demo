//store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    currentData:12121
}

//这块是重点，能够改变state的只能够在 mutations完成！！！
const mutations = {
    SWITCH_SUCCESS(state,content){
        console.log(content)
        // state.rawHtml = _rawHtml
        state.currentData = content;
    }
}

const actions = {
	modifyData({commit},payload){
		console.log(payload);
	}
};

//最后别忘了，这块要export 出去，还记得我们在编写app.vue 的时候 引入的store，就是这个，SPA只需要在最顶层的app.vue 引用一次即可。
export default new Vuex.Store({
    state,
    mutations,
    actions
})
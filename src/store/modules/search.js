import * as types from '../mutation-types'

// initial state
const state = {
	condition: {
		owner: "zhouzihanntu",
		repo: "zzh-vue-demo"
	}
}

// getters
const getters = {
  test: state => state.test
}

// actions
const actions = {
  	modifyData( {commit}, payload ){
		// return commit( 'hhh', payload);
		commit(types.SEARCH_STATUS,payload)
		
	}
}

// mutations
const mutations = {
 
  [types.SEARCH_STATUS] (state,payload) {
  	const new_state = {
        owner: payload.owner,
        repo: payload.repo
  	}
  	state.condition = new_state;
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
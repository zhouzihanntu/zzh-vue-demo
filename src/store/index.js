import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';

import search from './modules/search'

Vue.use( Vuex );

const modules = { search };
const state = {
	pageNum: 1,
};

export default new Vuex.Store( {
	state,
	getters,
	// actions,
	modules
} );


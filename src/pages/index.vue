<template>

 <div class="holder">
       User:<input type="text" name="owner" v-model="owner"><br/>
       Repo:<input type="text" name="repo" v-model="repo"><br/>
       <button v-on:click = "changeStates">SEARCH</button>
       <h3>当前：{{search_owner}} {{search_repo}}</h3>

 </div>

</template>


<script type="text/javascript">
	import { mapState, mapActions } from 'vuex';

	export default {
		data(){
			return {
				owner: "",
				repo: ""
			}
		},
		computed: {
			...mapState( {
				search_owner: store => store.search.condition.owner,
				search_repo: store => store.search.condition.repo,
			} )
		},
		mounted(){
			this.owner = this.search_owner;
			this.repo = this.search_repo;
		},
		methods:{
			...mapActions( [
				'modifyData'
			] ),
			changeStates(){
				const params = {
					owner: this.owner,
					repo: this.repo
				}
				this.modifyData(params);
			}
		}
		
	}

</script>

<style rel="stylesheet/less" lang="less" scoped>
	.holder {
		text-align: center;
		input {
			border: 1px solid #d9d9d9;
			margin: 1rem 0;
			height: 2.4rem;
			padding: 0 1rem;
			background: #FFFFFF;
			font-size: 1.5rem;
			color: #353c46;
		}
		button {
		    margin: 1rem;
			padding: 1rem;
			background-color: #f6f6f6;
			border: none;
			cursor: pointer;
		}
	}
</style>
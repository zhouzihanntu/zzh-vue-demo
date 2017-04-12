<template>

 <div class="">
       <!-- <input type="text" name="" value=""> -->
       <button v-on:click = "modifyData">hhhhhhhhhhh</button>
       <h3>{{rawHtml}}-323213</h3>

 </div>

</template>


<script type="text/javascript">
	import {modifyData} from '../vuex/actions' 
    import {getDefaultInfo} from '../vuex/getters'

	export default {
		data(){
			return {
				rawHtml:''
			}
		},
		computed:{
			rawHtml(){
				return this.$store.state.defaultInfo;
			}
		},

		mounted(){
			console.log(this.$store.state.defaultInfo);
		},
		methods:{
			modifyData(){

				this.$store.commit('SWITCH_SUCCESS','123456789');

			}
		}
		
	}

</script>
<template>

 <div class="">
       <h1>welcome </h1>
       <!-- <input type="text" name="" value=""> -->
       <button v-on:click = "modifyData">hhhhhhhhhhh</button>
       <h3>{{rawHtml}}-323213</h3>

 </div>

</template>


<script type="text/javascript">
	// import {modifyData} from '../vuex/actions' 
	import {modifyData} from '../vuex/actions' 
    import {getDefaultInfo} from '../vuex/getters'

	export default {
		data(){
			return {
				rawHtml:''
			}
		},
		/*
			this.$store,
		*/

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
		// vuex:{
		// 	actions:{
		// 		modifyData
		// 	},
		// 	getters:{
		// 		rawHtml:getDefaultInfo
		// 	}
		// },
	}



	// export default {
	//     // data () {
	//     //     return {
	//     //         repo: "zzh-vue-demo",
	//     //         owner: "zhouzihanntu",
	//     //         // repo: "gold-miner",
	//     //         // owner: "xitu",
	//     //     }
	//     // },

	//     data(){
	//     	return {
	//     		defaultInfo:getDefaultInfo
	//     	}
	//     },

	//     methods:{
	//     	modifyData(){

	//     	}
	//     },

	//     vuex:{//看到没，里面有个 vuex 对象，actions和getters两者相得益彰
 //            actions:{
 //                // \modifyData
 //                //内容改变触发
 //            },
 //            getters:{
 //                //获得rawHtml 
 //            }
 //        },
	//     // mounted: function() {
	//     //     let self = this;
	//     //     let hh = location.href;
	//     //     // console.log(hh);
	//     //     let reg = /(issues\/=?\d*)/g;
	//     //     let res = reg.exec(hh)[0].replace("issues/", "");
	//     //     // console.log(res);
	//     //     let targetUrl = baseUrl + "repos/" + self.owner + "/" + self.repo + "/issues/" + res;
	//     //     let config = {
	//     //         headers: {
	//     //             'Content-Type': 'application/json'
	//     //         }
	//     //     };
	//     //     axios.get( targetUrl, config)
	//     //     .then(function (response) {
	//     //         // console.log(response.data.title);
	//     //         self.title = response.data.title;
	//     //         self.body = response.data.body;
	//     //         self.transform( self.body );
	//     //         self.loaded = true;
	//     //     })
	//     //     .catch(function (error) {
	//     //         console.log(error);
	//     //     });
	//     // },
	//     // methods: {
	//     //     transform: function( mdText ) {
	//     //         let self = this;
	//     //         // console.log(marked(mdText));
	//     //         self.body = marked(mdText);
	//     //     }
	//     // }
	// }
</script>
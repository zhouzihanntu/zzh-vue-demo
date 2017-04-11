<template>
    <div id = "issueInfo" >
        <div id="loading" v-if = "!loaded">
            <h1>loading</h1>
        </div>
        <div v-html = "body">

        </div>
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"
var marked = require('marked');

let baseUrl = "https://api.github.com/";

export default {
    data () {
        return {
            loaded: false,
            title: "",
            body: "",
            repo: "zzh-vue-demo",
            owner: "zhouzihanntu",
            // repo: "gold-miner",
            // owner: "xitu",
        }
    },
    mounted: function() {
        let self = this;
        let hh = location.href;
        // console.log(hh);
        let reg = /(issues\/=?\d*)/g;
        let res = reg.exec(hh)[0].replace("issues/", "");
        // console.log(res);
        let targetUrl = baseUrl + "repos/" + self.owner + "/" + self.repo + "/issues/" + res;
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.get( targetUrl, config)
        .then(function (response) {
            // console.log(response.data.title);
            self.title = response.data.title;
            self.body = response.data.body;
            self.transform( self.body );
            self.loaded = true;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        transform: function( mdText ) {
            let self = this;
            // console.log(marked(mdText));
            self.body = marked(mdText);
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>



</style>

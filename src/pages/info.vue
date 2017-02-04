<template>
    <div id = "HomeList" >
        <h1>{{title}}</h1>
        <p>{{body}}</p>
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"

let baseUrl = "https://api.github.com/";

export default {
    name: "HomeList",
    data () {
        return {
            title: "",
            body: "",
            // repo: "dev-blog",
            // owner: "zhouzihanntu",
            repo: "gold-miner",
            owner: "xitu",
        }
    },
    mounted: function() {
        let self = this;
        let hh = location.href;
        console.log(hh);
        let reg = /(issues\/=?\d*)/g;
        let res = reg.exec(hh)[0].replace("issues/", "");
        console.log(res);
        let targetUrl = baseUrl + "repos/" + self.owner + "/" + self.repo + "/issues/" + res;
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.get( targetUrl, config)
        .then(function (response) {
            console.log(response.data.title);
            self.title = response.data.title;
            self.body = response.data.body;
            // self.loaded = true;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        // directTo: function( index ) {
        //     console.log( index );
        // }
        // test: function() {
        //     alert(22);
        // }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

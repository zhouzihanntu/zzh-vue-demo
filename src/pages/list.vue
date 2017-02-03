<template>
    <div id = "HomeList" >
        <ul v-if = "loaded">
            <li v-for = "( issue, index ) in issues" v-on:click = "directTo( index )">
                <div class="listItem">
                    <span v-text = "issue.title"></span>
                </div>
            </li>
        </ul>
        <div id="loading" v-if = "!loaded">
            <h1>loading</h1>
        </div>
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"
let baseUrl = "https://api.github.com/";

export default {
    name: "HomeList",
    data () {
        return {
            loaded: false,
            // repo: "dev-blog",
            // owner: "zhouzihanntu",
            repo: "gold-miner",
            owner: "xitu",
            issues: [],
            pageArray: [],
            currentList: []
        }
    },
    mounted: function() {
        let self = this;
        let targetUrl = baseUrl + "repos/" + self.owner + "/" + self.repo + "/issues";
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.get( targetUrl, config)
        .then(function (response) {
            console.log(response.data);
            self.issues = response.data;
            self.loaded = true;
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        directTo: function( index ) {
            console.log( index );
        }
        // test: function() {
        //     alert(22);
        // }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
    list-style-type: none;
    /*padding: 30px 0;*/
}

li {
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #1aad19;
}

li:hover {
    cursor: pointer;
    box-shadow: 2px 2px 0px #1aad19;
}

a:hover {
    color: red;
}

.listItem {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 660px;
}
</style>

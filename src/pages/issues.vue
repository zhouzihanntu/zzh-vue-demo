<template>
    <div id = "issueList" >
        <ul v-if = "loaded">
            <li v-for = "( issue, index ) in issues" v-on:click = "directTo( issue.number )">
                <div class="listItem">
                    <span v-text = "issue.title"></span>
                </div>
            </li>
        </ul>
        <div id="loading" v-if = "!loaded">
            <h1>loading</h1>
            <h1 v-if = "beyondLimit">Retry after {{resetTime}}</h1>
        </div>
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"

let baseUrl = "https://api.github.com/";

export default {
    data () {
        return {
            loaded: false,
            repo: "zzh-vue-demo",
            owner: "zhouzihanntu",
            // repo: "gold-miner",
            // owner: "xitu",
            issues: [],
            pageArray: [],
            currentList: [],
            beyondLimit: false,
            resetTime: ""
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
            console.log( response.headers['x-ratelimit-reset'], 'x-ratelimit-reset' );
            console.log(response.data, 'response.data');
            if (response.status == 200 ) {
                self.issues = response.data;
                self.loaded = true;
            
            } else if (response.status == 403) {
                self.resetTime = response.headers['x-ratelimit-reset'].toLocaleString();
            
                console.log(self.resetTime);
            }
            let hhh = response.headers['x-ratelimit-reset'];

            self.resetTime = new Date( hhh * 1000 ).toLocaleString();
            console.log(self.resetTime, 'resetTime');
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        directTo: function( index ) {
            console.log( index );
            location.href = "/issues/" + index;
        }
    }
}


</script>

<style rel="stylesheet/less" lang="less" scoped>

#issueList {
    padding: 30px;
    ul {
        list-style-type: none;
    }
    li {
        padding: 0 30px;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #1aad19;
        .listItem {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 660px;
        }
    }

    li:hover {
        cursor: pointer;
        box-shadow: 2px 2px 2px #1aad19;
    }

    a:hover {
        color: red;
    }
}

</style>

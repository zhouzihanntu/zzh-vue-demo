<template>
    <div id = "HomeList">
        <ul>
            <li v-for = "( issue, index ) in issues">
                <div class="listItem">
                    <span v-text = "issue.title"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"
let baseUrl = "https://api.github.com/";

export default {
    name: "HomeList",
    data () {
        return {
            msg: "hhh",
            repo: "dev-blog",
            owner: "zhouzihanntu",
            issues: []
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
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
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
    padding: 30px;
}

li {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #1aad19;
}

a:hover {
    color: red;
}
</style>

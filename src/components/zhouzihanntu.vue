<template>
    <div id = "zhouzihanntu">
        <!-- <img src="./assets/img/avatar.png"> -->
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"

export default {
    name: "zhouzihanntu",
    data () {
        return {
            author: "Joint",
            github: "https://github.com/zhouzihanntu",
            issues: []
        }
    },
    mounted: function() {

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

</style>

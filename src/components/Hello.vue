<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!-- <button type="button" name="button" v-on:click="test"></button> -->
    </div>
</template>

<script>
import axios from "../assets/js/axios.js"
let baseUrl = "https://api.github.com/";

export default {
    name: 'hello',
    data () {
        return {
        msg: 'hhh'
        }
    },
    methods: {
        test: function() {
            alert(22);
            axios.get('/user', {
                params: {
                  ID: 12345
                }
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

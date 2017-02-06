<template>

    <div id="app">
        <div class="navigator">
            <div class="avatar">
                <img src="./assets/img/avatar.png">
            </div>
            <div class="navs">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/issues">Issues</router-link>
                <!-- <router-link to="/info">Go to info</router-link> -->
            </div>
        </div>

        <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
    </div>



</template>

<script>
// import HomeList from './components/HomeList'

export default {
  name: 'app',
  data() {
      return {
        //   hhh: 'ss'
      }
  },
  mounted: function() {

  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: #FFFFFF;
}

::-webkit-scrollbar {
    width: 0;
}

#HomeList {
    min-height: 800px;
    border: 1px solid #93A2AC;
}

#app {
    width: 720px;
    mar 0gin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 60px;
    overflow: hidden;
}

.navigator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    /*border-bottom: 1px dotted grey;*/
    background-color: #ffffff;
    box-shadow: 0px 2px 5px #c3c3c3;
    padding: 10px 30px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row-reverse;
    line-height: 45px;
}


.navigator .navs a {
    display: inline-block;
    padding: 0 10px;
    padding-bottom: 10px;
    height: 45px;
    text-decoration: none;
    color: #1aad19;
}

.navigator .navs a.router-link-active {
    /*border-bottom: 2px solid;*/
    box-shadow: 0px 2px 3px;
}

.avatar {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    display: inline-block;
    float: right;
    overflow: hidden;
    margin-left: 10px;
}

.avatar img {
    width: 45px;
    height: 45px;
}
</style>

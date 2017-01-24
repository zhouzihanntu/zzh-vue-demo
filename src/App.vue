<template>

    <div id="app">
        <div class="avatar">
            <img src="./assets/img/avatar.png">
        </div>

        <!-- <HomeList></HomeList> -->

        <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
        </router-view>
    </div>



</template>

<script>
import HomeList from './components/HomeList'

export default {
  name: 'app',
  components: {
      HomeList
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

#HomeList {
    border: 1px solid #93A2AC;
}

#app {
    width: 70%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    overflow: hidden;
    position: fixed;
    top: 5%;
    right: 5%;
}

.avatar img {
    width: 100px;
    height: 100px;
}
</style>

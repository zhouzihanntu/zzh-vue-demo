<template>

    <div id="app">
        <div class="avatar">
            <img src="./assets/img/avatar.png">
        </div>

        <HomeList></HomeList>
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


#app {
    width: 70%;
    margin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    border: 1px solid #93A2AC;
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

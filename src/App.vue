<template>

    <div id="app">
        <div class="avatar">
            <img src="./assets/img/avatar.png">
        </div>
        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <router-link to="/list">Go to list</router-link>
            <router-link to="/">Go to index</router-link>
        </p>

        <!-- <HomeList></HomeList> -->

        <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
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
    width: 720px;
    mar 0gin: auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;
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

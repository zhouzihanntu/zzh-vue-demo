<style>

* {
    margin: 0;
    padding: 0;
}

body {
    color: #333;
    font-family: -apple-system,PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica Neue,sans-serif;
    text-rendering: optimizeLegibility;
    background-color: #FFFFFF;
}

a {
    text-decoration: none;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}

blockquote {
    margin: 1em 0;
    border-left: 4px solid #ddd;
    padding: 0 1em;
    color: #666;
}

::-webkit-scrollbar {
    width: 0;
}

#app {
    width: 900px;
    mar 0gin: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: auto;
    padding-top: 6em;
    padding-bottom: 3em;
    overflow: hidden;
}

#app img {
    max-width: 100%;
    max-height: 668px;
}

.navigator {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 960px;
    height: 45px;
    margin: auto;
    padding: 1em 2em;
    background-color: #FFFFFF;
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
    margin: 0 1.5em;
}

.avatar img {
    width: 45px;
    height: 45px;
}

.avatar .tooltip {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: red;
}

#issueInfo a {
    color: #259;
}

#issueInfo code {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: .8em;
    font-family: Menlo,Monaco,Consolas,Courier New,monospace;
    padding: .5em 1em;
    margin: 0;
    word-break: normal;
    display: block;
    color: #333;
    background: #f8f8f8;
}

</style>


<template>

    <div id="app">
        <div class="navigator">
            <div class="avatar" v-on:mouseover = "mouseOnAvatar">
                <img src="./assets/img/avatar.png">
                <div v-show = "showAvatarTip" class="tooltip">
                    Github
                </div>
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
          showAvatarTip: false,
          showTipTimer: ""
      }
  },
  mounted: function() {

  },
  methods: {
      mouseOnAvatar: function() {
          let self = this;
        //   self.showTipTimer = setTimeout
          self.showAvatarTip = true;
          if ( self.showTipTimer ) {
              clearTimeout ( self.showTipTimer );
          }
          self.showTipTimer = setTimeout ( function() {
              self.showAvatarTip = false;
              console.log(3);
          }, 3000 );
      }
  }
}
</script>

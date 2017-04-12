<template>
    <div id="app">
        <div class="navigator">
            <div class="avatar" v-on:click = "toGithub">
                <img src="./assets/img/avatar.png">
            </div>
            <div class="navs">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/issues">Issues</router-link>
            </div>
        </div>
        <div class="sideNavs">
            <side-navs v-for="item in sideItems" :item="item"></side-navs>
        </div>
        <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
    </div>

</template>

<script>

import store from './vuex/store'
import sideNavs from './components/side-navs'

export default {
  name: 'app',
  components: { sideNavs },
  store,
  data() {
      return {
          showAvatarTip: false,
          showTipTimer: "",
          sideItems: [
            {
                type: "github",
                icon: ""
            },
            {
                type: "wechat",
                icon: ""
            },
          ]
      }
  },

  mounted: function() {
    
  },
  methods: {
    toGithub: function() {
        location.href = "https://github.com/zhouzihanntu";
    }
  }
}
</script>


<style rel="stylesheet/less" lang="less">

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
        margin: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: auto;
        padding-top: 6em;
        padding-bottom: 3em;
        overflow: hidden;
        img {
            max-width: 100%;
            max-height: 668px;
        }
        .sideNavs {
            position: fixed;
            top: 150px;
            margin-left: -80px;
            ul {
                list-style: none;
                margin: 0;
                padding: 0.5em;
            }
        }
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
        .navs a {
            display: inline-block;
            padding: 0 10px;
            padding-bottom: 10px;
            height: 45px;
            text-decoration: none;
            color: #1aad19;
        }
        .navs a.router-link-active {
            box-shadow: 0px 4px 2px -2px;
        }
        .avatar {
            width: 45px;
            height: 45px;
            border-radius: 45px;
            display: inline-block;
            float: right;
            overflow: hidden;
            margin: 0 1.5em;
            box-shadow: 2px 2px 2px 0px #ccc;
            cursor: pointer;
            img {
                width: 45px;
                height: 45px;
            }
            .tooltip {
                width: 20px;
                height: 20px;
                position: absolute;
                background-color: red;
            }
        }
        .avatar:hover {
            /*box-shadow: 2px 2px #ccc;*/
        }
    }

    
    #issueInfo  {
        a{
            color: #259;
        }
        code {
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
    }


</style>
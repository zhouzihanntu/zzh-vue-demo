<template>
    <div id="app">
        <div class="navigator">
            <!-- <div class="avatar" v-on:mouseover = "mouseOnAvatar"> -->
            <div class="avatar" v-on:click = "toGithub">
                <img src="./assets/img/avatar.png">
                <!-- <div v-show = "showAvatarTip" class="tooltip">
                    Github
                </div> -->
            </div>
            <div class="navs">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/issues">Issues</router-link>
            </div>
        </div>

        <div class="sideNavs">
            <ul>
                <li>
                    <a href="https://github.com/zhouzihanntu/zzh-vue-demo" class="github">
                        <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28">
                            <path fill-rule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </a>
                </li>
                <!-- <li>
                    <span class="wechat"></span>
                </li> -->
            </ul>
        </div>

        <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
    </div>

</template>

<script>

import store from './vuex/store'

export default {
  name: 'app',
  store,
  data() {
      return {
          showAvatarTip: false,
          showTipTimer: "",
        //   sideNav: [
        //       {
        //           type: "github",
        //           icon: ""
        //       }
        //   ]
      }
  },

  mounted: function() {
    
  },
  methods: {
    //   mouseOnAvatar: function() {
    //       let self = this;
    //       self.showAvatarTip = true;
    //       if ( self.showTipTimer ) {
    //           clearTimeout ( self.showTipTimer );
    //       }
    //       self.showTipTimer = setTimeout ( function() {
    //           self.showAvatarTip = false;
    //           console.log(3);
    //       }, 3000 );
    //   }
    toGithub: function() {
        location.href = "https://github.com/zhouzihanntu";
    }
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>

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
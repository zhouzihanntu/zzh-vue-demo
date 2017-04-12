<template>
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
</template>

<script>
    export default {
        name: "navigator"
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    
</style>
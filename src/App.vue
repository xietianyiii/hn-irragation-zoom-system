<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  @import "./assets/fontFamily/font.css";
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: SourceHanSansCN, PingFang SC, "Microsoft YaHei" !important;
  }

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* font-family: SourceHanSansSC,PingFang SC,"Microsoft YaHei"!important; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    color: #000
  }
</style>
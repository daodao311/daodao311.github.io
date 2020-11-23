<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  //   // if (this._isMobile()) {
  //   //   this.$router.replace('/m_index');
  //   // } else {
  //   //   this.$router.replace('/index');
  //   // }
  },
  methods: {
  //   // 判断移动端
  //   // _isMobile() {
  //   //   let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  //   //   return flag;
  //   }
  }
}
</script>

<style>
#app {
  
}
</style>

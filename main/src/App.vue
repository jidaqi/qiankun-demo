<template>
  <div id="#app">
    <div class="top">
      <span class="title">Nativex</span>
      <button @click="router('/')">admin-test</button>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!-- <div id="yourContainer1" class="container"></div>
      <div id="yourContainer2"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    router(path) {
      console.log(this.$router)
      this.$router.push(path)
    }
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.app {
  position: relative;
}
.top {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  height: 60px;
  width: 100%;
  background-color: #000;
  box-shadow: 2px 2px 10px #666;
  transition: 0.3s;
}
.title {
  margin: 0 20px;
  font-size: 40px;
  color:azure;
}
button {
  border: 0;
  width: 120px;
  height: 60px;
  outline: none;
  font-size: 100%;
  background-color: black;
  color: aliceblue;
  transition: 0.3s;
}
button:hover {
  /* background-color: aliceblue; */
  /* color: #000; */
  transition: 0.3s;
  border-bottom: solid 2px #fff;
}
.container {
  height: 100%;
}
</style>

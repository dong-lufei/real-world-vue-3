<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'EventList'}">活动列表</router-link>|
      <router-link :to="{name:'EventCreate'}">创建一个活动</router-link>|
      <router-link :to="{name:'About'}">关于页</router-link>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>

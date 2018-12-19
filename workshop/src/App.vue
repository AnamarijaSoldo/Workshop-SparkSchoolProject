<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>  |
      <router-link to ="/workshop">Workshops</router-link>  |
      <router-link to ="/instructor">Instructors</router-link>  |
      <router-link to ="/student">Students</router-link>  |
      <router-link to ="/subject">Subjects</router-link>  |
      <router-link to ="/subjectMaterial">Subject material</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app'
};
</script>
<style lang="scss">
html, body {
  background: #404040;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #0476f6;
    &.router-link-exact-active {
      color: #e74c3c;
    }
  }
}
</style>

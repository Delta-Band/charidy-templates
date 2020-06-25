<template>
  <div id="app">
    <v-app>
      <div v-if="$router.currentRoute.name === 'my-campaignes'" class="app-bar"> </div>
      <div id="app-content">
        <router-view />
      </div>
    </v-app>Î  
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;

  &::v-deep {
    .v-application--wrap {
      display: flex;
      flex-direction: column;
    }
  }
}

.app-bar {
  z-index: 1;
  background: white;
  height: 80px;
}

#app-content {
  width: 100vw;
  height: 100%;
  overflow: auto;
  background-color: rgb(238, 238, 238);
}
</style>

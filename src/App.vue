<template>
  <div id="app">
    <v-app>
      <router-view />
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
</style>

<template>
  <div id="app">

    <router-link id="logo-button" to="/">
      <button id="logo"> <img src="resources/cocktail-icon.png"></button>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import DropDown from "./components/DropDown.vue"
export default {
  name: "app",
  components: { DropDown }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

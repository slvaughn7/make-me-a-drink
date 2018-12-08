<template>
  <div id="app">
 <DropDown/> 
 <Index/>
 

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DropDown from "./components/DropDown.vue"
import Index from "./components/Index.vue"

export default {
  name: "app",
  components:{
    DropDown, Index 
  }
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

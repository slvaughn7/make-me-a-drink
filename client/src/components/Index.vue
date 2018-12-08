<template>
  
  <div>
  <button name="logo" onclick="homepage()"><img src="resources/cocktail-icon.png"></button>
  <button name:logo v-on:click="'http://localhost:8080/'">Drink</button>   
  </div>
 </template>

 <script>
export default {
  name: "Index",
  props: {
    msg: String
  }
};
</script>


 
 
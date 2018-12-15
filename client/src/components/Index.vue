<template>
  <div>
    <button name="logo" onclick="homepage()"><img src="resources/cocktail-icon.png"></button>
    <button name:logo v-on:click="'http://localhost:8080/'">Make Me A Drink!</button>
    <DropDown v-model="alcohol"/>
  </div>
 </template>

 <script>
 import DropDown from "./DropDown.vue"

export default {
  name: "Index",
  data: () => ({
    alcohol: undefined
  }),
  props: {
    msg: String
  },
  components: {
    DropDown
  }
};

</script>

<script>
  function makedrink (){
    window.location = 'http://localhost:8080/recipe';

  }

    function homepage (){
    window.location = 'http://localhost:8080/';

  }
</script>


 
 
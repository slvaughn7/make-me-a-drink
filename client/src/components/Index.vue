<template>
  <div>
    <button name="logo" onclick="homepage()"><img src="resources/cocktail-icon.png"></button>
]
<router-link v-bind:to="'/recipe/'+ alcohol">
    <button>Make Me A Drink!</button>
</router-link>
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


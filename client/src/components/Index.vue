
<template>
  <div page>
    <h1 id="header">
      Drink Recipes for the DIY Bartender
    </h1>

    <img 
      src="/resources/cocktailhero.png"
      style="transform: rotate(-15deg) translateX(50px) translateY(-50px);"/>

    <div id="select">
      <DropDown v-model="alcohol" />
    </div>
    
    <router-link id="navigate" v-if="alcohol" v-bind:to="'/recipelist/'+ alcohol">
    <button id="mix-button">
      Mix it <strong>UP</strong>
    </button>
    </router-link>
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

<style>
  [page] {
    margin: 20px;
    padding: 15px;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 2px 2px 15px rgba( 0, 0, 0, 0.3 );

    display: grid;
    margin-bottom: 200px;
    /* max-height: 450px; */

    grid-template-columns: 7fr 4fr;
    grid-template-rows: 100px 400px 70px;
    grid-template-areas:
      "header header"
      "drink select"
      "navigate navigate"
  }

  #header {
    grid-area: header;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }

  img {
    grid-area: drink;
  }

  #select {
    grid-area: select;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #navigate {
    grid-area: navigate;
  }

  #mix-button {
    border: 3px solid rgba(255, 255, 55, 1);
    border-radius: 5px;
    font-size: 1.25rem;

    font-family: Avenir;
    width: 100%;
    height: 100%;
  }

</style>

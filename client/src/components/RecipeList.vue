<template>
  <div>
    <h1 v-if="recipes.length == 0" id="no-recipes-header">
      Loading Recipes for <span v-text="$route.params[ 'id' ]"></span>
      <div id="loading-animation">
        <img src="/resources/shaker.gif"/>
      </div>
    </h1>

    <div id="recipe-list">
      <div v-for="recipe in recipes" class="recipe">
        <router-link v-bind:to="'/recipe/' + recipe.idDrink + '/' + recipe.strDrink">
        <h1>{{ recipe.strDrink }} </h1>
        <img v-bind:src="recipe.strDrinkThumb" v-bind:alt="recipe.strDrink">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "RecipeList",
    data: function () {
      return {
        recipes: [],
      }
    },
    methods: {
      returnDrinkInfo: async function (alcohol) {
        let response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
        )
        
        if( !response.data ) return
        this.recipes = (response.data.drinks)
      }
    },

    mounted() {
      let alcohol = this.$route.params[ 'id' ]
      this.returnDrinkInfo(alcohol); // or trigger by click or smth else
    }

  }
</script>

<style scoped>
  .recipe {
    font-family: Avenir, Helvetica, sans-serif;
    background-color: #fafafa;
    padding: 10px;
    margin: 10px;

    border-radius: 3px;
    box-shadow: 2px 2px 15px rgba( 0, 0, 0, 0.3 );
  }

  #loading-animation {
    max-width: 300px;
    background-color: #9ED45D;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 75px;
    border-radius: 50%;
    overflow: hidden;
  }

  #recipe-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  a {
    /* font-size: 3px; */
    text-decoration: none;
    font-size: .75rem;
    color: #222
  }

  .recipe img {
    max-width: 300px;
  }
</style>
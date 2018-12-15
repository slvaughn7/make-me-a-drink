<template>
  <div>

    <h1 id="recipes-header" v-if="recipes.length > 0">
      Recipes for <span v-text="$route.params[ 'id' ]"></span>
    </h1>
    <h1 v-else id="no-recipes-header">
      No recipes available for <span v-text="$route.params[ 'id' ]"></span>
    </h1>

    <div v-for="recipe in recipes" class="recipe">
      <h1>{{ recipe.strDrink }} </h1>
      <img v-bind:src="recipe.strDrinkThumb" v-bind:alt="recipe.strDrink">
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

</style>
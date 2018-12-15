<template>
  <div>
    <div v-if="recipes.length > 0">
      <h1>Recipes for <span v-text="$route.params[ 'id' ]"></span></h1>
    </div>
    <div v-else>
      <h1>No recipes available for <span v-text="$route.params[ 'id' ]"></span></h1>
    </div>
    <div v-for="recipe in recipes" class="recipe">
      <h1>{{ recipe.strDrink }} </h1>
      <img v-bind:src="recipe.strDrinkThumb" v-bind:alt="recipe.strDrink">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    //el: '#app',
    name: "Recipe",
    //props: {
    //drinkName: String,
    //drinkImage: ImageData, 
    //},
    data: function () {
      return {
        drinkName: '',
        drinkImage: '',
        drinkRecipe: '',
        recipes: [],
      }
    },
    methods: {
      returnDrinkInfo: async function (alcohol) {
        let response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
        )
        
        if( !response.data ) return
        
        console.log( response.data.drinks )
        this.recipes = (response.data.drinks)
        let drink = response.data.drinks

        this.drinkName = drink.strDrink
        this.drinkImage = drink.strDrinkThumb
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
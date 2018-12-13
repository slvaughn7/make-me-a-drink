<template>
<div>
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
    returnDrinkInfo: async function()  {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
      )

    this.recipes = (response.data.drinks)
    let drink = response.data.drinks

      this.drinkName = drink.strDrink
      this.drinkImage = drink.strDrinkThumb
      this.drinkRecipe = drink.strInstructions
    }
  },

   mounted() {
           this.returnDrinkInfo(); // or trigger by click or smth else
        }

}
</script>





<style scoped>

</style>


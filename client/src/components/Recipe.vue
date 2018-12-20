<template>
  <div page>
    <img id="drink-image" v-bind:src="image">

    <aside id="drink-ingredients">
      <ul style="text-align: left;">
        <li v-for="ingredient in ingredients">
          <span v-text="ingredient.ingredient"></span> <span v-if="ingredient.measure" v-text="', ' +ingredient.measure"></span>
        </li>
      </ul>
    </aside>

    <section id="drink-instructions" v-text="instructions"></section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Recipe",
    data: function () {
      return {
        drinkName: undefined,
        image: undefined,
        ingredients:[],
        instructions: undefined
      }
    },
    methods: {
      getRecipe: async function (id) {
        let response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        
        if( !response.data || !response.data.drinks || response.data.drinks.length == 0) return
        
        let drink = response.data.drinks[0]
        
        this.drinkName = drink.strDrink
        this.image = drink.strDrinkThumb
        this.instructions = drink.strInstructions
        this.ingredients = [
          { ingredient: drink.strIngredient1, measure: drink.strMeasure1 },
          { ingredient: drink.strIngredient2, measure: drink.strMeasure2 },
          { ingredient: drink.strIngredient3, measure: drink.strMeasure3 },
          { ingredient: drink.strIngredient4, measure: drink.strMeasure4 },
          { ingredient: drink.strIngredient5, measure: drink.strMeasure5 },
          { ingredient: drink.strIngredient6, measure: drink.strMeasure6 },
          { ingredient: drink.strIngredient7, measure: drink.strMeasure7 },
          { ingredient: drink.strIngredient8, measure: drink.strMeasure8 },
          { ingredient: drink.strIngredient9, measure: drink.strMeasure9 },
          { ingredient: drink.strIngredient10, measure: drink.strMeasure10 },
          { ingredient: drink.strIngredient11, measure: drink.strMeasure11 },
          { ingredient: drink.strIngredient12, measure: drink.strMeasure12 },
          { ingredient: drink.strIngredient13, measure: drink.strMeasure13 },
          { ingredient: drink.strIngredient14, measure: drink.strMeasure14 },
          { ingredient: drink.strIngredient15, measure: drink.strMeasure15 },

        ].filter( item => item.ingredient )
       }
    },

    mounted() {
      let id = this.$route.params[ 'id' ]
      this.getRecipe(id); // or trigger by click or smth else
    }

  }
</script>

<style scoped>
  [page] {
    display: grid;

    grid-template-columns: 2fr 1fr;
    grid-template-rows: 3fr 1fr;
    grid-template-areas:
      "image ingredients"
      "instructions instructions";
  }

  #drink-image {
    grid-area: image;
    max-width: 300px;
  }

  #drink-ingredients {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-area: ingredients;
  }

  #drink-instructions {
    margin-top: 15px;
    grid-area: instructions;
  }
</style>
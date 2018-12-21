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

    <section id="buttons">
      <button id="back-button" v-on:click="goBack()">
        Back to Search Results
      </button>
    </section>
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
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },
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
  #back-button {
    border: 3px solid rgba(255, 255, 55, 1);
    border-radius: 5px;
    font-size: 1.25rem;

    font-family: Avenir;
    width: 100%;
    height: 100%;

    box-shadow: 2px 2px 10px rgba( 0, 0, 0, 0.15 );

    transition-duration: 0.3s;
    cursor: pointer;
  }

  #back-button:hover {
    box-shadow: 
      2px 2px 25px rgba(0, 0, 0, 0.13),
      2px 2px 25px rgba(255, 255, 55, 1);
  }

  @media(max-width:500px) {
    [page] {
      display: flex !important;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
    }
  }
  
  [page] {
    display: grid;

    margin: 20px;
    padding: 15px;
    background-color: #FAFAFA;
    border-radius: 3px;
    box-shadow: 2px 2px 15px rgba( 0, 0, 0, 0.3 );

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr .5fr;
    grid-template-areas:
      "image ingredients"
      "instructions instructions"
      "buttons buttons";
  }

  #buttons {
    grid-area: buttons;
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
<template>
  
   


  <div>
    <select>
        <option>Make a selection</option>
        <option value="Rum">Rum</option>
        <option value="Whiskey">Whiskey</option>
        <option value="Vodka">Vodka</option>
        <option value="Tequila">Tequila</option>
        <option value="Gin">Gin</option>

      </select>

  <button name="logo" onclick="window.location.href='http://localhost:8080'"><img src="resources/cocktail-icon.png"></button>
  <button name="makeDrink" onclick="window.location.href='http://localhost:8080/recipes'">Make Me A Drink</button>  
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

<script>
  function makedrink (){
    window.location = 'http://localhost:8080/recipe';

  }

    function homepage (){
    window.location = 'http://localhost:8080/';

  }
</script>


 
 
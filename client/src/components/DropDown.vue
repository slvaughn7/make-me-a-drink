<template>
  <select>
    <option>Make a selection</option>
    <option value="Rum">Rum</option>
    <option value="Whiskey">Whiskey</option>
    <option value="Vodka">Vodka</option>
    <option value="Tequila">Tequila</option>
    <option value="Gin">Gin</option>

  </select>
</template>

<script>
export default {
  name: "DropDown",
  props: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

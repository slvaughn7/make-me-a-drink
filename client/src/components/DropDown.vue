<template>
  <div>
    Make Me a Drink with: 
    <select v-model="alcohol" v-on:change="onInput($event)">
      <option selected disabled>Make a selection</option>
      <option value="Rum">Rum</option>
      <option value="Whiskey">Whiskey</option>
      <option value="Vodka">Vodka</option>
      <option value="Tequila">Tequila</option>
      <option value="Gin">Gin</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  prop: ['value'],
  
  data() {
    return {
      alcohol: this.value
    }
  },

  methods:{
    onInput(event) { 
      return this.$emit('input', this.alcohol)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  border: solid 2px #222;
  font-size: 1.25rem;
}
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

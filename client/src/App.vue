<template>
  <div id="my-app">
    <nav>
      <router-link id="logo-button" to="/">
        <button id="logo"> <img src="resources/martini.png"></button>
      </router-link>
      <span id="nav-header">
        &nbsp;{{ getHeader() }}
      </span>
    </nav>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import DropDown from "./components/DropDown.vue"
export default {
  name: "app",
  methods: {
    getHeader() {
      let path = this.$route.path
      let segments = path.split( '/' )

      switch( segments[1] ) {
        case '': return 'Make me a Drink!'
        case 'recipelist': return `Recipes for ${ segments[ 2 ] }`
        case 'recipe': return segments[ 3 ]

        default: return segments.join( '-' )
      }
    }
  },
  components: { DropDown }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Lobster');

* {
  max-width: 100%;
  box-sizing: border-box;
}

nav {
  background-color: #333;
  display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  font-family: Lobster;
  font-size: 2.75rem;
  color: #FAFAFA;
}

#logo {
  background-color: transparent;
  border: none;
  max-width: 80px;
  max-height: 80px;
  padding: 7px;

  cursor: pointer;
}

#nav-header {
  text-align: center;
  flex: 1;
}

main {
  margin: auto;
  margin-top: 20px;
  width: 90vw;

  display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

  background-color: rgba(255, 255, 55, 0.80);
  min-height: 100px;
}

#my-app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-attachment: fixed;
  background-image: url( '/resources/fancy-cushion.png' );
  /* background-repeat: repeat; */
  background-size: 800px;
  min-height: 100vh;
  /* max-height: 100vh; */
  /* overflow: hidden; */
}
</style>

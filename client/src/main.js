import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Index from "./components/Index.vue";
import RecipeList from "./components/RecipeList.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Index },
  //{ path: "/viewRecipes/:ingredient", component:  },

  { path: "/recipelist/:id", component: RecipeList }
]

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")



// function makedrink (){
//   window.location = 'http://localhost:8080/recipe';

// }

//   function homepage (){
//   window.location = 'http://localhost:8080/';

// }


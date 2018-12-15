import { shallowMount } from "@vue/test-utils";
import Recipe from "@/components/Recipe.vue";

describe(
  "Recipe Page", 
  () => {
    it(
      '',
      () => {
        // stubbed test, will complete in the future
        const validDrinks = [ 'rum', 'whiskey', 'tequila', 'vodka', 'gin' ]
        
        let element = shallowMount(Recipe, {
          mocks: {
            $route: { params: { id: 'gin' } }
          }
        })
      });
  });

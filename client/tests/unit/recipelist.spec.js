jest.mock( 'axios' ); import axios from 'axios'

import { shallowMount } from "@vue/test-utils";
import RecipeList from "@/components/RecipeList.vue";

describe(
  "Recipe List Page", 
  () => {
    it(
      'should render a no-items header when there are not drinks',
      async () => {
        let drink = 'kim'
        let axios_spy = jest.spyOn(axios, 'get')

        axios_spy.mockImplementationOnce(async () => ({
          data: null
        }))

        let element = shallowMount(
          RecipeList,
          { mocks: { $route: { params: { id: drink } }} }
        )
        
        await new Promise(resolve => setTimeout(resolve, 500))

        expect(element.contains( '#recipes-header' )).toBeFalsy()
        expect(element.contains( '#no-recipes-header' )).toBeTruthy()
      })
  });

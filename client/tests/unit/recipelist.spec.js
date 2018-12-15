jest.mock( 'axios' ); import axios from 'axios'

import { shallowMount } from "@vue/test-utils";
import RecipeList from "@/components/RecipeList.vue";

describe(
  "Recipe Page", 
  () => {

    it(
      'should render a header when there are drinks',
      async () => {
        let drink = 'gin'
        let axios_spy = jest.spyOn(axios, 'get')

        axios_spy.mockImplementationOnce(async () => ({
          data: {
            drinks: [
              { strDrink: 'some-drink', strDrinkThumb: 'localhost' }
            ]
          }
        }))

        let element = shallowMount(
          RecipeList,
          { mocks: { $route: { params: { id: drink } }} }
        )
        
        await new Promise(resolve => setTimeout(resolve, 500))

        expect(element.contains( '#recipes-header' )).toBeTruthy()
      })

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

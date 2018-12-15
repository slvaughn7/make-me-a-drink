jest.mock('axios');
import axios from 'axios'

import {
  shallowMount
} from "@vue/test-utils";
import Recipe from "@/components/Recipe.vue";

describe(
  "Recipe Page",
  () => {
    const configureAxiosSpy = () => {
      let axios_spy = jest.spyOn(axios, 'get')

      axios_spy.mockImplementationOnce(async () => ({
        data: {
          drinks: [{
            strDrink: 'some-drink',
            strDrinkThumb: 'localhost',
            strInstructions: 'some-instructions'
          }]
        }
      }))
      return axios_spy
    }

    const createNewComponent = (id) => shallowMount(
      Recipe, {
        mocks: {
          $route: {
            params: {
              id
            }
          }
        }
      }
    )


    it(
      'should have drink name in the header',
      async () => {
        let id = 13060
        configureAxiosSpy()

        let element = createNewComponent(id)

        await new Promise(resolve => setTimeout(resolve, 500))

        expect(element.contains('#drink-name')).toBeTruthy()
        expect(element.find('#drink-name').text()).toEqual('some-drink')
      })


    it(
      'should have drink image',
      async () => {
        let id = 13060
        configureAxiosSpy()

        let element = createNewComponent(id)

        await new Promise(resolve => setTimeout(resolve, 500))

        let image = element.find('#drink-image')
        expect(image).toBeTruthy()
        expect(image.attributes()["src"]).toBeTruthy()
        expect(image.attributes()["src"]).toEqual("localhost")


      })


    it(
      'should have drink instructions',
      async () => {
        let id = 13060
        configureAxiosSpy()

        let element = createNewComponent(id)

        await new Promise(resolve => setTimeout(resolve, 500))

        let instructions = element.find('#drink-instructions')
        expect(instructions).toBeTruthy()
        expect(instructions.text()).toEqual("some-instructions")


      })



  });
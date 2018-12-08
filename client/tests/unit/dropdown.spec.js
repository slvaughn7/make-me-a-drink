import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import DropDown from "@/components/DropDown.vue";

describe('DropDown', () => {
    // Now mount the component and you have the wrapper
    const wrapper = shallowMount(DropDown)
    
    test(
        'should contain a select element',
        () => {
            expect(wrapper.contains( 'select' )).toBe(true)
        })
    
    //SAMPLE TEST LAYOUT FOR DROPDOWN
    
    test(
        'should create option tags for every string in props.options',
         () => {
            // const options = [ 'Vodka', 'Rum', 'Whiskey','Tequila', 'Gin' ]

            
             expect(wrapper.contains('option[value="Rum"]')).toBe(true)
             expect(wrapper.contains('option[value="Vodka"]')).toBe(true)
             expect(wrapper.contains('option[value="Whiskey"]')).toBe(true)
             expect(wrapper.contains('option[value="Gin"]')).toBe(true)
             expect(wrapper.contains('option[value="Tequila"]')).toBe(true)
             
         })

  })
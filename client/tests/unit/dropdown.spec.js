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
            const options = [ 'Vodka', 'Rum', 'Whiskey','Tequila', 'Gin' ]
            
            options.forEach(
                ( option ) => {
                    expect(wrapper.contains(`option[value="${ option }"]`)).toBe(true)
                })
         })

  })
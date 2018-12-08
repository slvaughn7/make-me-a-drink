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
    
    // SAMPLE TEST LAYOUT FOR DROPDOWN
    // test(
    //     'should create option tags for every string in props.options',
    //     () => {
    //         const options = [ 'a', 'b', 'c' ]

    //         ...

    //         <select>
    //             <option disabled>Gender</option>
    //             <option value="male">Male</option>
    //             <option value="f">Female</option>
    //         </select>

    //         expect(wrapper.contains('option[value=male]'))
    //     })

  })
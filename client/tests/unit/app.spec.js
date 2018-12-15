import { shallowMount } from "@vue/test-utils";
//import HelloWorld from "@/components/HelloWorld.vue";
import app from "@/App.vue";

describe("App.vue", () => {
  it("drink logo click directs back to homepage", () => {
    let element = shallowMount(app)
    const link = element.find('#logo-button')
    expect(link.find("#logo")).toBeTruthy()
    expect(link.hasAttribute('to', '/'))
    
  });
});
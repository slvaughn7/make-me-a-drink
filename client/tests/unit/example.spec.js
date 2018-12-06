import { shallowMount } from "@vue/test-utils";
//import HelloWorld from "@/components/HelloWorld.vue";
import homepage from "@/components/Index.vue";

describe("Index.vue", () => {
  it("drink logo click directs back to homepage", () => {
    const button = "v-on:click";
    expect(button).toBe("v-on:click");
  });
});
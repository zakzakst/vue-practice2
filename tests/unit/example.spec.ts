import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

describe('Home.vue', () => {
  it('renders text when passed', () => {
    const text = 'ホーム';
    const wrapper = shallowMount(HomeView);
    expect(wrapper.text()).toMatch(text);
  });
});

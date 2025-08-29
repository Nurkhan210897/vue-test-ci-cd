import { mount } from '@vue/test-utils'
import App from './App.vue'
describe('App.vue', () => {
  it('передаёт правильный msg в HelloWorld', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Vite + Vue')
  })
})
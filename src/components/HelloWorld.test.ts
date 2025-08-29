import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('рендерит props.msg', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Привет Vite + Vue!' } })
    expect(wrapper.text()).toContain('Привет Vite + Vue!')
  })
})

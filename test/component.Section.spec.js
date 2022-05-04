import { mount } from '@vue/test-utils'
import Section from '~/components/Section.vue'

describe('Section', () => {
  test('is a Vue instance without background image', () => {
    const wrapper = mount(Section)
    expect(wrapper.vm).toBeTruthy()
  }),
  test('is a Vue instance with background image', () => {
    const wrapper = mount(Section, {
      propsData: {
        bgImage: 'abc123'
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

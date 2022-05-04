import { mount } from '@vue/test-utils'
import TheFooter from '~/components/TheFooter.vue'

jest.mock('~/components/Social/Icon.vue', () => 'div')

describe('TheFooter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheFooter)
    expect(wrapper.vm).toBeTruthy()
  })
})

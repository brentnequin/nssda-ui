import { mount } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'

jest.mock('@/components/SocialIcon.vue', () => 'div')

describe('TheHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper.vm).toBeTruthy()
  })
})

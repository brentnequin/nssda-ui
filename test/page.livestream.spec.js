import { mount } from '@vue/test-utils'
import livestream from '~/pages/livestream/index.vue'

describe('livestream', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(livestream, {
      mocks: {
        $config: {
          youtubeApiKey: 'abc123'
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})

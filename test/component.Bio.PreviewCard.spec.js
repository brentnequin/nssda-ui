import { mount } from '@vue/test-utils'
import PreviewCard from '~/components/Bio/PreviewCard.vue'
import { expect, test } from '@jest/globals'

describe('PreviewCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(PreviewCard)
    expect(wrapper.vm).toBeTruthy()
  })

  test('truncateText()', () => {

    const text = '#'.repeat(10)

		const wrapper = mount(PreviewCard)

		expect(wrapper.vm.truncateText(text, length=5)).toEqual('#'.repeat(2) + '...')
    expect(wrapper.vm.truncateText(text)).toEqual('#'.repeat(10) + '...')
  })
})

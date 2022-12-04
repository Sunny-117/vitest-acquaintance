import { test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hei from './Hei'
test('should hei', () => {
    const wrapper = mount(Hei)
    expect(wrapper.text()).toContain('Hei')
})
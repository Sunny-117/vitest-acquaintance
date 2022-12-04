import { test, expect } from 'vitest'
import Hello from './HelloWorld.vue'
import { mount } from '@vue/test-utils'
test('hello', () => {
  // console.log(Hello)
  const wrapper = mount(Hello)
  expect(wrapper.text()).toContain('Hello')

  // 验证组件的方法：input output api secondjs
})
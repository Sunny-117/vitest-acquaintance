import { test, expect } from 'vitest'
import Hello from './HelloWorld.vue'
import { mount } from '@vue/test-utils'
test('hello', () => {
  // console.log(Hello)
  mount(Hello)
})
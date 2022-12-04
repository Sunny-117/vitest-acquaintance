
// import { test, expect } from 'vitest'
import { addTestImport } from '../src/add'
import HelloWord from '../src/components/HelloWorld.vue'// 需要在tsconfig.json里面配置 
test('hello', () => {
    expect(1 + 1).toBe(2)
})
test('add', () => {
    expect(addTestImport(1, 1)).toBe(2)
})
test('vue', () => {
    console.log(HelloWord)
})
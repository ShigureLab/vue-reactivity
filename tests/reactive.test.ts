import { test, expect } from 'vitest'
import { reactive } from '../src'

test('test reactive', () => {
  const target = {
    name: 'foo',
    age: 10,
    friend: {
      name: 'bar',
      age: 11,
    },
  }

  const proxy = reactive(target)
  console.log(proxy)
  proxy.friend.name = 'baz'
  expect(target.friend.name).toBe('baz')
})

function sum(a: number, b: number) {
  return a + b
}

test('should return 3 when pass in 1,2', () => {
  expect(sum(1, 3)).toBe(4)
})

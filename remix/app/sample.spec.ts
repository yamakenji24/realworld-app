const add = (x: number, y: number) => x + y;

describe('sample test', () => {
  const sample = add(1, 2);
  test('should be 3', () => {
    expect(sample).toBe(3);
  });
});

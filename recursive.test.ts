function reverse(input: string) {
  // basecase
  if (input.length === 1) return input;

  return reverse(input.at(-1)) + reverse(input.slice(0, -1));
}

describe('reverse', () => {
  it('should reverse', () => {
    expect(reverse('awesome')).toBe('emosewa');
    expect(reverse('rithmschool')).toBe('loohcsmhtir');
  });
});

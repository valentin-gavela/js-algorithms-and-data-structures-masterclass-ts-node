function reverse(input: string) {
  // basecase
  if (input.length === 1) return input;

  return reverse(input.slice(-1)) + reverse(input.slice(0, -1));
}

describe('reverse', () => {
  it('should reverse', () => {
    expect(reverse('awesome')).toBe('emosewa');
    expect(reverse('rithmschool')).toBe('loohcsmhtir');
  });
});

// ------

function isPalindrome(input: string) {
  // basecase
  if (input.length <= 1) {
    return true;
  }

  const isEqual = input[0] === input.slice(-1);
  if (isEqual) {
    isPalindrome(input.slice(1, -1));

    return true;
  }

  return false;
}

describe('isPalindrome', () => {
  it('should returns correct result', () => {
    expect(isPalindrome('tacocat')).toBe(true);
    expect(isPalindrome('awesome')).toBe(false);
    expect(isPalindrome('foobar')).toBe(false);
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true);
    expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false);
    expect(isPalindrome('awesome')).toBe(false);
  });
});

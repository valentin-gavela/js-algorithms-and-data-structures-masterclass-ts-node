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

// ----------
const isOdd = (val: number) => val % 2 !== 0;

function someRecursive(nums: number[], fn: (...args: any) => boolean) {
  // basecase
  if (nums.length === 0) return false;

  const [numToTest, ...rest] = nums;

  if (fn(numToTest)) return true;

  return someRecursive(rest, fn);
}

describe('someRecursive', () => {
  it('should returns true if the callback fn returns true', () => {
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
    expect(someRecursive([4, 6, 8, 9], isOdd)).toBe(true);
    expect(someRecursive([4, 6, 8], isOdd)).toBe(false);
    expect(someRecursive([4, 6, 8], (val) => val > 10)).toBe(false);
  });
});

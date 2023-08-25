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

// TODO flatten
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function linearSearch(arr: string | number[], itemToFind: string | number) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === itemToFind) return i;
  }

  return -1;
}

describe('linearSearch', () => {
  it('should returns expected index', () => {
    expect(linearSearch([3, 1, 22, 45, 66], 66)).toBe(4);
    expect(linearSearch([3, 1, 22, 45, 66], 23)).toBe(-1);
  });
});

/**
* Find 10
[1,2,3,4,5,6,7,8,9,10,11,12]
pointer = Math.ceil(length/2)  => 7
item[7] => its equal?
item[7] => 7 isBigger? 
yes => go to left 
no => go to right

going to right
pointer = Math.ceil(pointer - Math.ceil(arr.length - pointer)/2) => 10
                       7                    12          7         
or maybe Math.ceil(pointer*1.5)
                    
going to left
pointer = pointer / 2
                      
* 
*/
function binarySearch(arr: number[], itemToFind: number) {
  let pointer = Math.floor(arr.length / 2);

  for (var i = 0; i < arr.length; i++) {
    const num = arr[pointer];
    if (itemToFind === num) return pointer;
    if (itemToFind > num) {
      pointer = Math.floor(pointer * 1.5);
    } else {
      pointer = Math.floor(pointer / 2);
    }
  }

  return -1;
}

describe('binarySearch', () => {
  it('should find the numbers', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        10
      )
    ).toBe(2);

    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        95
      )
    ).toBe(16);

    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        100
      )
    ).toBe(-1);
  });
});

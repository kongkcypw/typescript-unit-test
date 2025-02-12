import { reverseArray } from "../src/reverse";

describe('reverse array function', () => {
it('should reverse array correctly', () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    const result = reverseArray(array);
    expect(result).toEqual(expected);
  });
})
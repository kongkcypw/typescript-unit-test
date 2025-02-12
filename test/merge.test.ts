import { merge } from "../src/merge";

describe('merge array function', () => {
  it('should merge three arrays into one sorted array correctly', () => {
    const collection1 = [1, 2, 3];
    const collection2 = [4, 5, 6];
    const collection3 = [9, 8, 7]; 
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
  it('should merge empty arrays correctly', () => {
    // All empty
    expect(merge([], [], [])).toEqual([]);
    // One empty
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [1, 2, 3], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [3, 2, 1])).toEqual([1, 2, 3]);
    // Two empty
    expect(merge([], [1, 2, 3], [3, 2, 1])).toEqual([1, 1, 2, 2, 3, 3]);
    expect(merge([1, 2, 3], [], [3, 2, 1])).toEqual([1, 1, 2, 2, 3, 3]);
    expect(merge([1, 2, 3], [1, 2, 3], [])).toEqual([1, 1, 2, 2, 3, 3]);
  });
  it('should merge arrays with duplicate numbers correctly', () => {
    const collection1 = [1, 2, 3];
    const collection2 = [1, 2, 4];
    const collection3 = [5, 4, 3]; 
    const expected = [1, 1, 2, 2, 3, 3, 4, 4, 5];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
  it('should merge arrays with negative numbers correctly', () => {
    const collection1 = [-3, -2, -1];
    const collection2 = [-6, -5, -4];
    const collection3 = [-7, -8, -9];    
    const expected = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
});

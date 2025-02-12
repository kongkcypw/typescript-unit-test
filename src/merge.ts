import { reverseArray } from "./reverse";

// collection_1, collection_2 (ascending)
// collection_3  (descending)

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
  const reversedCollection3 = reverseArray(collection3);
  const merged12 = mergeTwoSortedArrays(collection1, collection2);
  return mergeTwoSortedArrays(merged12, reversedCollection3);
}

function mergeTwoSortedArrays(nums1: number[], nums2: number[]): number[] {
  let m = nums1.length;
  let n = nums2.length;
  let mergedArray = new Array(m + n);
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      mergedArray[last] = nums1[m - 1];
      m -= 1;
    } else {
      mergedArray[last] = nums2[n - 1];
      n -= 1;
    }
    last -= 1;
  }

  while (m > 0) {
    mergedArray[last] = nums1[m - 1];
    m -= 1;
    last -= 1;
  }

  while (n > 0) {
    mergedArray[last] = nums2[n - 1];
    n -= 1;
    last -= 1;
  }

  return mergedArray;
}


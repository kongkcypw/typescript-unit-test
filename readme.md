# Typescript project with unit test
Typescript project for simple unit test using jest.

## Setup dependency

Install TypeScript and Jest as development dependencies

```bash
npm install --save-dev typescript jest ts-jest @types/jest
```

## Excute code and unit test

Execute the tests using Jest

```bash
npm test
```

## Core function
To complete the given task, I have created three core functions.
- merge: merges three arrays into one sorted (ascending) array.
- mergeTwoSortedArrays: Merges two sorted arrays (ascending) into a single sorted array.
- reverse: Reverses an array without using the built-in reverse() function, used for reverse descending to ascending.

## Test function
I have created two test file relate with core functions.
- merge.test.ts: This file contains unit tests for the merge function and have four different test cases.
    1) Standard merge test: Validates that merging two ascending arrays (collection1 and collection2) with a descending array (collection3).
    2) Empty arrays test: Check that function can handle cases where one or more input arrays are empty.
    3) Duplicate numbers test: Check that the function correctly handles arrays containing duplicate numbers.
    4) Negative numbers test: Check that the function properly handles arrays that include negative numbers.
- reverse.test.ts: This file contains only one test case, the purpose is check that function can reverse array correctly.
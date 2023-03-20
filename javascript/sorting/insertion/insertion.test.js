const insertionSort = require('./insertion');

describe('Insertion Sort', () => {
  it('Can sort an unsorted array', () => {
    const reversedArr = [20,18,12,8,5,-2];
    const sortFromRev = insertionSort(reversedArr);
    const mixedArr = [2, 5, 8, 3, 6, 9, 1, 4, 7];
    const sortMixed = insertionSort(mixedArr);
    const fewUniques = [5, 12, 7, 5, 5, 7];
    const sortFewUniques = insertionSort(fewUniques);

    expect(sortFromRev).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(sortMixed).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sortFewUniques).toEqual([5, 5, 5, 7, 7, 12]);
  });
});
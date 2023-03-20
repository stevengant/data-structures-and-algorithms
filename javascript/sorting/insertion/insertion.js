'use strict';

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while(j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const unsortedArr = [8,4,23,42,16,15];

console.log(insertionSort(unsortedArr));

module.exports = insertionSort;
# Class 27: Code Challenge

## Merge Sort

### Blog Notes

The `mergeSort` function takes an array as an input and uses the Divide and Conquer method to sort the unordered array - it recursively divides the array in half until it reaches the base case (where the array is equal to 1 or 0).

The `merge` function is then called to merge the two sorted halves back together.

The `merge` function takes two arrays (`left` and `right`) and creates a new array (`result`) to hold the sorted result.

The `merge` function compares the first elements of the two input arrays and adds the smaller of the two to the `result` array. 

This comparison process is repeated until one of the input arrays is empty. Once this is done, the remaining elements in the non-empty array are added to the `result` array.

The `result` array is then returned to the `mergeSort` function, which then returns the sorted array.

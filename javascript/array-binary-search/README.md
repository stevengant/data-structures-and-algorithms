# Binary Search of Sorted Array
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process
![Array Binary Search - whiteboard](/javascript/assets/array-binary-search-whiteboard.png)

## Approach & Efficiency
We first sorted our array, then used the Divide and Conquer method to find the given element in our array

Big O:
  Time: O(log N)
  Space: O(1)
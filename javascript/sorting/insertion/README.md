# Code Challenge: Class 26

## Insertion Sort

[W3Schools - JavaScript Sorting Algorithm](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php#:~:text=JavaScript%20Sorting%20Algorithm%3A%20Exercise%2D4%20with%20Solution&text=Insertion%20sort%20is%20a%20simple,%2C%20heapsort%2C%20or%20merge%20sort.)
Insertion Sort is a simple sorting algorithm that builds a final sorted array, one item at a time. Insertion Array is not efficient for sorting large lists of items.

Sample Array:
`[8,4,23,42,16,15]`

Let's take the above Sample Array and walk through the process of sorting it into numeric order, step by step.

**Pass One**
We will start by comparing the first position in the array (index 0) to the next position (index 1), checking to see which is smaller. Obviously, the number 8 is larger than 4, so we will swap values at index 0 and the current value at index 0 will be updated to 4 and the temp value will be updated to 8:

`[(8), 4, 23, 42, 16, 15]` ---> `[4, (8), 23, 42, 16, 15]`

**Pass Two**
Now we will compare values at index 1 (temp) to index 2. The number 8 is smaller than 23, so it essentially swaps with itself. Index 1 (8) becomes the new current value and index 2 (23) becomes the new temp value:

`[4, (8), 23, 42, 16, 15]` ---> `[4, 8, (23), 42, 16, 15]`

**Pass Three**
This step isn't quite as quick. Now we will compare temp (23) to the next index (and all the remaining positions) until we find the smallest number. We compare 23 to 42, 23 is smaller, so 23 remains at index 2 for now. Then we run into 16 - it is smaller, but not the smallest value. We then compare 23 to 15, which is the smallest number and the two positions will swap and 15 becomes the new temp:

`[4, 8, (23), 42, 16, 15]` ---> `[4, 8, (15), 42, 16, 23]`

**Pass Four**
Next, we compare our temp (15) to the remaining positions until we find the next smallest number, which is 16, which will swap postions with 42. Now our new temp is 16:

`[4, 8, (15), 42, 16, 23]` ---> `[4, 8, 15, (16), 42, 23]`

**Pass Five**
Now we compare 16 to the remaining positions to find that 23 is the next smallest number. 23 swaps positions with 42 and becomes the new temp (again):

`[4, 8, 15, (16), 42, 23]` ---> `[4, 8, 15, 16, (23), 42]`

**Pass Six**
You can kind of see where we are going with this now. We will now compare 23 with 42 and find that 42 is the next smallest number. 42 now becomes the new temp value:

`[4, 8, 15, 16, (23), 42]` ---> `[4, 8, 15, 16, 23, (42)]`

This is where we finally come to the desired outcome. The number 42 compares itself to itself and swaps places with itself, becoming the new current value and breaks out of the outer loop and returns our sorted array:

`[4, 8, 15, 16, 23, 42]`
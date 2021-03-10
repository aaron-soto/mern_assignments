function smallest(arr) {
let min = arr[0];
for (let element of arr) {
if (element < min) {
min = element;
}
}
return min;
}
smallest([2, 5, 6, 12, 14, 28, 37, 41, 44, 45]);

// In the above algorithm we will have to look through all 10 items to find the smallest value. As this is the same as the length of the array, it can be said that the algorithm took "N" number of operations, so we would say this algorithm runs in O( N ) time.

// If we were told that the array will always be sorted in ascending order, this algorithm could be rewritten to the following.

function smallest(sortedArr) {
return sortedArray[0];
}
smallest([2, 5, 6, 12, 14, 28, 37, 41, 44, 45]);

![image](\assets\img\big_o.png)

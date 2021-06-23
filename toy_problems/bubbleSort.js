// Takes an integer array and bubble sorts them
// smallest values bubble to front
var bubbleSort = function(array) {
  // base case: array index checking goes to last index
  // recursive case: swap smaller items forward and reattempt

  let index = 0;
  while(index < array.length) {
    let nextIndex = index + 1
    if(nextIndex < array.length) {
      if(array[index] < array[nextIndex]){
        index++
      } else {
        console.log(array)
        let numHolder = array[index]
        array[index] = array[nextIndex]
        array[nextIndex] = numHolder
        return bubbleSort(array)
      }
    } else {
      // If ref out of bounds, index is the end of the array
      // index at end of array if passed
      return array
    }
  }
};

console.log(bubbleSort([4, 1, 3, 2]))
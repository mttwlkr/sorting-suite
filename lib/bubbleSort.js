let array = [5, 4, 3, 2, 1];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
  }
  return array;
}

bubbleSort(array)

module.exports = bubbleSort;
let array = [5, 4, 3, 2, 1];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let midIndex = Math.ceil(array.length / 2);
    let rightSide = array.slice(midIndex);
    let leftSide = array.slice(0, midIndex);
    return merge(mergeSort(rightSide), mergeSort(leftSide))
  }
}

function merge(rightSide, leftSide) {
  let sortedArray = [];
  let rightIndex = 0;
  let leftIndex = 0;
  while (rightIndex < rightSide.length && leftIndex < leftSide.length) {
    if (rightSide[rightIndex] < leftSide[leftIndex]) {
      sortedArray.push(rightSide[rightIndex])
      rightIndex++;
    } else {
      sortedArray.push(leftSide[leftIndex])
      leftIndex++;
    }
  }
  return sortedArray.concat(leftSide.slice(leftIndex)).concat(rightSide.slice(rightIndex))
}

mergeSort(array);

module.exports = mergeSort;
import { expect } from 'chai';
const quickSort = require('../lib/quickSort')

describe('quickSort', () => {
  let array;

  function validateArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1] && i < array.length - 1) {
        return false;
      } else {
        return true;
      }
    }
  }

  it('should be a function', () => {
    expect(quickSort).to.be.a('function');
  })

  it('should sort small, numeric arrays', () => {
    array = [];
    array = [5, 3, 2, 10, 1, 9];
    let sortedArray = quickSort(array);
    expect(sortedArray).to.deep.equal([1, 2, 3, 5, 9, 10])
  })

  it('should sort small, numeric arrays, including negative numbers', () => {
    array = [];
    array = [-5, 3, -2, 10, 1, 9];
    let sortedArray = quickSort(array);
    expect(sortedArray).to.deep.equal([-5, -2, 1, 3, 9, 10])
  })

  it('should sort letters, too', () => {
    let array = ['a', 'z', 'b', 'l', 'f'];

    let sortedArray = quickSort(array);
    expect(sortedArray).to.deep.equal(['a', 'b', 'f', 'l', 'z'])
  })

  it('should sort small, random, numeric arrays', () => {
    array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 10) + 1)
    }

    let sortedArray = quickSort(array);
    expect(validateArray(sortedArray)).to.equal(true)
  })

  it('should sort big, random, numeric arrays', () => {
    array = [];
    for (let i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * 100000) + 1)
    }

    let sortedArray = quickSort(array);
    expect(validateArray(sortedArray)).to.equal(true)
  })
})

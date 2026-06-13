const mergeSort = require('./merge-sort')

describe('mergeSort', () => {
  // base cases
  test('returns an empty array unchanged', () => {
    expect(mergeSort([])).toEqual([])
  })

  test('returns a single-element array unchanged', () => {
    expect(mergeSort([7])).toEqual([7])
  })

  // core sorting
  test('sorts a two-element array', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2])
  })

  test.skip('sorts an already-sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  test.skip('sorts a reverse-sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  test.skip('sorts an unsorted array (odd length)', () => {
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3])
  })

  test.skip('sorts an unsorted array (even length)', () => {
    expect(mergeSort([8, 3, 5, 1, 4, 7, 6, 2])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  // edge cases
  test.skip('handles duplicate values', () => {
    expect(mergeSort([4, 2, 4, 1, 2])).toEqual([1, 2, 2, 4, 4])
  })

  test.skip('handles negative numbers', () => {
    expect(mergeSort([3, -1, 0, -5, 2])).toEqual([-5, -1, 0, 2, 3])
  })

  test.skip('does not mutate the original array', () => {
    const input = [3, 1, 2]
    mergeSort(input)
    expect(input).toEqual([3, 1, 2])
  })
})

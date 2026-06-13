const mergeSort = function (arr, result = []) {
  if (result.length === arr.length) return result;
  if (arr.length === 1) return arr;

  // step 1: Divide the array into 2
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  console.log("left:", left, "right:", right);

  // step 2: Compare the left and right array
  for (let i = 0; i < right.length; i++) {
    if (left[i] < right[i]) {
      result.push(left[i]);
      result.push(right[i]);
    } else {
      result.push(right[i]);
      result.push(left[i]);
    }
  }

  return mergeSort(result);
};

const testCase = mergeSort([2, 1, 8, 3]);
console.log("test case:", testCase);

module.exports = mergeSort;

const mergeSort = function (arr) {
  if (!Array.isArray(arr) || arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  const out = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) out.push(left[i++]);
    else out.push(right[j++]);
  }

  // append remaining elements
  return out.concat(left.slice(i)).concat(right.slice(j));
}

const test1 = [2, 1];
const test2 = [1, 2, 3, 4, 5];

console.log(mergeSort(test1));
console.log(mergeSort(test2));

module.exports = mergeSort;

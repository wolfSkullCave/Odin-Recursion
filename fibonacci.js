function fibs(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    console.log(i);
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

function fibsRec(n, result = [0, 1], idx = 2) {
  if (n === idx) return result;

  console.log("This was printed recursively");
  result.push(result[idx - 1] + result[idx - 2]);
  return fibsRec(n, result, idx + 1);
}

console.log(fibs(8));
console.log(fibsRec(8));

export { fibs, fibsRec };

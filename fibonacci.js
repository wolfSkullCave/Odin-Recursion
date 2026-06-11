const fibonacci = function (n, result = [0, 1]) {
  if (n < 0) throw new Error("ERROR: No negative numbers allowed.");
  if (result.length >= n) return result.slice(0, n);

  result.push(result.at(-1) + result.at(-2));
  console.log(result);

  return fibonacci(n, result);
};

let testCase = fibonacci(8);

console.log(testCase);

module.exports = fibonacci;

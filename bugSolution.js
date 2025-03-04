function foo(x) {
  const memo = {};
  function fib(n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
  return fib(x);
}
console.log(foo(5)); // Output: 5
console.log(foo(50)); // Output: 12586269025
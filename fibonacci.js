function fibIter(n) {
  let a = 0,
    b = 1,
    result = 1;
  for (let i = 0; i < n - 2; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

function fib(n) {
  if (n < 0) return;
  if (n === 1) return 0;
  if (n === 2) return 1;
  else return fib(n - 2) + fib(n - 1);
}

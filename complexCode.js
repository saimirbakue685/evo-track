// Filename: complexCode.js
// Content: Complex code to calculate the Fibonacci sequence up to a given number using memoization

// Function to calculate the Fibonacci sequence using memoization
function fibonacciMemoization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}

// Function to calculate the Fibonacci sequence up to a given number
function fibonacciSequence(maxNumber) {
  if (maxNumber < 0) {
    throw new Error("Invalid input. The maximum number must be non-negative.");
  }

  let fibonacciSeq = [];
  for (let i = 0; i <= maxNumber; i++) {
    fibonacciSeq.push(fibonacciMemoization(i));
  }

  return fibonacciSeq;
}

// Example usage
const maxNumber = 10;
const fibonacciSeq = fibonacciSequence(maxNumber);
console.log(`Fibonacci sequence up to ${maxNumber}:`, fibonacciSeq);
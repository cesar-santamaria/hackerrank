function miniMaxSum(arr) {
  // Write your code here

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum - max, sum - min);
}

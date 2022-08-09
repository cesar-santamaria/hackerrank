function diagonalDifference(arr) {
  // Write your code here
  let leftSum = 0; // 0,1,2
  let rightSum = 0; // 2,1,0
  
  for (let i = 0; i < arr.length; i++) {
      leftSum += arr[i][i];
      rightSum += arr[i][arr.length - 1 - i]
  }
  
  if (leftSum > rightSum) return leftSum - rightSum
  return rightSum - leftSum
}
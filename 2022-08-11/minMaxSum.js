function miniMaxSum(arr) {
  // Write your code here
  // Declare variabes to store max and min values
  let max = 0;
  let min = 0;
  // Rearrange array so that its range is always smalles to largest
  arr.sort((a,b) => a-b)
  // loop through array and sum values to max and min variables
  for (let i = 0; i < arr.length -1; i++) {
      max += arr[1 + i]
      min += arr[0 + i]
  }
  console.log(min,max)
}
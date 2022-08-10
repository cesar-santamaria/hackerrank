function plusMinus(arr) {
  // Write your code here
  let positiveRatio = 0;
  let negativeRatio = 0;
  let zeroRatio = 0;
  
  for (let i =0; i < arr.length; i++) {
      if (arr[i] > 0) {
          positiveRatio += 1;
      }
      if (arr[i] < 0) {
          negativeRatio += 1;
      }
      if (arr[i] === 0) {
          zeroRatio += 1;
      }
  }
  console.log((positiveRatio/arr.length).toFixed(6))
  console.log((negativeRatio/arr.length).toFixed(6))
  console.log((zeroRatio/arr.length).toFixed(6))
}
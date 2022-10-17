function plusMinus(arr,n) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          positive += 1
      } else if (arr[i] < 0) {
          negative += 1
      } else {
          zero += 1
      }
  }
  
  console.log((positive/n).toFixed(6))
  console.log((negative/n).toFixed(6))
  console.log((zero/n).toFixed(6))
  
}

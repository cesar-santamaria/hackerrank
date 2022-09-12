function findDigits(n) {
  // Write your code here
  const numToArray = n.toString().split("");
  let result = 0;
  
  for (let i =0; i < numToArray.length; i++) {
      if (n % numToArray[i] === 0) {
          result++
      }
  }
  return result
}
// 08:07:72

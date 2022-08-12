function birthdayCakeCandles(candles) {
  // Write your code here
  // declare a variable to store the number of candles/result
  let result = 0;
  
  // grab the max number from array
  const maxCandle = Math.max(...candles)
  
  // loop through array and sum highest digit instance to result
  for (let i = 0; i < candles.length; i++) {
      if (candles[i] === maxCandle) {
          result += 1
      }
  }
  return result
}
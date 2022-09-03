function pickingNumbers(a) {
  // Write your code here
  // find the longest subarray where dif btw two elements <= 1
  let arr = Array(a.length).fill(0)
  let max = 0;

  for (let i = 0; i <= 100; i++) {
      arr[a[i]]++
  }
  for (let i = 0; i < a.length; i++) {
      if (arr[i] + arr[i + 1] > max) {
          max = arr[i] + arr[i + 1]
      }
  }
  return max
}

//
//SS - 48:28:19
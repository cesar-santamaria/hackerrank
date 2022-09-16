function beautifulTriplets(d, arr) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
          if (arr[j] - arr[i] === d) {
              for (let k = 0; k < arr.length; k++) {
                  if (arr[k] - arr[j] === d) {
                      count++
                  }
              }
          }
      }
  }
  return count
}

// 11:39:32

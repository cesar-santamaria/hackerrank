function beautifulDays(i, j, k) {
  // Write your code here
  // i: starting day number
  // j: ending day number
  // k: divisor
  let beautifulDays = 0;
  
  for (let index = i; index <= j; index++) {
      let reversedNumber = index.toString().split("").reverse("").join("")
      if (Number.isInteger((index - reversedNumber) / k)) {
          beautifulDays++
      }
  }
  return beautifulDays
}
// 19:06:43
function birthday(s, d, m) {
  // Write your code here
  // [1 2 1 3 2]
  // [ 1, 2 ] [ 2, 1 ] [ 1, 3 ] [ 3, 2 ] [ 2 ]
  let result = 0;
  for (let i = 0; i < s.length; i++) {
     let sub_array = s.slice(i, i + m)
     let sum = sub_array.reduce((prev, curr) => prev + curr)
     if (sum === d) result++
  }
  return result
}
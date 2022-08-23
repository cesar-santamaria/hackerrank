function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let max = 10000
  for (let i = 0; i <= max; i++) {
      x1 = x1 + v1 // 3,6,9,12
      x2 = x2 + v2 // 6,8,10,12
      
      if (x1 === x2) return "YES"
  }
  return "NO"
}
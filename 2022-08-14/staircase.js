function staircase(n) {
  // Write your code here
  let row = ""
  for (let i = 0; i < n; i++) {
      for (let j = 1; j <= n; j++) {
          if (j < n - i) {
             row += " " 
          } else {
              row += "#"
          }
      }
      row += "\n"
  }
  console.log( row)

}
function serviceLane(n, width, cases) {
  // Write your code here
  const result = []
  for (let i = 0; i < cases.length; i++) {
      for (let j = 0; j < 1; j++) {
          let a = cases[i][j]
          let b = cases[i][j+1]
          // slice(star,end) => end is omitted
          let slice = width.slice(a,b+1)
          result.push(Math.min(...slice))
      }
  }
  return result
}

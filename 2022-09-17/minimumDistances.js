function minimumDistances(a) {
  // Write your code here
  let min = [];
  for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
          if (a[i] === a[j]) {
              min.push(Math.abs(i - j))
          }
      }
  }
  return min.length ? Math.min(...min) : -1
}

//10:14:00
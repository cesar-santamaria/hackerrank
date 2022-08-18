function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let counts = [0,0]
  
  apples.forEach(apple => {
      let dist = apple + a
      if (dist >= s && dist <=t) counts[0] += 1
  })
  
  oranges.forEach(orange => {
      let dist = orange + b
      if (dist >= s && dist <= t) counts[1] += 1
  })
  counts.forEach(count => console.log(count))
}
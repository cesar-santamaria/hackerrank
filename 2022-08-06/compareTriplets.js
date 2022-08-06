function compareTriplets(a, b) {
  // Write your code here
  // if a[i] > b[i], A = 1 point
  // if a[i] < b[i], B = 1 point
  // if a[i] = b[i], B = 1 point
  
  // declare a variable to store total points player A
  let playerAPoints = 0;
  // declare a variable to store total points player B
  let playerBPoints = 0;
  let scores = [];
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) playerAPoints += 1;
      if (a[i] < b[i]) playerBPoints += 1;
  }
  scores.push(playerAPoints,playerBPoints)
  return scores
  
}
function viralAdvertising(n) {
  // Write your code here
  console.log(n)
  let shared = 5;
  let liked = 2;
  // 5/2 = 2 x 3 = 6
  // 6/2 = 3 x 3 = 9
  // 9/2 = 4 x 3 = 12
  // 12/2 = 6 x 3 = 18
  // 18 /2 = 9 
  
  for (let i = 2; i <= 50; i++) {
      shared = Math.floor(shared/2)*3
      liked += Math.floor(shared/2)
      if (n === 1) return 2
      if (i === n) return liked
  }
  
}
// 28:01:37
function utopianTree(n) {
  // Write your code here
  // tree goes through 2 cycles every year
      // each spring it doubles in height
      // each summer it increases by 1 meter
  // 0 - summer => 1
  // 1 - spring => 2
  // 2 - summer => 3
  // 3 - spring => 6
  // 4 - summer => 7
  // 5 - spring => 14
  
  // console.log("summer",5%2)
  // console.log("spring",)
  let heightSum = 0;
  const height = []
  for (let i =1; i < 60; i++) {
      if (i % 2 === 1) {
          heightSum++
          height.push(heightSum)
      } else if (i % 2 === 0) {
          heightSum *= 2
          height.push(heightSum)
      }
  }
  
  for (let i = 0; i < height.length; i++) {
      if (n === i) {
          return height[i]
      }
  }
}

// 30:38
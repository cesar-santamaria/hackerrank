function kaprekarNumbers(p, q) {
  // Write your code here
  const result = []
  for (let i = p; i <= q; i++) {
      let numSqrd = Math.pow(i, 2)
      let numToString = numSqrd.toString()
      let left = numToString.slice(0, (numToString.length/ 2))
      let right =  numToString.slice(numToString.length/ 2)
      if (parseInt(left) + parseInt(right) === i || isNaN(parseInt(left)) && parseInt(right) == 1) {
          result.push(i)
      }
  }
  if (result.length < 1) console.log( "INVALID RANGE")
  else {
  console.log(result.join(" "))
  }
}


// 27:48:32

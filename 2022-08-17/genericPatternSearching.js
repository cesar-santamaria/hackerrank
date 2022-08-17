/* 
Find a pattern, sequence of characters can be found within the given string (sequence a characters).  

AABAACAADAABAABA => AABA => [0,9]
                 => BAA => [2,12]
*/

function patternIndexes(sequence,pattern) {
  let result = [];
  console.log(sequence.substring(3,pattern.length+3))
  console.log(pattern.length)
  for (let i = 0; i < sequence.length;i++){
    if (sequence.substring(i, pattern.length + i) === pattern) {
      result.push(i)
    }
  }
  return result
}

console.log(patternIndexes("AABAACAADAABAABA","AABA"))
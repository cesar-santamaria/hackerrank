function breakingRecords(scores) {
  // Write your code here
  let maxScore = scores[0];
  let minScore = scores[0];
  let pb = [];
  let pw = [];
  let result = [];
  for (let i = 0; i < scores.length; i++) {
      if (scores[i] > maxScore) {
          maxScore = scores[i]
          pb.push(scores[i])
      }
      if (scores[i] < minScore) {
          minScore = scores[i]
          pw.push(scores[i])
      }
  }
  result.push(pb.length,pw.length)
  return result
  
}
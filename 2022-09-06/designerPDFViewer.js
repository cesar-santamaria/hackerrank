function designerPdfViewer(h, word) {
  // Write your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArr = alphabet.split('')
  const wordArr = word.split('')
  let maxLetter = 0

  for (let i = 0; i < h.length; i++) {
    for (let j = 0; j < h.length; j++) {
      if (wordArr[i] == alphabetArr[j] && h[j] > maxLetter) {
        maxLetter = h[j]
      }
    }
  }

  return maxLetter * word.length
}

// 47:48:45

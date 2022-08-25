function migratoryBirds(arr) {
  // Write your code here
  let table = {}
  arr.sort()
  for (const el of arr) {
      if (table[el]) {
          table[el] += 1
      } else {
          table[el] = 1
      }
  }
  return Object.keys(table).reduce((a, b) => table[a] > table[b] || table[a] === table[b] ? a : b)
}
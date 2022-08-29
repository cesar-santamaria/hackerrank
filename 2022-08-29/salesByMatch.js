function sockMerchant(n, ar) {
  // Write your code here
  const obj = {};
  let count = 0;
  ar.forEach(element => obj[element] = 0)
  
  for (let i = 0; i < ar.length; i++) {
      if (obj.hasOwnProperty(ar[i])) {
          obj[ar[i]] += 1
      }
  }
  
  for (const key of Object.values(obj)) {
      count += Math.floor(key/2)
  }
  return count
}
function getTotalX(a, b) {
  let validCount = 0;
  for (let i = 1; i <= 100; i++) {
      if (a.every(int => i % int === 0)) {
          if (b.every(int => int % i === 0)) {
              validCount++
          }
      }
  }
  return validCount;
}
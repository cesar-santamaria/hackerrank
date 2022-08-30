function pageCount(n, p) {
  // n: number of pages in book => 6
  // p: desired page number => 2
  // 6 / 2 => 1
  // 3 - 1 => 2
  const frontFlip = Math.floor(p / 2); 
  const backFlip = Math.floor((n / 2) - frontFlip);

  const result = Math.min(frontFlip, backFlip);
  return result;

}
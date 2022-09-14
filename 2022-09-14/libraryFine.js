function libraryFine(d1, m1, y1, d2, m2, y2) {
  // Write your code here
  // calculate the fine (if any) for book return dates
  // if book is returned on OR before return date => 0
  // if book is returned after expected return date but still within calendar month and year => 15 * (the number of days late)
  // if book is returned after the expected return moonth but still within calendar year => 500 hackos * (the number of months late)
  // if the book is returned after the calendar year => 10000 (fixed fine)

  //d1,m1,y1: return date
  //d2,m2,y2: due date
  // 14,7,2018
  // 5,7,2018  => 14 - 5 => 9 days late => 9 * 15 => 135 hackos

  if (y1 <= y2) {
      if (y1 <= y2 && m1 === m2 && d1 < d2) return 0
      if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15
      if (y1 === y2 && m1 > m2) return (m1 - m2) * 500
      return 0
  }
  return 10000
}

// 23:49

/* 
original solution
-- It worked but I reduced repeating steps in logic
        if (y1 < y2) return 0
        if (y1 === y2 && m1 === m2 && d1 === d2) return 0
        if (y1 === y2 && m1 === m2 && d1 < d2) return 0
        if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15
        if (y1 === y2 && m1 < m2) return 0
        if (y1 === y2 && m1 > m2) return (m1 - m2) * 500
*/
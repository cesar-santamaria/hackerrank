function dayOfProgrammer(year) {
  // programmer day 256th day of the year
      // range between 1700 - 2700
  // 1700 - 1917 julian calendar
  // 1918 gregorian special
  // 1919 - Present gregorian calendar
  
  // Julian leap year
      // year % 4 === 0
  // Gregorian leap year
      // year % 400 === 0 OR
      // year % 4 === 0 && year % 100 !== 0
      
  // input: 2017 && output: 13.09.2017
  // input: 2016 && output: 12.09.2016
  // input: 1800 && output: 12.09.1800
  if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) return `12.09.${year}`
  }
  if (year === 1918) return `26.09.${year}`
  if (year >= 1919) {
      if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) return `12.09.${year}` 
  }
  return `13.09.${year}`
}

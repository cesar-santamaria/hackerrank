function timeConversion(s) {
  // Write your code here
  const amOrPm = s.charAt(8);
  let militaryHour = ""
  
  if (amOrPm === "A") {
      if (s.substring(0,2) === 12) {
          militaryHour = "12" + s.substring(2,8)
      } else {
          militaryHour = s.substring(0,2) + s.substring(0,8)
      }
  } else { 
      militaryHour = parseInt(s.substring(0,2)) + 12 + s.substring(2,8)
  }
  return militaryHour
}
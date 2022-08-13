function timeConversion(s) {
  // Write your code here
  // 07:05:45PM
  const amOrPm = s.charAt(8); // P || A
  let militaryHour = ""
  
      console.log(s.substring(0,2))
  if (amOrPm === "A") {
      if (s.substring(0,2) === "12") {
          militaryHour = "00"
      } else {
          militaryHour = s.substring(0,2)
      }
  } else { // P
      if (s.substring(0,2) === "12") {
          militaryHour = "12"
      } else {
          militaryHour = parseInt(s.substring(0,2)) + 12
      }
  }
  return militaryHour + s.substring(2,8)
}
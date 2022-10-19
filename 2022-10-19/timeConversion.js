function timeConversion(s) {
  // Write your code here
  
  if (s.includes("AM") && s.slice(0,2) === "12") {
      s = `00:${s.slice(3,8)}`
  } else if (s.includes("PM") && s.slice(0,2) === "12") {
      s = `12:${s.slice(3,8)}`
  } else if (s.includes ("PM")) {
      let convertToNumber = Number(s.slice(0,2))
      s = `${convertToNumber+12}:${s.slice(3,8)}`
  } else {
      s = `${s.slice(0,8)}`
  }
  return s
}

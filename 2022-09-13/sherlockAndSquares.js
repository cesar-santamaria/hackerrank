function squares(a, b) {
  // Write your code here
  console.log(Math.ceil(Math.sqrt(a)))
  console.log(Math.floor(Math.sqrt(b)))
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

// 14:13:07
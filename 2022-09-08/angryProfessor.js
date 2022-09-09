function angryProfessor(k, a) {
  // Write your code here
  // k: threshold number of students that cant be late
  // a: the arrival times of n students
  // anything below or equal to 0 = on Time
  // anything above 0 = Late
  // return Yes if class is cancelled
      // otherwise return No
  let numberOfStudentsOnTime = 0;
  for (let i =0; i < a.length; i++) {
      if (a[i] <= 0) {
          numberOfStudentsOnTime++
      }
  }
  if(numberOfStudentsOnTime < k) {
      return "YES"
  }
  return "NO"
}

// 18:24.71

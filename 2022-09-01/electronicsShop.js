function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  // wants to dertermine most expensive keyboard,usb with budget
  // find the cost to buy them 
  // if not possible to buy both items return -1
  // b: budget
  let cost = 0;
  for (let i = 0; i < keyboards.length; i++) {
      for (let j = 0; j < drives.length; j++) {
         if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > cost) {
             cost = keyboards[i] + drives[j]
         }
      }
  } 
  return cost ? cost : -1

}
// 21:25:97
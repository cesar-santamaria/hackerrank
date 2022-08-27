function bonAppetit(bill, k, b) {
  // Write your code here
  // bill
  // k: Item Anna did not eat
  // b: Amount of money that Anna contributed to the bill
  
  let totalCost = 0;
  for (let i = 0; i < bill.length; i++) {
          totalCost += bill[i];
  }
  
  let annasConsumedCost = (totalCost - bill[k]) / 2
  let overcharged = b - annasConsumedCost
  
  if (!overcharged) {
      console.log("Bon Appetit")
  } else {
      console.log(overcharged)
  }
}
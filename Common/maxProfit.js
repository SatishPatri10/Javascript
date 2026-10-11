function maxProfit(prices, n){
  let max_Profit = 0;
  let buy = prices[0];
  for(let i =1; i < n; i++){
    if(buy > prices[i]) {
      buy = prices[i];
    } else if (prices[i] - buy > max_Profit) {
      max_Profit = prices[i] - buy;
    }
  }
  return max_Profit;
}

console.log(maxProfit([ 7, 1, 5, 6, 4,45 ], 32));
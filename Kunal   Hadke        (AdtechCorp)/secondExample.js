/* Q.2> === "You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
=== Example 1 
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell." */
 
/* SOLUTION ==
buy at low price sell at high  price    ** 1-6 = 5 profit  **
we cant but at high price & sell at low price it will gives us loss    ** 7-6 = 1 loss **
   (1 is remove from array) [0,0,4,2,5,4] then take it max   */
maxProfit([7,1,5,3,6,4]);
function maxProfit(prices){
    let buy = prices[0];    //start from i[0] = 7:
    prices[0] = 0;        
    let profit = 0;
    for(let i = 1; i< prices.length; i++){   //1
        if(buy > prices[i]){
            buy = prices[i];
            prices[i] = 0;      
    }
        else{
            profit = Math.max(prices[i] - buy, profit);
             //   (1 is remove from array) [0,0,4,2,5,4] then take it max
    } 
}
   console.log(profit);  //5
};

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0
        let left = 0
        let right = 1

        while(right < prices.length){
            if(prices[right] > prices[left]){
                let profit = prices[right] - prices[left]
                result = Math.max(result, profit)
            }else{
                left = right
            }
            right++
        }

        return result
    }
}

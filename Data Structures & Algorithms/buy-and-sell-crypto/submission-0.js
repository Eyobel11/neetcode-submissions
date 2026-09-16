class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0
        // let left = 0
        // let right = prices.legnth - 1

        // while(l <= r){
        //     if(prices[right] >= prices[left]){
        //         let profit =  prices[right] - prices[left];
        //         result = Math.max(result,profit)
        //     }else if( prices[right] <= prices[left]){
        //         right -- ;
        //     }
        // }

        for(let i = 0; i< prices.length; i++){
            for(let j = i + 1; j < prices.length; j++){
                if(prices[j] >= prices[i]){
                    let profit =  prices[j] - prices[i];
                    result = Math.max(result,profit)

                }
            }
        } 

        return result
    }
}

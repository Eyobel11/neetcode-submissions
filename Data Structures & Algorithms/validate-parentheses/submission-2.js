class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let check = {
            ")":"(",
            "]":"[",
            "}":"{",
        }
        for( let c of s){
            if(check[c]){
                
                if(stack.length > 0 && stack[stack.length-1] === check[c]){
                    stack.pop()
                }else{
                    return false
                }

            }else{
                stack.push(c)
            }
        }

        return stack.length == 0
    }
}

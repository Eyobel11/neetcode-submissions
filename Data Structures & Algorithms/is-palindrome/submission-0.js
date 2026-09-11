class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let palindrome = s.toLowerCase().replace(/[^a-z0-9]/g,'')
        let reverse = palindrome.split('').reverse().join('')

        if( palindrome === reverse){
            return true
        }else{
            return false
        }
    }
}

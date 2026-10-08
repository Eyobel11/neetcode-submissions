/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = []
        this.dfs(root,result)
        return result[k-1]
    }
    dfs(node,result){
        if(!node){
            return
        }
        this.dfs(node.left,result)
        result.push(node.val)
        this.dfs(node.right, result)
    }
}

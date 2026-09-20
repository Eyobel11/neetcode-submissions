/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let array = []
        let curr = head
        while(curr){
            array.push(curr)
            curr = curr.next
        }

        let exclude = array.length - n

        if(exclude === 0){
            return head.next
        }

        array[exclude-1].next = array[exclude].next
        return head

    }
}

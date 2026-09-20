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
     * @return {void}
     */
    reorderList(head) {
        if(!head){
            return []
        }
        let array = []
        let curr = head

        while(curr){
            array.push(curr)
            curr = curr.next
        }
        let left = 0
        let right = array.length - 1

        while(right > left){
            array[left].next = array[right]
            left++

            if(left >= right) break;

            array[right].next = array[left]

            right--
        }

        array[left].next = null




    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if(!head || !head.next) return head;

    //to know the Length of the linked list
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++;
    }

    // formula to acheive the  103 and 3 is the same rotation
    k = k % length;

    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let NewHead = slow.next;
    slow.next = null;

    return NewHead;
};


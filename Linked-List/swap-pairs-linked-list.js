/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {


    //Iterative Approach;
    //if only one node or empty node return head;
    // if (!head || !head.next) return head;

    // let dummyNode = new ListNode();
    // dummyNode.Next = head;
    // // intialize the prev, current, next
    // let prev = dummyNode;
    // let curr = head;
    // let next = head.next;

    // while (next) {
    //     prev.next = next;
    //     curr.next = next.next;
    //     next.next = curr;

    //     prev = curr;
    //     curr = prev.next;
    //     next = curr && curr.next;
    // }

    // return dummyNode.next

    //Recursion Approach;
    if (!head || !head.next) return head;

    let left = head;
    let right = head.next;

    left.next = swapPairs(right.next);
    right.next = left;

    return right;

    // this will also pass
    // while (right || right.next) {
    //     left.next = swapPairs(right.next);
    //     right.next = left;
    //     return right;
    // }
};
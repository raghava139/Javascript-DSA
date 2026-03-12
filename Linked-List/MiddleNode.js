//middle node
// use slow & fast pointer
function Middle(head){
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
//(Middle(10)

// Complexites
// TC: O(n/2) => O(n);
// SC: O(1);
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

// var removeNthFromEnd = function (head, n) {
//     //Two Pass Apprach
//     let sentinelNode = new ListNode();
//     sentinelNode.next = head;
//     let curr = head;
//     let length = 0;
//     while (curr) {
//         curr = curr.next;
//         length++;
//     }

//     let prevPosition = length - n;
//     let currentPosition = sentinelNode;
//     for (let i = 0; i < prevPosition; i++) {
//         currentPosition = currentPosition.next;
//     }
//     currentPosition.next = currentPosition.next.next;

//     return sentinelNode.next

// };


//one way pass two pointer approach 
function ListNode(val, next) { //for new dummy node purpose
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {

    //One Way Approach using two pointers;
    //created a new sentinel Node;
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    //creating a slow & fast pointers
    let slow = sentinelNode;
    let fast = sentinelNode;

    //and moving the fast pointer
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }

    //moving two pointers 1 step head still reaches to null;
    // while (fast && fast.next) {
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    //slow pointer reaches to previous; 
    //skipping next pointer( Golden Rule )
    slow.next = slow.next.next;

    return sentinelNode.next;

};
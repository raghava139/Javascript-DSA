 
 //sentinel Node it is kind of temporary node(it helps us delete the nodes for starting Index);
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var removeElements = function (head, val) {

    let sentinelNode = new ListNode();
    sentinelNode.next = head;
    let prev = sentinelNode;
    while (prev !== null && prev.next !== null) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next

        }
    }
    return sentinelNode.next
};
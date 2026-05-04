function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let dummyNode = new ListNode();
    let head = dummyNode;
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        let digit = Math.floor(sum % 10);

        let newNode = new ListNode(digit);
        dummyNode.next = newNode;
        dummyNode = dummyNode.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return head.next;
};
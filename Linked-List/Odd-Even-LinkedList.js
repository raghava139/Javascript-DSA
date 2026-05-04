var oddEvenList = function (head) {

    if( head == null || head.next== null) return head;

    let odd = head;
    let even = head.next;
    let evenStarts = even;
    while (odd.next && even.next) {

        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }

    odd.next = evenStarts;

    return head

};
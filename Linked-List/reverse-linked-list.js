function reverseLinkedList(head){
    let previous = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = previous;
        previous = curr;
        curr = temp;
    }
    head = previous;
    return head;
}

// TC: O(n);
// Sc: O(n);
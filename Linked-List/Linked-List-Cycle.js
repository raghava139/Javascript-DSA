//linked list cycle; using Hash Table;
function LinkedListCycle(head) {
    let curr = head;
    let seenNodes = new Set();

    while (curr) {
        if (seenNodes.has(curr)) {
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
}
let ListNode = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null
      }
    }
  }
}
console.log(LinkedListCycle(ListNode))


// TC: O(n);
// SC: O(n);//because of new Set();

//now without spacing we need to create a Linked List Cycle (floyd's algorithm);
function LinkedListCyclewithFloydsAlgo(head) {

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }

    }
    return false

}
let ListNodeL = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null
      }
    }
  }
}
LinkedListCycle(ListNodeL)

// TC : O(n);
// SC : O(1);
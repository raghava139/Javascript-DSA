//----first approach---
//convert to linked list to array first;
// then takes two pointer left and right;
function ConvertLinkedListtoArray(head) {
    let arr = [];
    let curr = head
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next
    }
    return arr;
}
ConvertLinkedListtoArray(nodes)
function palindrome(head){
    let arrList = ConvertLinkedListtoArray(head);

    let left =0;
    let right =arrList.length-1;
    while(left<right){
        if(arrList[left] === arrList[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
}
let nodes = [1,2,2,1];
palindrome(nodes)

//TC:O(n);
//SC:O(n);//extra array;

//2nd Approach;
//find the middle element;
//reverse the second half list;
//compare to two list of nodesList => 1st list and 2nd reversed list;
function FindThePalindrome(head){
    //1.find the middle element;
    let slow = head;
    let fast = head;
    while(fast !==null && fast.next !==null){
        slow=slow.next; 
        fast = fast.next;
    }
    // at final in slow variable there is a middle element

    //2.reverse the second half the list;
    let prev = null;
    let curr = slow;
    while(curr!==null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //compare the two node lists of first head list & reversed second half list;
    let firstList = head;
    let secondList = prev;
    while(secondList !==null){
        if(firstList.val!==secondList.val){
            return false;
        }
        firstList= firstList.next;
        secondList = secondList.next;
    }
    return true;
}
let nodesList = [1,2,2,1];
FindThePalindrome(nodesList)

//TC:O(n)
//SC:O(1)
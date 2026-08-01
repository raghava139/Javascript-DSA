/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // Approach - 1 ( using HashMap)
    // //pull all in store of hashMap;
    // let set = new Set();
    // while(headA){
    //     set.add(headA);
    //     headA = headA.next;
    // }

    // //check in the headB is it there or not;
    // while(headB){
    //     if(set.has(headB)){
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;
    // TC :O(n+m);
    // SC :O(n)

    // Approach - 2 (using Two Pointers)
    // using two pointers without Space;
    // let PA = headA;
    // let PB = headB;

    // let n = headA;
    // let m = headB;

    // 1.Length of ListA
    // let countA = 0;
    // while (PA) {
    //     countA++;
    //     PA = PA.next;
    // }

    // 2.Length of ListB;
    // let countB = 0;
    // while (PB) {
    //     countB++;
    //     PB = PB.next;
    // }

    // 3.Difference between Lengths of ListA and ListB;
    // let diff = Math.abs(countA - countB)

    // 4.if count A is bigger length then swap otherwise (default it should be HeadB)
    // if(countA > countB){
    //     let temp = headA;
    //     headA = headB;
    //     headB = temp;
    // }

    // 5.Move the pointer to diff length
    // for(let i=0;i<diff;i++){
    //     headB = headB.next;
    // }

    // PA = headA;
    // PB = headB;

    // 6.now compare the both HeadA and HeadB if it found the intersection then automatically stop the loop;
    // while (PA != PB) {
    //     PA = PA.next;
    //     PB = PB.next;
    // }

    // 7.return the final PA Or PB (which is known as intersecting point)
    // return PA

    // 3.Approach moving HeadA to HeadB & HeadB to HeadA when any one becomes null
    // let PA = headA;
    // let PB = headB;

    // while (PA !== PB) {
    //     PA = PA === null ? headB : PA.next;
    //     PB = PB === null ? headA : PB.next;
    // }
    // return PA //  PA or PB;


    //DAY 2 ====revision====
    // // approach2 using two pointers;
    // let PA = headA;
    // let PB = headB;
    
    // // 1.length of listA;
    // let countA=0;
    // while(PA){
    //     countA++
    //     PA = PA.next;
    // }

    // //2.length of ListB;
    // let countB = 0;
    // while(PB){
    //     countB++;
    //     PB = PB.next;
    // }

    // //3.difference between two lengths;
    // let diff = Math.abs(countB-countA);

    // //4 swap and move the pointer upto difference;
    // // swap
    // if(countA > countB){
    //     let temp = headA;
    //     headA = headB;
    //     headB = temp;
    // }
    // //Move the pointer upto difference (by default or else based on countA big also swapped to HeadB)
    // for(let i=0; i<diff; i++){
    //     headB = headB.next;
    // }
    // PA = headA;
    // PB = headB;

    // //5.compare the two listA and listB;
    // while(PA!==PB){
    //     PA =  PA.next;
    //     PB =  PB.next;
    // }

    // //6.return PA or PB
    // return PA;

    // TC:O(n+m);
    // SC:O(1)

    // Day 2 revision========
    // Approach 3 using two pointers (but this time only one loop)
    // let i = headA;
    // let j = headB;
    // while(i!==j){
    //     i = i === null ? headB : i.next;
    //     j = j === null ? headA : j.next;
    // }
    // return i

    // TC:O(n+m);
    // SC:O(1)

    // Day 5 ===>revision<=====
    // // 1st Approach
    // let PA = headA;
    // let PB = headB;

    // //find the length of listA;
    // let countA = 0;
    // while(PA){
    //     countA++;
    //     PA = PA.next
    // }

    // //find the length of listB;
    // let countB = 0;
    // while(PB){
    //     countB++;
    //     PB = PB.next;
    // }

    // //find the Count B/W ListA - ListB;
    // let diff = Math.abs(countA-countB);

    // //swapped to ListB if the headA is length is bigger;
    // if(countA > countB){
    //    let temp = headA;
    //    headA = headB;
    //    headB = temp;
    // }

    // //move the headB upto diff;
    // for(let i=0; i<diff; i++){
    //     headB = headB.next;
    // }

    // PA = headA;
    // PB = headB;

    // //now compare both headA and headB;
    // while(PA!==PB){
    //     PA = PA.next;
    //     PB = PB.next;
    // }

    // return PA // or PB also fine (because PA === PB)
    // TC: O(n+m)
    // SC: O(1)

    // Day 5 ===revision====
    // 2nd approach
    let PA = headA;
    let PB = headB;

    while(PA !== PB){
        PA = PA === null ? headB : PA.next;
        PB = PB === null ? headA : PB.next;
    }
    return PA // Or PB also fine(because both meets at same point)
    // TC: O(n+m)
    // SC: O(1)

};
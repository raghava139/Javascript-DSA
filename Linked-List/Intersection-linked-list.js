var getIntersectionNode = function(headA, headB) {
    //pull all in store of hashMap;
    let set = new Set();
    while(headA){
        set.add(headA);
        headA = headA.next;
    }

    //check in the headB is it there or not;
    while(headB){
        if(set.has(headB)){
            return headB;
        }
        headB = headB.next;
    }
    return null;
};


// TC:O(n + m);
// Sc:O(n);
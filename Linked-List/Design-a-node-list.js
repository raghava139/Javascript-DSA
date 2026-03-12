
// creating a node in Linkded List;
function Node(value) {
    this.value = value;
    this.next = null;
}

let newNode = new Node(3);
console.log(newNode)

//How do you create a linked list;

// this linked list is empty;  means Initialization...,
function createALinkedList() {
    this.head = null;
    this.size = 0;
}

//Adding node at Head;
function addAtHead(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}
let testHead = new addAtHead(30);
console.log(testHead);

///adding node at tail;
function addAtTail(val) {

    // // without empty linkedlist
    // let createANewNode = new Node(val);
    // let curr = this.head;
    // while (curr.next !== null) {
    //     curr = curr.next;
    // }
    // curr.next = createANewNode;
    // this.size++;

    //with empty LinkedList;
    let createANewNode = new Node(val);
    if (this.head === null) {
        this.head = createANewNode;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = createANewNode;
    }

    this.size++;
}


///adding node at index;
function addAtIndex(index, val) {

    // without corner cases
    // let createdNode = new Node(val);
    // let current = this.head;
    // for(let i=0; i<index-1;i++){
    //     current = current.next;
    // }
    // createdNode.next = current.next;
    // current.next = createdNode;
    // this.size++;

    //with corner cases;
    if(index < 0 || index >= this.size) return ;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    else {
        let createdNode = new Node(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        createdNode.next = current.next;
        current.next = createdNode;
    }
    this.size++;
}

// Get The Element by passing index;

function getTheElement(index){
    //with out corner cases;
    // let current= this.head;
    // for(let i=0 ;i<index; i++){
    //     current = current.next;
    // }
    // return current.val;

    //with corner cases;
    if(index < 0 || index >= this.size) return -1;
     let current= this.head;
    for(let i=0 ;i<index; i++){
        current = current.next;
    }
    return current.val;
}



//Deleted the Element;
function deleteElement(index){


    //without corner case;
    // let current = this.head;
    // for(let i=0;i<index-1;i++){
    //     current = current.next;
    // }
    // current.next = current.next.next;
    // this.size--;


    // with corner case
    if(index < 0 || index >= this.size) return;

    if(index == 0){
        this.head = this.head.next;
        this.size--;
        return;
    }

    let current = this.head;
    for(let i=0;i<index-1;i++){
        current = current.next;
    }
    current.next = current.next.next;
    this.size--;


}
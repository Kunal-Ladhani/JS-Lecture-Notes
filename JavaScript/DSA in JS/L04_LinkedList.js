class myNode {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
};

// creating 1st node
let node1 = new myNode(15);
console.log(node1);

// creating 2nd node
let node2 = new myNode(61);
console.log(node2);

// linking the nodes
node1.next = node2;
console.log(node1);

console.log("------------------------------------------------------");

// LINKED LIST IMPL.

/*
    Create a Linked List from scratch using class & constructor, create 3 functions-
    1. insert at end(x)
    2. delete from end()
    3. printMin()- print the minimum element in the linked list
*/
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
};
class linkedList {

    constructor() {
        this.head = null;
        this.size = 0;  // OPTIONAL
        this.minVal = Number.MAX_VALUE; // OPTIONAL
    }

    insertAtBegin(val) {

        // 1st create new node with data
        let newNode = new Node(val);

        this.minVal = Math.min(this.minVal, newNode.data);

        if (this.head != null) {
            // LL was not empty
            newNode.next = this.head;
        }
        this.head = newNode;
        // LL was initially empty that's why head points null.
        // now we need to point head to the newNode,
        // and newNode's next points null anyways.

        return this.head;
    }

    insertAtEnd(val) {
        // create a new node
        let newNode = new Node(val);

        this.minVal = Math.min(this.minVal, newNode.data);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        return this.head;
    }

    deleteFromEnd() {
        if (this.head == null) {
            // LL was empty
            return null;
        } else {
            // LL is not empty
            let curr = this.head;
            let prev = null;
            while (curr.next != null) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
            return this.head;
        }
    }

    printList() {
        if (this.head == null) {
            return null;
        } else {
            let curr = this.head;
            let s = '';
            while (curr != null) {
                s = s + (curr.data) + "->";
                curr = curr.next;
            }
            return s;
        }
    }

    printMin() {
        return this.minVal;
    }
}

let ll = new linkedList();

ll.insertAtBegin(20);
ll.insertAtBegin(1);
ll.insertAtBegin(5);
ll.insertAtEnd(51);
console.log(ll.printList());

ll.deleteFromEnd();
console.log(ll.printList());
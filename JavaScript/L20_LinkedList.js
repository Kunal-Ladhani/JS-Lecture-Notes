/*

Create a Linked List from scratch using class & constructor as discussed in lecture
***create 3 functions***
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
        //this.size = 0;
    }
    insertAtBegin(val) {
        // 1st create new node for data
        let newNode = new Node(val);
        if(this.head == null) {
            // LL was empty
            this.head = newNode;
            return this.head;
        } else {
            // non empty LL    
            newNode.next = this.head;
            this.head = newNode;
            return this.head;
        }
    }

    insertAtEnd(val) {
        // create a new node
        let newNode = new Node(val);    
        if(this.head == null) {
            this.head = newNode;
            return head;
        } else {
            let curr = this.head;
            while(curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
            return this.head;
        }
    }
    deleteFromEnd() {
        if(this.head == null){
            // LL was empty
            return null;
        } else {
            // LL is not empty
            let curr = this.head;
            let prev = null;
            while(curr.next != null) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
            return this.head;
        }
    }

    printList() {
        if(this.head == null) {
            return null;
        } else {
            let curr = this.head;
            let s = '';
            while(curr != null) {
                s = s + (curr.data) + "->";
                curr = curr.next;
            }
            return s;
        }
    }

    printMin() {
        
    }
}

let ll = new linkedList();

ll.insertAtBegin(20);
ll.insertAtBegin(1);
ll.insertAtBegin(5);
ll.insertAtEnd(51);
ll.deleteFromEnd();

console.log(ll.printList());
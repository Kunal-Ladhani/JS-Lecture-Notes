class node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

let node1 = new node(15);
console.log(node1);

let node2 = new node(61);
console.log(node2);

node1.next = node2;

console.log(node1);
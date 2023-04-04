class stack {
    constructor()
    {
        this.stk = [];
        this.top = -1;
    }
    
    push(data) {
        this.stk[++this.top] = data; 
    }

    pop() {
        if(this.top === -1)
            return "Underflow";
        else
        {
            return this.stk[this.top--];
        }
    }

    peek() {
        if(this.top === -1)
            return "Underflow";
        else
        {
            return this.stk[this.top];
        }
    }
    
    empty() {
        return this.top === -1;
    }
}

let s = new stack();

console.log(s.peek());
s.push(1);
s.push(2);
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
// var stack = [];
// var maxSize = 10;
// var TOP = -1;

myStack = {
    stack : [],
    masxSize : 10,
    TOP : -1,
    push : function(data)
    {
        if (this.TOP == this.maxSize - 1)
        { 
            console.log("OVERFLOW");
        }
        else
        {
            this.TOP++;
            this.stack[this.TOP] = data;
        }
    },
    pop : function() {
        if (this.TOP == -1)
        {
            console.log("UNDERFLOW");
        }
        else
        {
            tp = (this.stack[this.TOP]);
            this.TOP--;
            return tp;
        }
    },
    peek : function() {
        if(this.TOP == -1)
            console.log("UNDERFLOW");
        else
        {
            return this.stack[this.TOP];
        }
    },
    isEmpty : function() {
        if(this.TOP == -1)
            return true;
        else
            return false;
    },
    isFull : function() {
        if(this.TOP == this.maxSize - 1)
            return true;
        else
            return false;
    }
}

myStack.peek();
myStack.push('a');
myStack.push('b');
myStack.push('c');
myStack.push('d');
myStack.pop();
console.log(myStack.stack);
console.log(typeof null)

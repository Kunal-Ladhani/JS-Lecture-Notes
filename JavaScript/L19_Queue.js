var myQueue = {
    queue : [],
    FRONT : -1,
    REAR : -1,
    maxSize : 10,
    enqueue : function(data) {
        if(this.REAR == this.maxSize-1)
        {
            // queue is full
            return "OVERFLOW";        
        } else if(this.FRONT == -1 && this.REAR == -1) {
            // queue is empty
            // first element
            this.FRONT++;
            this.REAR++;
            this.queue[this.REAR] = data;
        } else {
            // queue not empty - normal enqueue
            this.REAR++;
            this.queue[this.REAR] = data;
        }
    },
    dequeue : function() {
        if(this.FRONT == -1 || this.FRONT > this.REAR) {
            //underflow
            
            // queue initially empty
            // queue got empty in last operation
            return "UNDERFLOW";
        } else if(this.FRONT == this.REAR) {
            // last element left
            
            let rt = this.queue[this.FRONT];
            this.FRONT = -1;
            this.REAR = -1;
            return rt;
        } else {
            // queue not empty - normal dequeue

            // First Implementation
            // Only FRONT and REAR ptr will shift
            // But array will remain the same
            let rt = this.queue[this.FRONT];
            this.FRONT++;
            return rt;    

            // Second Implementation
            // will result in a empty slot in array(queue).
            /*
                let rt = this.queue[this.FRONT];
                delete this.queue[this.FRONT];
                this.FRONT++;
                return rt;    
            */

            // Third Implementation
            // will result in fixed FRONT ptr at 0.
            /*
                let rt = this.queue[this.FRONT];
                this.queue.splice(this.FRONT,1);
                return rt;    
            */
        }
    },
    front : function() {
        if(this.FRONT == -1 || this.FRONT > this.REAR) {
            return "UNDERFLOW";
        } else {
            return this.queue[this.FRONT];
        }
    },
    rear : function() {
        if(this.FRONT == -1 || this.FRONT > this.REAR) {
            return "UNDERFLOW";
        } else {
            return this.queue[this.REAR];
        }
    },
    isEmpty : function() {
        return (this.FRONT == -1 && this.REAR == -1);
    },
    isFull : function() {
        return (this.REAR == this.maxSize - 1)
    },
    size : function() {
        if(this.FRONT == -1 || this.FRONT > this.REAR) {
            return 0;
        } else if(this.FRONT == this.REAR) {
            return 1;
        } else {
            let size = 0;
            for(let i=this.FRONT; i<=this.REAR; i++)
                size++;
            return size;
        }
    }
};

console.log(myQueue.queue);
console.log(myQueue.dequeue());
myQueue.enqueue(5);
myQueue.enqueue(11);
myQueue.enqueue(57);
myQueue.enqueue(12);
console.log(myQueue.queue);
console.log(myQueue.front());
console.log(myQueue.rear());
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.queue);
console.log(myQueue.size(),myQueue.FRONT);


// NOTE: Encapsulation is achieved by binding properties and methods in one object.

/* 
 * NOTE: ABSTRACTION -
 * we need to show only the essentials.
 * not the impl details of the object.
 */


function Circle(rad, xCor, yCor) {
    // these 3 are internal details of object 
    let defaultLocation = { x: 1, y: 1 };

    let currLocation = { x: xCor, y: yCor };

    let findOptimalLocation = () => {
        console.log('finding optimal location...');
    }

    // only these 2 should be visible to outside
    this.radius = rad;

    this.draw = function () {
        findOptimalLocation();
        console.log('drawen the circle');
    }


    // one way is to define a getter
    this.getDefaultLocation = function () {
        return defaultLocation;
    }
    // other is to use this defineProperty() function
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        }
    });

    Object.defineProperty(this, 'currLocation', {
        get: function () {
            return currLocation;
        },

        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('invalid location');
            } else {
                currLocation = value;
            }
        }
    });
}

const circle = new Circle(5, 2, 3);
// see, we can access internal methods.
// circle.findOptimalLocation();
circle.draw();
// console.log(circle.currLocation);

// use let instead of this.
// NOTE: closure. -> read more on it. 

// circle.location = 10;   // see this is valid
// we shouldn't be able to set these properties from outside.
// only get them, not set.
// so we use Object.defineProperty()

console.log(circle);
console.log(circle.defaultLocation);
console.log(circle.getDefaultLocation());

console.log(circle.currLocation);
circle.currLocation = { x: 3, y: 3 };
console.log(circle.currLocation);  

Object.method()
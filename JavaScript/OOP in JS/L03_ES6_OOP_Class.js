/* NOTE:
 * Class -> ES6 way for creating objects.
 *
 * class is just syntactical sugar
 * under the hood it is still the same.
 *
 * */

class Circle {
    constructor(rad, xCor, yCor) {
        this.radius = rad;
        this.location = {
            x: xCor,
            y: yCor
        };
        this.draw = function () {
            console.log('draw');
        };
    }
};

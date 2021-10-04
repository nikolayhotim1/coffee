'usestrict';
function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function () {
        if (this.ounces === 16) {
            return 'large';
        } else if (this.ounces === 12) {
            return 'medium';
        } else if (this.ounces === 8) {
            return 'small';
        } else {
            return 'We have only 16, 12 or 8 ounces coffee.'
        }
    };

    this.toString = function () {
        return 'You\'ve ordered a ' + this.getSize() + ' ' + this.roast + ' coffee.';
    };
}

let houseBlend = new Coffee('House Blend', 12);
console.log(houseBlend.toString()); // You've ordered a medium House Blend coffee.

let darkRoast = new Coffee('Dark Roast', 16);
console.log(darkRoast.toString()); // You've ordered a large Dark Roast coffee.

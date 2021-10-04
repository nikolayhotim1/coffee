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
            return 'We have only 16, 12 or 8 ounces size coffee.'
        }
    };

    this.toString = function () {
        if (this.ounces === 16 || this.ounces === 12 || this.ounces === 8) {
            return 'You\'ve ordered a ' + this.getSize() + ' ' + this.roast + ' coffee.';
        } else {
            return this.getSize();
        }
    };
}

let americano = new Coffee('Americano', 8);
console.log(americano.toString()); // You've ordered a small Americano coffee.

let houseBlend = new Coffee('House Blend', 12);
console.log(houseBlend.toString()); // You've ordered a medium House Blend coffee.

let darkRoast = new Coffee('Dark Roast', 16);
console.log(darkRoast.toString()); // You've ordered a large Dark Roast coffee.

let lattes = new Coffee('Lattes', 20);
console.log(lattes.toString()); // We have only 16, 12 or 8 ounces size coffee.

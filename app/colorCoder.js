
const MajorColorNames = ["White", "Red", "Black", "Yellow", "Violet"];
const MinorColorNames = ["Blue", "Orange", "Green", "Brown", "Slate"];

class ColorPair {
    constructor(majorColor, minorColor) {
        this.majorColor = majorColor;
        this.minorColor = minorColor;
    }

    toString() {
        return `${this.majorColor} - ${this.minorColor}`;
    }
}

// Export the constants and the class
module.exports = {
    MajorColorNames,
    MinorColorNames,
    ColorPair
};
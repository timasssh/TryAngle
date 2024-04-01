export default class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        this.firstSide = parseFloat(firstSide);
        this.secondSide = parseFloat(secondSide);
        this.thirdSide = parseFloat(thirdSide);
    }
    checkTriangle() {
        return ((this.firstSide + this.secondSide) > this.thirdSide && (this.secondSide + this.thirdSide) > this.firstSide && (this.firstSide + this.thirdSide) > this.secondSide);
    }
}
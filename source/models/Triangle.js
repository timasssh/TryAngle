export default class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    checkTriangle() {
        // FIXME
        return ((this.firstSide + this.secondSide) > this.thirdSide && (this.secondSide + this.thirdSide) > this.firstSide && (this.firstSide + this.thirdSide) > this.secondSide);
    }
}
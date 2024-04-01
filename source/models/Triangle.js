export default class Triangle {
    constructor (firstSide, secondSide, thirdSide) {
        this.firstSide = Number(firstSide);
        this.secondSide = Number(secondSide);
        this.thirdSide = Number(thirdSide);
    }
    checkTriangle() {
        return ((this.firstSide + this.secondSide) > this.thirdSide && (this.secondSide + this.thirdSide) > this.firstSide && (this.firstSide + this.thirdSide) > this.secondSide);
    }
}
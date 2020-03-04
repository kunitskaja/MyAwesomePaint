window.Circle = class Circle extends Ellipse {
    constructor(firstPoint, secondPoint, lineColor, fillColor) {
        super(lineColor, firstPoint, fillColor);
        this.secondPoint = secondPoint;
    }

    getFirstPoint() {
        return this.firstPoint;
    }

    setFirstPoint(point) {
        this.firstPoint = point;
    }

    getSecondPoint() {
        return this.secondPoint;
    }

    setSecondPoint(point) {
        this.secondPoint = point;
    }

    move(newPoint) {
        const deltaX = newPoint.x - this.location().x;
        const deltaY = newPoint.y - this.location().y;

        this.setFirstPoint(Point.copy(this.getFirstPoint()).move(deltaX, deltaY));
        this.setSecondPoint(Point.copy(this.getSecondPoint()).move(deltaX, deltaY))
    }
}
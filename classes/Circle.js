window.Circle = class Circle extends Ellipse {
    constructor(lineColor, fillColor, center, radPoint) {
        const rad = Math.abs(center.x - radPoint.x);
        const upperLeftPoint = new Point(center.x - rad, center.y - rad);
        const bottomRightPoint = new Point(center.x + rad, center.y + rad);
        super(lineColor, fillColor, upperLeftPoint, bottomRightPoint);
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
window.Ellipse = class Ellipse extends Figure2D {
    constructor(lineColor, fillColor, upperLeftPoint, bottomRightPoint) {
        const center = Point.getMiddlePoint(upperLeftPoint, bottomRightPoint);
        super(lineColor, center, fillColor);
        this.firstPoint = upperLeftPoint;
        this.secondPoint = bottomRightPoint;
    }

    getFirstPoint() {
        return this.firstPoint;
    }

    getSecondPoint() {
        return this.secondPoint;
    }

    setFirstPoint(point) {
        this.firstPoint = point;
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

    draw() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        const xR = Math.abs(this.secondPoint.x - this.firstPoint.x) / 2;
        const yR = Math.abs(this.secondPoint.y - this.firstPoint.y) / 2;
        context.ellipse(this.center.x, this.center.y, xR, yR, 0, 0, 2 * Math.PI);
        context.stroke();
    }
}
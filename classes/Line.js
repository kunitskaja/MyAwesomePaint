window.Line = class Line extends Figure1D {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center);
        this.secondPoint = secondPoint;
    }

    findAxisIntersections(firstPoint, secondPoint) {
        //https://www.geeksforgeeks.org/program-find-line-passing-2-points/
        // ax + by = c
        const a = firstPoint.y - secondPoint.y;
        const b = secondPoint.x - firstPoint.x;
        const c = a * (secondPoint.x) + b * (secondPoint.y);
        if (a === 0) { // parallel to X
            const X = new Point(0, firstPoint.y);
            const Y = new Point(2000, firstPoint.y);
            return {X, Y}
        }
        if (b === 0) { // parallel to Y
            const X = new Point(firstPoint.x, 0);
            const Y = new Point(firstPoint.x, 800);
            return {X, Y}
        }
        if (c === 0) { // line includes (0, 0)
            const outOfXBound = c / a - b / a * 800 > 2000;
            const X = outOfXBound ? new Point(0, 0) : new Point(c / a - b / a * 800, 800);
            const Y = outOfXBound ? new Point(2000, c / b - a / b * 2000) : new Point(0, 0);
            return {X, Y}
        }
        const Y = c / b < 0 ? new Point(2000, c / b - a / b * 2000) : new Point(0, c / b);
        const X = c / a < 0 ? new Point(c / a - b / a * 800, 800) : new Point(c / a, 0);
        return {X, Y}
    };

    getSecondPoint() {
        return this.secondPoint;
    }

    setSecondPoint(newSecondPoint) {
        this.secondPoint = newSecondPoint;
    }

    move(newPoint) {
        const deltaX = newPoint.x - this.location().x;
        const deltaY = newPoint.y - this.location().y;
        this.setCenter(newPoint);
        const newSecondPoint = Point.copy(this.secondPoint);
        newSecondPoint.move(deltaX, deltaY);
        this.setSecondPoint(newSecondPoint);
        return this;
    }

    draw() {
        const firstPoint = this.findAxisIntersections(this.center, this.secondPoint).X;
        const secondPoint = this.findAxisIntersections(this.center, this.secondPoint).Y;
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.strokeStyle = this.getLineColor().toString();
        context.moveTo(firstPoint.x, firstPoint.y);
        context.lineTo(secondPoint.x, secondPoint.y);
        context.stroke();
    }
};

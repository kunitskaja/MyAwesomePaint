window.Line = class Line extends Figure1D {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center);
        this.secondPoint = secondPoint;
    }

    findAxisIntersections(Q, P) {
        //https://www.geeksforgeeks.org/program-find-line-passing-2-points/
        const a = Q.y - P.y;
        const b = P.x - Q.x;
        const c = a * (P.x) + b * (P.y);
        if (c === 0) {
            const X = new Point(0, 0);
            const Y = c / a - b / a * 800 > 2000 ? new Point(2000, c / b - a / b * 2000) : new Point(c / a - b / a * 800, 800);
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

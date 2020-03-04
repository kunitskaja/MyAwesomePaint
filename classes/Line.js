window.Line = class Line extends Figure1D {
    constructor(lineColor, center, secondPoint) {
        super(lineColor, center);
        this.firstPoint = this.findAxisIntersections(center, secondPoint).X;
        this.secondPoint = this.findAxisIntersections(center, secondPoint).Y;
    }

    findAxisIntersections(Q, P) {
        const a = Q.y - P.y;
        const b = P.x - Q.x;
        const c = a * (P.x) + b * (P.y);
      console.log(a);
      console.log(b);
      console.log(c);

      const X = new Point(c / a, 0);
      const Y = new Point(0, c / b);

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
    }

    draw() {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.strokeStyle = this.getLineColor().toString();
        context.moveTo(this.firstPoint.x, this.firstPoint.y);
        context.lineTo(this.secondPoint.x, this.secondPoint.y);
        context.stroke();
    }
}

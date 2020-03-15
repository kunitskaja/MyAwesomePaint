window.Polyline =  class Polyline extends Figure1D {
    constructor(lineColor, points) {
        const center = Point.getMiddlePoint(points);
        super(lineColor, center);
        this.segments = [];
        points.forEach(point => {
            if (points.indexOf(point) !== points.length - 1) {
                this.segments.push(new Segment(lineColor, point, points[points.indexOf(point) + 1]))
            }
        });
    }

    setSegments(newSegments) {
        this.segments = newSegments;
    }

    getSegments() {
        return this.segments;
    }

    move(newPoint) {
        const deltaX = newPoint.x - this.location().x;
        const deltaY = newPoint.y - this.location().y;
        const newSegments = this.getSegments.map(segment => segment.move(new Point(segment.getCenter().x + deltaX, segment.getCenter().y + deltaY)));
        this.setCenter(newPoint);
        this.setSegments(newSegments);
    }

    draw() {
        this.segments.forEach(segment => segment.draw());
    }
};
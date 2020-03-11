window.Polyline =  class Polyline extends Figure1D {
    constructor(lineColor, segments) {
        const center = Point.getMiddlePoint(segments.reduce(segment => segment.getCenter()));
        super(lineColor, center);
        this.segments = segments;
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
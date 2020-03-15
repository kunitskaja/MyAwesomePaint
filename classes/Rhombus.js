window.Rhombus =  class Rhombus extends Polygon {
  constructor(lineColor, fillColor, firstPoint, secondPoint) {
    const center = Point.getMiddlePoint(firstPoint, secondPoint);
    const points = [];
    points.push(new Point(center.x, firstPoint.y));
    points.push(new Point(firstPoint.x, center.y));
    points.push(new Point(center.x, secondPoint.y));
    points.push(new Point(secondPoint.x, center.y));
    super(lineColor, fillColor, ...points);
  }
};
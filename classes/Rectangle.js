window.Rectangle = class Rectangle extends Polygon {
  constructor(lineColor, fillColor, firstPoint, secondPoint) {
    const points = [];
    points.push(firstPoint);
    points.push(new Point(firstPoint.x, secondPoint.y));
    points.push(secondPoint);
    points.push(new Point(secondPoint.x, firstPoint.y));
    super(lineColor, fillColor, points);
  }
}
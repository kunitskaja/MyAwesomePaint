window.RegularPolygon = class RegularPolygon extends Polygon {
  constructor(lineColor, fillColor, sidesNumber, firstPoint, secondPoint) {
    const radius = Point.getDistance(firstPoint, secondPoint);
    const startAngle = Math.atan((secondPoint.y - firstPoint.y) / (secondPoint.x - firstPoint.x));
    const points = new Array(sidesNumber)
      .fill(null)
      .map((_, index) => {
        const newPointX = radius * Math.cos(2 * Math.PI * index / sidesNumber + startAngle) + firstPoint.x;
        const newPointY = radius * Math.sin(2 * Math.PI * index / sidesNumber + startAngle) + firstPoint.y;

        return new Point(newPointX, newPointY);
      });
    super(lineColor, fillColor, ...points);
  }
};
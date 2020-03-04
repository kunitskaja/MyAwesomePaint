window.Ellipse = class Ellipse extends Figure2D {
  constructor(firstPoint, secondPoint, lineColor, fillColor) {
    const center = Point.getMiddlePoint(firstPoint, secondPoint);
    super(lineColor, center, fillColor);
    this.firstPoint = firstPoint;
    this.secondPoint = secondPoint;
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
}